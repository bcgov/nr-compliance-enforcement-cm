import { enforceLoginRoles } from '@/auth/oidc'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'

export const createProtectedRoute =
  (path: keyof FileRoutesByPath, roles: string[] = []) =>
  (options: any) => {
    return createFileRoute(path)({
      ...options,
      beforeLoad: async () => {
        await enforceLoginRoles(roles)
        await options.beforeLoad?.()
      },
    })
  }
