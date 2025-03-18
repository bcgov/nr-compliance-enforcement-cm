import { createProtectedRoute } from '@/auth/auth'
import PersonForm from '@/components/PersonForm'

export const Route = createProtectedRoute('/add-person')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PersonForm />
}
