import { Link } from '@tanstack/react-router'
import { createProtectedRoute } from '@/auth/auth'

export const Route = createProtectedRoute('/persons/$id')({
  component: ViewPerson,
})

function ViewPerson() {
  const { id } = Route.useParams()
  return (
    <div>
      <h5>Viewing person {id}</h5>
    </div>
  )
}
