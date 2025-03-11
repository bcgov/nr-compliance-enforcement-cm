import { GraphQLClient } from 'graphql-request'

const GRAPHQL_URL =
  import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3003/graphql'

export const createGraphQLClient = (accessToken?: string) =>
  new GraphQLClient(GRAPHQL_URL, {
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {},
  })
