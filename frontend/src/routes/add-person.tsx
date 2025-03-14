import { createFileRoute } from '@tanstack/react-router'
import PersonForm from '@/components/PersonForm'

export const Route = createFileRoute('/add-person')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PersonForm />
}
