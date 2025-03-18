import { createProtectedRoute } from '@/auth/auth'

export const Route = createProtectedRoute('/logout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <></>
}
