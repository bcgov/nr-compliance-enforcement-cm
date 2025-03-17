import { useOidc } from '@/auth/oidc'
import { GraphQLClient, RequestDocument } from 'graphql-request'
import { redirect } from '@tanstack/react-router'
import { TypedDocumentNode } from '~/@graphql-typed-document-node/core/typings'
import { config } from '@/config'

const GRAPHQL_URL = config.VITE_GRAPHQL_URL || 'http://localhost:3003/graphql'

const createGraphQLClient = () => {
  const { tokens } = useOidc()
  const accessToken = tokens?.accessToken
  if (!accessToken) {
    throw redirect({
      to: '/unauthorized',
    })
  } else {
    return new GraphQLClient(GRAPHQL_URL, {
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : {},
    })
  }
}

export const useFetch = async (
  QUERY: RequestDocument | TypedDocumentNode<any, object>,
): Promise<any> => {
  const client = createGraphQLClient()
  const data = client.request<any>(QUERY)
  return data
}
