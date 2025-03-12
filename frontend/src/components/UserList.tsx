import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/queries/users'
import { useOidc } from '@/auth/oidc'
import { Link } from '@tanstack/react-router'

export default function UserList() {
  const { tokens, isUserLoggedIn } = useOidc()
  const fetchWithToken = () => fetchUsers(tokens?.accessToken)
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchWithToken,
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

  console.log(data)

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.first_name} - {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  )
}
