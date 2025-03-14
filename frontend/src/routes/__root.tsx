import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Footer, Header } from '@bcgov/design-system-react-components'
import { Container } from 'react-bootstrap'
import NotFound from '@/components/NotFound'

export const Route = createRootRoute({
  component: () => (
    <>
      <Container>
        <Header title={'Nat Investigations'}>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/add-person" className="[&.active]:font-bold">
            Add Person
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>{' '}
          <Link to="/protected" className="[&.active]:font-bold">
            Protected By Login
          </Link>{' '}
          <Link to="/protected-by-role" className="[&.active]:font-bold">
            Protected By Role
          </Link>{' '}
          <Link to="/investigations" className="[&.active]:font-bold">
            Investigations
          </Link>{' '}
          <Link to="/search" className="[&.active]:font-bold"></Link>
        </Header>
        <Outlet />
      </Container>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <NotFound />,
})
