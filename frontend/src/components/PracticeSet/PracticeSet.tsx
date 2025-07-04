import { useState, useMemo, useRef, useEffect } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useMutation } from '@apollo/client'
import { UpdateSets, DeleteSets } from '../../graphql/sets'
import { SetType, AttendanceStatus, Lane, DogStatus } from '../../graphql/generated/graphql'
import { GripVertical, PlusLg, Trash } from 'react-bootstrap-icons'
import { SaveSpinner } from '../SaveSpinner'
import { useClub } from '../../contexts/ClubContext'
import { usePractice } from '../../contexts/PracticeContext'
import type { UpdateSetsMutation, DeleteSetsMutation, Dog, SetDog, Location } from '../../graphql/generated/graphql'
import { DogsPicker } from '../DogsPicker'
import { SetTypeAutocomplete } from './SetTypeAutocomplete'
import { LocationSelector } from './LocationSelector'
import { useTheme } from '../../contexts/ThemeContext'
import type { ValidationError } from '../../services/practiceValidation'

interface DogWithSetCount extends Dog {
  setCount: number
}

interface PracticeSetProps {
  practiceId: string
  disabled: boolean
  validationErrors?: ValidationError[]
}

interface SortableSetProps {
  set: NonNullable<ReturnType<typeof usePractice>['sets'][0]>
  onDelete: (id: string) => void
  onSetTypeChange: (id: string, type: SetType | null, typeCustom: string | null) => void
  onSetDogsChange?: (setId: string, dogs: Partial<SetDog>[]) => void
  availableDogs: DogWithSetCount[]
  otherLocations: Location[]
  defaultLocation?: Location | null
  disabled?: boolean
  dogsWithValidationIssues?: Set<string>
  validationErrors?: ValidationError[]
  inputRef?: React.RefObject<HTMLInputElement | null>
  getValidationErrorsForSet?: (setId: string) => ValidationError[]
}

function SortableSet({
  set,
  onDelete,
  onSetTypeChange,
  availableDogs,
  onSetDogsChange,
  otherLocations,
  defaultLocation,
  disabled = false,
  dogsWithValidationIssues = new Set<string>(),
  validationErrors,
  inputRef,
  getValidationErrorsForSet
}: SortableSetProps) {
  const handleDogsChange = (lane: Lane | null, setDogs: Partial<SetDog>[]) => {
    const updatedLaneDogs: Partial<SetDog>[] = setDogs.map((setDog, idx) => ({
      dogId: setDog.dogId,
      index: idx + 1,
      lane,
    }))
    const otherLaneDogs: Partial<SetDog>[] = set.dogs.filter(d => d.lane !== lane).map(dog => ({
      dogId: dog.dogId,
      index: dog.index,
      lane: dog.lane,
    }))
    const updatedDogs = [...otherLaneDogs, ...updatedLaneDogs]
    onSetDogsChange?.(set.id, updatedDogs)
  }

  const hasCustomLocation = set.locationId && set.locationId !== defaultLocation?.id
  const customLocation = hasCustomLocation ? otherLocations.find(l => l.id === set.locationId) : null
  const setLocation = customLocation || defaultLocation || { id: '', name: '', isDefault: false, isDoubleLane: false }

  const handleLocationRemove = () => {
    onDelete(set.id)
  }

  return (
    <div>
      {customLocation && (
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="mb-0">{customLocation.name}</h6>
          <Button variant="outline-danger" size="sm" onClick={handleLocationRemove} disabled={disabled}>
            <Trash />
          </Button>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Group className="flex-grow-1">
          <SetTypeAutocomplete
            value={set.typeCustom ? SetType.Custom : (set.type ?? null)}
            typeCustom={set.typeCustom ?? null}
            onChange={(type, typeCustom) => onSetTypeChange(set.id, type, typeCustom)}
            disabled={disabled}
            inputRef={inputRef}
          />
        </Form.Group>
      </div>

      <DogsSection
        set={set}
        availableDogs={availableDogs}
        onDogsChange={handleDogsChange}
        location={setLocation}
        disabled={disabled}
        dogsWithValidationIssues={dogsWithValidationIssues}
        validationErrors={validationErrors}
        getValidationErrorsForSet={getValidationErrorsForSet}
      />
    </div>
  )
}

interface DogsSectionProps {
  set: NonNullable<ReturnType<typeof usePractice>['sets'][0]>
  availableDogs: DogWithSetCount[]
  onDogsChange: (lane: Lane | null, setDogs: Partial<SetDog>[]) => void
  location: { id: string; name: string; isDefault: boolean; isDoubleLane: boolean }
  disabled?: boolean
  dogsWithValidationIssues?: Set<string>
  validationErrors?: ValidationError[]
  getValidationErrorsForSet?: (setId: string) => ValidationError[]
}

function DogsSection({ set, availableDogs, onDogsChange, location, disabled, dogsWithValidationIssues, validationErrors, getValidationErrorsForSet }: DogsSectionProps) {
  const getDogsForLane = (lane: Lane | null) => set.dogs.filter(d => d.lane === lane)

  // Determine lanes based on location
  const lanes = location.isDoubleLane ? [Lane.Left, Lane.Right] : [null]

  return (
    <div className="d-flex">
      {lanes.map(lane => {
        const dogsUsedInOtherLanes = new Set<string>()
        set.dogs.forEach(setDog => {
          if (setDog.lane !== lane) {
            dogsUsedInOtherLanes.add(setDog.dogId)
          }
        })

        const availableDogsForLane = availableDogs.filter(dog => !dogsUsedInOtherLanes.has(dog.id))

        return (
          <div key={lane ?? 'single'} className="flex-grow-1 me-2">
            <DogsPicker
              value={getDogsForLane(lane).map(sd => {
                const dog = availableDogs.find(d => d.id === sd.dogId)
                if (!dog) return null
                return {
                  ...sd,
                  dog
                }
              }).filter(Boolean) as unknown as Array<SetDog>}
              onChange={setDogs => onDogsChange(lane, setDogs)}
              availableDogs={availableDogsForLane}
              placeholder={lane ? `Add dog to ${lane} lane` : 'Add dog'}
              disabled={disabled}
              dogsWithValidationIssues={dogsWithValidationIssues}
              validationErrors={validationErrors}
              getValidationErrorsForSet={getValidationErrorsForSet}
              currentSetId={set.id}
            />
          </div>
        )
      })}
    </div>
  )
}

interface SortableGroupProps {
  group: { index: number; sets: NonNullable<ReturnType<typeof usePractice>['sets']> }
  onDelete: (id: string) => void
  onDeleteGroup: (index: number) => void
  onSetTypeChange: (id: string, type: SetType | null, typeCustom: string | null) => void
  onSetDogsChange?: (setId: string, dogs: Partial<SetDog>[]) => void
  onLocationAdd?: (locationId: string, index: number) => void
  availableDogs: DogWithSetCount[]
  otherLocations: Location[]
  defaultLocation?: Location | null
  disabled?: boolean
  validationErrors?: ValidationError[]
  getSetTypeRef: (setId: string) => React.RefObject<HTMLInputElement | null>
  getDogsWithValidationIssuesForSet: (setId: string) => Set<string>
  getValidationErrorsForSet: (setId: string) => ValidationError[]
}

function SortableGroup({
  group,
  onDelete,
  onDeleteGroup,
  onSetTypeChange,
  availableDogs,
  onSetDogsChange,
  onLocationAdd,
  otherLocations,
  defaultLocation,
  disabled = false,
  validationErrors,
  getSetTypeRef,
  getDogsWithValidationIssuesForSet,
  getValidationErrorsForSet
}: SortableGroupProps) {
  const { isDark } = useTheme()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: group.index.toString(), disabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const usedLocationIdsInGroup = new Set(group.sets.map(set => set.locationId).filter(Boolean))

  const availableLocationsForThisSet = otherLocations.filter(location =>
    !usedLocationIdsInGroup.has(location.id) || location.id === group.sets[0].locationId
  )

  const handleLocationAdd = (locationId: string) => {
    onLocationAdd?.(locationId, group.index)
  }

  return (
    <div className="mb-3" ref={setNodeRef} style={style}>
      <div className="d-flex gap-0">
        <Card className="flex-shrink-0 rounded-end-0" style={{ width: 'auto' }}>
          <Card.Body
            {...attributes}
            {...listeners}
            className={`${isDark ? 'bg-dark' : 'bg-light'} cursor-grab p-4 d-flex align-items-center h-100 ${disabled ? '' : 'cursor-grab'}`}>
            <h5 className="text-nowrap mb-0">
              {!disabled && <GripVertical />}
              <span>{group.index}</span>
            </h5>
          </Card.Body>
        </Card>

        <Card className="flex-grow-1 rounded-start-0">
          <Card.Body>
            {group.sets.map((set, idx) => {
              const dogsUsedInOtherSetsInGroup = new Set<string>()
              group.sets.forEach(otherSet => {
                if (otherSet.id !== set.id) {
                  otherSet.dogs.forEach(setDog => {
                    dogsUsedInOtherSetsInGroup.add(setDog.dogId)
                  })
                }
              })

              const availableDogsForThisSet = availableDogs.filter(dog => !dogsUsedInOtherSetsInGroup.has(dog.id))

              return (
                <div key={set.id} className={idx > 0 ? "mt-4 pt-4 border-top" : ""}>
                  <SortableSet
                    set={set}
                    onDelete={onDelete}
                    onSetTypeChange={onSetTypeChange}
                    onSetDogsChange={onSetDogsChange}
                    availableDogs={availableDogsForThisSet}
                    otherLocations={otherLocations}
                    defaultLocation={defaultLocation}
                    disabled={disabled}
                    dogsWithValidationIssues={getDogsWithValidationIssuesForSet(set.id)}
                    validationErrors={validationErrors}
                    inputRef={getSetTypeRef(set.id)}
                    getValidationErrorsForSet={getValidationErrorsForSet}
                  />
                </div>
              )
            })}
          </Card.Body>
          <Card.Footer className="d-flex rounded-start-0">
            <div className="d-flex gap-2 ms-auto">
              {availableLocationsForThisSet.length > 0 && (
                <LocationSelector
                  availableLocations={availableLocationsForThisSet}
                  onSelect={handleLocationAdd}
                  disabled={disabled}
                />
              )}
              <Button variant="outline-danger" size="sm" className="text-nowrap" onClick={() => onDeleteGroup(group.index)} disabled={disabled}>
                <Trash /> Remove Set
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export function PracticeSet({ practiceId, disabled, validationErrors }: PracticeSetProps) {
  const { dogs, locations } = useClub()
  const { attendances, sets } = usePractice()
  const [isSaving, setIsSaving] = useState(false)
  const [newlyCreatedSetIds, setNewlyCreatedSetIds] = useState<Set<string>>(new Set())
  const setTypeRefs = useRef<Map<string, React.RefObject<HTMLInputElement | null>>>(new Map())

  const [updateSets] = useMutation<UpdateSetsMutation>(UpdateSets)
  const [deleteSets] = useMutation<DeleteSetsMutation>(DeleteSets)

  // Helper function to get validation errors for a specific set
  const getValidationErrorsForSet = (setId: string) => {
    if (!validationErrors) return []

    return validationErrors.filter(error => {
      if (error.code === 'SAME_HANDLER_IN_SET' && error.extra?.conflicts) {
        return error.extra.conflicts.some((conflict: any) => conflict.setId === setId)
      }
      if (error.code === 'BACK_TO_BACK_HANDLERS' && error.extra?.backToBackHandlers) {
        return error.extra.backToBackHandlers.some((handler: any) => {
          if (handler.dogIds) {
            const set = sets.find(s => s.id === setId)
            if (set) {
              return set.dogs.some(setDog => handler.dogIds.includes(setDog.dogId))
            }
          }
          return false
        })
      }
      return false
    })
  }

  // Helper function to get dog IDs with validation issues for a specific set
  const getDogsWithValidationIssuesForSet = (setId: string) => {
    const dogIdsWithIssues = new Set<string>()
    const setValidationErrors = getValidationErrorsForSet(setId)

    setValidationErrors.forEach(error => {
      if (error.code === 'SAME_HANDLER_IN_SET' && error.extra?.conflicts) {
        error.extra.conflicts.forEach((conflict: any) => {
          if (conflict.setId === setId && conflict.dogIds) {
            conflict.dogIds.forEach((dogId: string) => dogIdsWithIssues.add(dogId))
          }
        })
      }
      if (error.code === 'BACK_TO_BACK_HANDLERS' && error.extra?.backToBackHandlers) {
        error.extra.backToBackHandlers.forEach((handler: any) => {
          if (handler.dogIds) {
            const set = sets.find(s => s.id === setId)
            if (set) {
              set.dogs.forEach(setDog => {
                if (handler.dogIds.includes(setDog.dogId)) {
                  dogIdsWithIssues.add(setDog.dogId)
                }
              })
            }
          }
        })
      }
    })

    return dogIdsWithIssues
  }

  const availableDogs = useMemo(() => {
    const dogSetCounts = new Map<string, number>()
    sets.forEach(set => {
      set.dogs.forEach(setDog => {
        const currentCount = dogSetCounts.get(setDog.dogId) || 0
        dogSetCounts.set(setDog.dogId, currentCount + 1)
      })
    })

    // Get dogs from club context and filter by attendance and status
    return dogs
      .filter(dog => {
        const attendance = attendances.find(a => a.dogId === dog.id)
        return attendance && attendance.attending !== AttendanceStatus.NotAttending && dog.status === DogStatus.Active
      })
      .map(dog => ({
        ...dog,
        setCount: dogSetCounts.get(dog.id) || 0
      }))
  }, [attendances, sets, dogs])

  const handleSetReorder = async (event: DragEndEvent) => {
    if (disabled) return

    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldGroupIndex = parseInt(active.id as string)
    const newGroupIndex = parseInt(over.id as string)

    if (isNaN(oldGroupIndex) || isNaN(newGroupIndex)) return

    const setsToUpdate = sets.filter(set => set.index === oldGroupIndex)
    const targetIndex = newGroupIndex

    const updates: Array<{ id: string; index: number }> = []

    setsToUpdate.forEach(set => {
      updates.push({ id: set.id, index: targetIndex })
    })

    sets.forEach(set => {
      if (set.index !== oldGroupIndex) {
        let newIndex = set.index
        if (oldGroupIndex < newGroupIndex && set.index > oldGroupIndex && set.index <= newGroupIndex) {
          newIndex = set.index - 1
        } else if (oldGroupIndex > newGroupIndex && set.index >= newGroupIndex && set.index < oldGroupIndex) {
          newIndex = set.index + 1
        }
        if (newIndex !== set.index) {
          updates.push({ id: set.id, index: newIndex })
        }
      }
    })

    if (updates.length > 0) {
      try {
        setIsSaving(true)
        await updateSets({
          variables: {
            updates: updates
          }
        })
      } catch (err) {
        console.error('Error updating sets during reorder:', err)
      } finally {
        setIsSaving(false)
      }
    }
  }

  const handleSetUpdate = async (setId: string, updates: Partial<{ index: number; type: SetType | null; typeCustom: string | null; dogs: Partial<SetDog>[] }>) => {
    try {
      setIsSaving(true)
      await updateSets({
        variables: {
          updates: [{
            id: setId,
            ...updates
          }]
        }
      })
    } catch (err) {
      console.error('Error updating set:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleAddSet = async () => {
    const defaultLocationSets = sets.filter(set => set.locationId === defaultLocation?.id)
    const maxIndex = defaultLocationSets.length > 0 ? Math.max(...defaultLocationSets.map(set => set.index)) : 0
    const newIndex = maxIndex + 1

    try {
      setIsSaving(true)
      const result = await updateSets({
        variables: {
          updates: [{
            practiceId,
            locationId: defaultLocation?.id,
            index: newIndex,
            dogs: []
          }]
        }
      })

      // Track the newly created set for focusing
      if (result.data?.updateSets) {
        const newSetId = result.data.updateSets[0]?.id
        if (newSetId) {
          setNewlyCreatedSetIds(prev => new Set([...prev, newSetId]))
        }
      }
    } catch (err) {
      console.error('Error creating set:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteSet = async (setId: string) => {
    try {
      setIsSaving(true)
      await deleteSets({
        variables: { ids: [setId] }
      })
    } catch (err) {
      console.error('Error deleting set:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteGroup = async (index: number) => {
    const setsToDelete = sets.filter(set => set.index === index)
    const setIds = setsToDelete.map(set => set.id)

    try {
      setIsSaving(true)
      await deleteSets({
        variables: { ids: setIds }
      })
    } catch (err) {
      console.error('Error deleting set group:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleSetTypeChange = async (setId: string, type: SetType | null, typeCustom: string | null) => {
    await handleSetUpdate(setId, { type, typeCustom })
  }

  const handleDogsChange = async (setId: string, dogs: Partial<SetDog>[]) => {
    await handleSetUpdate(setId, { dogs })
  }

  const handleLocationAdd = async (locationId: string, index: number) => {
    try {
      setIsSaving(true)
      await updateSets({
        variables: {
          updates: [{
            practiceId,
            locationId: locationId,
            index: index,
            dogs: []
          }]
        }
      })
    } catch (err) {
      console.error('Error creating set with location:', err)
    } finally {
      setIsSaving(false)
    }
  }

  const defaultLocation = useMemo(() => locations.find(l => l.isDefault), [locations])

  const otherLocations = useMemo(() =>
    locations.filter(location => !location.isDefault),
    [locations]
  )

  // Group sets by index to show them together visually
  const groupedSets = useMemo(() => {
    const groups = new Map<number, NonNullable<ReturnType<typeof usePractice>['sets']>>()

    sets.forEach(set => {
      if (!groups.has(set.index)) {
        groups.set(set.index, [])
      }
      groups.get(set.index)!.push(set)
    })

    return Array.from(groups.entries()).map(([index, sets]) => ({
      index,
      sets: sets.sort((a, b) => {
        // Sort by location: default first, then others alphabetically
        const aIsDefault = a.locationId === defaultLocation?.id
        const bIsDefault = b.locationId === defaultLocation?.id
        if (aIsDefault && !bIsDefault) return -1
        if (!aIsDefault && bIsDefault) return 1
        if (aIsDefault && bIsDefault) return 0

        const aLocation = otherLocations.find(l => l.id === a.locationId)
        const bLocation = otherLocations.find(l => l.id === b.locationId)
        return (aLocation?.name || '').localeCompare(bLocation?.name || '')
      })
    }))
  }, [sets, defaultLocation?.id, otherLocations])

  // Helper function to get or create a ref for a set
  const getSetTypeRef = (setId: string) => {
    if (!setTypeRefs.current.has(setId)) {
      setTypeRefs.current.set(setId, { current: null })
    }
    return setTypeRefs.current.get(setId)!
  }

  // Focus newly created sets
  useEffect(() => {
    newlyCreatedSetIds.forEach(setId => {
      const ref = setTypeRefs.current.get(setId)
      if (ref?.current) {
        setTimeout(() => {
          ref.current?.focus()
          ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }, 100)
        setNewlyCreatedSetIds(prev => {
          const newSet = new Set(prev)
          newSet.delete(setId)
          return newSet
        })
      }
    })
  }, [newlyCreatedSetIds, sets])

  return (
    <div>
      <DndContext
        onDragEnd={handleSetReorder}
      >
        <SortableContext
          items={groupedSets.map(group => group.index.toString())}
          strategy={verticalListSortingStrategy}
        >
          {groupedSets.map(group => (
            <SortableGroup
              key={group.index}
              group={group}
              onDelete={handleDeleteSet}
              onDeleteGroup={handleDeleteGroup}
              onSetTypeChange={handleSetTypeChange}
              onSetDogsChange={handleDogsChange}
              onLocationAdd={handleLocationAdd}
              availableDogs={availableDogs}
              otherLocations={otherLocations}
              defaultLocation={defaultLocation}
              disabled={disabled}
              validationErrors={validationErrors}
              getSetTypeRef={getSetTypeRef}
              getDogsWithValidationIssuesForSet={getDogsWithValidationIssuesForSet}
              getValidationErrorsForSet={getValidationErrorsForSet}
            />
          ))}
        </SortableContext>
      </DndContext>
      <div className="d-flex justify-content-end mb-4">
        <Button variant="primary" onClick={handleAddSet} disabled={disabled}>
          <PlusLg className="me-2" />
          Add Set
        </Button>
      </div>
      <SaveSpinner show={isSaving} />
    </div>
  )
}
