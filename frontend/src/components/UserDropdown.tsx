import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Check } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useClub } from '../contexts/ClubContext'
import { useQuery } from '@apollo/client'
import { GetClubs } from '../graphql/clubs'
import { ThemeToggle } from './ThemeToggle'
import type { GetClubsQuery } from '../graphql/generated/graphql'

export const UserDropdown: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { selectedClub, setSelectedClub } = useClub()
  const { loading, error, data } = useQuery<GetClubsQuery>(GetClubs)

  React.useEffect(() => {
    if (data?.clubs && !selectedClub && data.clubs.length > 0) {
      setSelectedClub(data.clubs[0] as any)
    }
  }, [data, selectedClub, setSelectedClub])

  if (!user) {
    return null
  }

  const handleClubSelect = (clubId: string) => {
    const club = data?.clubs.find((c) => c.id === clubId)
    if (club) {
      setSelectedClub(club as any)
    }
  }

  return (
    <Dropdown align="end">
      <Dropdown.Toggle
        variant="outline-light"
        size="sm"
        className="d-flex align-items-center gap-2"
      >
        <span className="d-none d-md-inline">
          {user.firstName} @ {selectedClub?.name || 'No Club'}
        </span>
        <span className="d-md-none">
          {user.firstName}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>
          {user.firstName} {user.lastName}
        </Dropdown.Header>

        <Dropdown.Item onClick={() => navigate('/account')}>
          Account Details
        </Dropdown.Item>

        <Dropdown.Item onClick={logout} className="text-danger">
          Logout
        </Dropdown.Item>

        <Dropdown.Divider />

        {loading && <Dropdown.Item disabled>Loading clubs...</Dropdown.Item>}
        {error && <Dropdown.Item disabled className="text-danger">Failed to load clubs</Dropdown.Item>}
        {data?.clubs.map((club) => (
          <Dropdown.Item
            key={club.id}
            onClick={() => handleClubSelect(club.id)}
            active={selectedClub?.id === club.id}
          >
            <div className="d-flex align-items-center">
              <div className="me-2" style={{ width: '16px' }}>
                {selectedClub?.id === club.id && <Check />}
              </div>
              {club.name}
            </div>
          </Dropdown.Item>
        ))}

        <Dropdown.Divider />

        <ThemeToggle />
      </Dropdown.Menu>
    </Dropdown>
  )
}
