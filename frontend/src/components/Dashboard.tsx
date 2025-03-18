import { Button, Card } from 'react-bootstrap'
import mountains from '@/assets/mountains.jpg'
import { Link } from '@tanstack/react-router'
import { useOidc } from '@/auth/oidc'

export const Dashboard = () => {
  const { isUserLoggedIn } = useOidc()
  return (
    <Card text="light">
      <Card.Img src={mountains} />
      <Card.ImgOverlay>
        <Card.Body className="w-50">
          <Card.Title className="fs-1">Welcome to NatInvestigations</Card.Title>
          <Card.Text>
            Investigations involving inquiries, inspections, interviews, and
            intelligence interpretation.
          </Card.Text>
          {!isUserLoggedIn && (
            <Link to="/investigations">
              <Button variant="primary">Log in</Button>
            </Link>
          )}
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Dashboard
