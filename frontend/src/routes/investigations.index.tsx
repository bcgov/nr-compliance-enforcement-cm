import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/investigations/')({
  component: Investigations,
})

function Investigations() {
  return (
    <div>
      <h5>Investigations WOW</h5>
      <Link to="/investigations/$id" params={{ id: '1' }}>
        Investigation 1
      </Link>
      <br />
      <Link to="/investigations/$id" params={{ id: '2' }}>
        Investigation 2
      </Link>
      <br />
      <Link to="/investigations/$id" params={{ id: '3' }}>
        Investigation 3
      </Link>
    </div>
  )
}
