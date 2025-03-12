import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/investigations/$id')({
  component: ViewInvestigation,
})

function ViewInvestigation() {
  const { id } = Route.useParams()
  return (
    <div>
      <h5>Viewing investigation {id}</h5>
      <Link from={Route.fullPath} to="./edit">
        Edit Investigation
      </Link>
      <br />
      <Link to="..">Go back</Link>
    </div>
  )
}
