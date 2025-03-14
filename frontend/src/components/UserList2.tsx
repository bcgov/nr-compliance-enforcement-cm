import { useQuery } from '@tanstack/react-query'
import { useFetch } from '@/api/request'
import { useOidc } from '@/auth/oidc'
import { gql } from 'graphql-request'
import { Link } from '@tanstack/react-router'

const GET_USERS = gql`
  query GetUsers {
    people {
      firstName
      lastName
    }
  }
`

// Replace with generated schema?
interface User {
  personGuid: string
  firstName: string
  lastName: string
}

const UserList2 = () => {
  const { isUserLoggedIn } = useOidc()

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => useFetch(GET_USERS),
    enabled: !!isUserLoggedIn,
  })

  if (!isUserLoggedIn) {
    return (
      <div>
        <p>Please log in to view employees.</p>
        <Link to="/protected">Go to Login</Link>
      </div>
    )
  }
  if (isLoading) return <div>Loading users...</div>
  if (error) {
    console.log(error.message)
    return <div>Error loading users</div>
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.people?.map((user: User) => (
          <li key={user.personGuid}>
            {user.firstName} - {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList2
