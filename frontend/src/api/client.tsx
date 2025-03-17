import { GraphQLClient } from 'graphql-request'
import { config } from '@/config'

const GRAPHQL_URL = config.VITE_GRAPHQL_URL || 'http://localhost:3003/graphql'

export const createGraphQLClient = (accessToken?: string) =>
  new GraphQLClient(GRAPHQL_URL, {
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {},
  })
