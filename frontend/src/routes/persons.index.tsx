import { createProtectedRoute } from '@/auth/auth'
import PersonList from '@/components/PersonList'

export const Route = createProtectedRoute('/persons/')({
  component: Persons,
})

function Persons() {
  return (
    <div>
      <PersonList />
    </div>
  )
}
