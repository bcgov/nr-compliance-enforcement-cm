import { GraphQLClient } from 'graphql-request'
import { config } from '@/config'
import { getAccessToken } from '@/auth/oidc'

const GRAPHQL_URL = config.VITE_GRAPHQL_URL || 'http://localhost:3003/graphql'

const getClient = async () => {
  const accessToken = await getAccessToken()
  return new GraphQLClient(GRAPHQL_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const useRequest = async (QUERY: any) => {
  const client = await getClient()
  return client.request<any>(QUERY)
}
