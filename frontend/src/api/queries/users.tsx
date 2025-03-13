import { gql } from 'graphql-request'
import { createGraphQLClient } from '../client'

// GraphQL query
const GET_USERS = gql`
  query GetUsers {
    people {
      firstName
      lastName
    }
  }
`

interface User {
  personGuid: string
  firstName: string
  lastName: string
}

export const fetchUsers = async (token?: string): Promise<User[]> => {
  const client = createGraphQLClient(token)
  const data = await client.request<any>(GET_USERS)
  console.log(data)
  return data.people
}
