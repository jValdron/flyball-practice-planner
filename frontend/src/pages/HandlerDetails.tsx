import React, { useState } from 'react'
import { Container, Button, Alert, Spinner, Form, Breadcrumb } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useClub } from '../contexts/ClubContext'
import { Trash, PlusLg, ChevronLeft, Save } from 'react-bootstrap-icons'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal'
import { useQuery, useMutation } from '@apollo/client'
import { GetHandlerById, CreateHandler, UpdateHandler, DeleteHandler } from '../graphql/handlers'
import { formatFullDateTime } from '../utils/dateUtils'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import type { GetHandlerByIdQuery, GetHandlerByIdQueryVariables } from '../graphql/generated/graphql'

type HandlerFormData = {
  givenName: string
  surname: string
}

function HandlerDetails() {
  const navigate = useNavigate()
  const { handlerId } = useParams<{ handlerId: string }>()
  const { selectedClub } = useClub()
  const [error, setError] = useState<string | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [formData, setFormData] = useState<HandlerFormData>({
    givenName: '',
    surname: ''
  })

  const isNewHandler = handlerId === 'new'

  // Query for handler details if editing
  const { data: handlerData, loading: loadingHandler } = useQuery<GetHandlerByIdQuery, GetHandlerByIdQueryVariables>(GetHandlerById, {
    variables: { id: handlerId || '' },
    skip: !handlerId || isNewHandler,
    onCompleted: (data) => {
      if (data.handler) {
        setFormData({
          givenName: data.handler.givenName,
          surname: data.handler.surname
        })
      }
    },
    onError: (error) => {
      setError('Failed to load handler details. Please try again later.')
      console.error('Error loading handler:', error)
    }
  })

  const title = isNewHandler ? 'New Handler' : `${handlerData?.handler?.givenName} ${handlerData?.handler?.surname} - Handler Details`
  useDocumentTitle(title)

  // Mutations
  const [createHandler] = useMutation(CreateHandler, {
    onCompleted: (data) => {
      if (data.createHandler) {
        navigate('/dogs')
      }
    },
    onError: (error) => {
      setError('Failed to create handler. Please try again later.')
      console.error('Error creating handler:', error)
    }
  })

  const [updateHandler] = useMutation(UpdateHandler, {
    onCompleted: (data) => {
      if (data.updateHandler) {
        navigate('/dogs')
      }
    },
    onError: (error) => {
      setError('Failed to update handler. Please try again later.')
      console.error('Error updating handler:', error)
    }
  })

  const [deleteHandler] = useMutation(DeleteHandler, {
    onCompleted: () => navigate('/dogs'),
    onError: (error) => {
      setError('Failed to delete handler. Please try again later.')
      console.error('Error deleting handler:', error)
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent, redirectToNewDog: boolean = false) => {
    e.preventDefault()
    try {
      setError(null)
      if (handlerId && !isNewHandler) {
        await updateHandler({
          variables: {
            id: handlerId,
            ...formData
          }
        })
        if (redirectToNewDog) {
          navigate(`/dogs/new?ownerId=${handlerId}`)
        }
      } else {
        const result = await createHandler({
          variables: {
            ...formData,
            clubId: selectedClub?.id || ''
          }
        })
        if (result.data?.createHandler && redirectToNewDog) {
          navigate(`/dogs/new?ownerId=${result.data.createHandler.id}`)
        }
      }
    } catch (err) {
      // Error handling is done in onError callbacks
    }
  }

  const handleDeleteHandler = async () => {
    if (!handlerId || isNewHandler) return
    try {
      setError(null)
      await deleteHandler({
        variables: { id: handlerId }
      })
    } catch (err) {
      // Error handling is done in onError callbacks
    } finally {
      setShowDeleteModal(false)
    }
  }

  const loading = loadingHandler

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    )
  }

  if (!selectedClub) {
    return (
      <Container>
        <Alert variant="info" className="mt-4">
          Please select a club to view handler details.
        </Alert>
      </Container>
    )
  }

  return (
    <Container>
      <DeleteConfirmationModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteHandler}
        title="Delete Handler"
        message={`Are you sure you want to delete <strong>${handlerData?.handler?.givenName} ${handlerData?.handler?.surname}</strong>? This will delete all dogs associated with this handler and remove them from any practices.<p class="mt-2 text-danger">This action cannot be undone.</p>`}
        confirmButtonText="Delete Handler"
      />
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate('/dogs')}>Handlers & Dogs</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {isNewHandler ? 'Add New Handler' : `${handlerData?.handler?.givenName} ${handlerData?.handler?.surname}`}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{isNewHandler ? 'Add New Handler' : 'Edit Handler'}</h1>
        <div className="d-flex gap-2">
          {!isNewHandler && handlerData?.handler && (
            <>
              <Button variant="success" onClick={() => handlerData.handler && navigate(`/dogs/new?handlerId=${handlerData.handler.id}`)}>
                <PlusLg className="me-2" />
                Add Dog
              </Button>
              <Button variant="outline-danger" onClick={() => setShowDeleteModal(true)}>
                <Trash className="me-2" />
                Delete Handler
              </Button>
            </>
          )}
        </div>
      </div>

      {error && (
        <Alert variant="danger" className="mb-4" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Given Name</Form.Label>
          <Form.Control
            type="text"
            name="givenName"
            value={formData.givenName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <div className="d-flex gap-2 mt-4 justify-content-end">
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/dogs')}
          >
            <ChevronLeft className="me-2" />
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            <Save className="me-2" />
            {isNewHandler ? 'Create Handler' : 'Save Changes'}
          </Button>
          {isNewHandler && (
            <Button
              type="button"
              variant="success"
              onClick={(e) => handleSubmit(e, true)}
            >
              <Save className="me-2" />
              Save & Add Dog
            </Button>
          )}
        </div>

        {!isNewHandler && handlerData?.handler && (
          <div className="mt-4 text-muted">
            <p><strong>Created:</strong> {formatFullDateTime(handlerData.handler.createdAt)}</p>
            <p><strong>Last Updated:</strong> {formatFullDateTime(handlerData.handler.updatedAt)}</p>
          </div>
        )}
      </Form>
    </Container>
  )
}

export default HandlerDetails
