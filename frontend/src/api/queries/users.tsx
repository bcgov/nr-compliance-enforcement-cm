import { gql } from 'graphql-request'
import { createGraphQLClient } from '../client'

// GraphQL query
const GET_USERS = gql`
  query GetUsers {
    getPocNameList {
      id
      first_name
      last_name
    }
  }
`

interface User {
  id: string
  first_name: string
  last_name: string
}

export const fetchUsers = async (token?: string): Promise<User[]> => {
  const client = createGraphQLClient(token)
  const data = await client.request<any>(GET_USERS)
  return data.getPocNameList
}
