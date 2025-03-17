import { useQuery } from '@tanstack/react-query'
import { useFetch } from '@/api/request'
import { useOidc } from '@/auth/oidc'
import { gql } from 'graphql-request'
import { Link } from '@tanstack/react-router'

const GET_PEOPLE = gql`
  query GetUsers {
    people {
      firstName
      lastName
    }
  }
`

// Replace with generated schema?
interface Person {
  personGuid: string
  firstName: string
  lastName: string
}

const PersonList = () => {
  const { isUserLoggedIn } = useOidc()

  const { data, isLoading, error } = useQuery({
    queryKey: ['people'],
    queryFn: () => useFetch(GET_PEOPLE),
    enabled: !!isUserLoggedIn,
  })

  if (!isUserLoggedIn) {
    return (
      <div>
        <p>Please log in to view persons.</p>
        <Link to="/protected">Go to Login</Link>
      </div>
    )
  }
  if (isLoading) return <div>Loading persons...</div>
  if (error) {
    console.log(error.message)
    return <div>Error loading persons</div>
  }

  return (
    <div>
      <h2>Persons</h2>
      <ul>
        {data.people?.map((person: Person) => (
          <li key={person.personGuid}>
            {person.firstName} - {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonList
