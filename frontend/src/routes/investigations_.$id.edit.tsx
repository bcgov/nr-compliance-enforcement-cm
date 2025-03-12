import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/investigations_/$id/edit')({
  component: EditInvestigation,
})

function EditInvestigation() {
  const { id } = Route.useParams()
  return (
    <div>
      <h5>Editing investigation {id}</h5>
      <Link to="..">Go back</Link>
    </div>
  )
}
