import AppRoutes from '@/routes'
import { BrowserRouter } from 'react-router-dom'
import { Footer, Header } from '@bcgov/design-system-react-components'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function App() {
  return (
    <Container>
      <Header title={'QuickStart OpenShift'}>
        {' '}
        <a href={'/'} target={'_self'}>
          <Button color="secondary">Home</Button>
        </a>
      </Header>
      <Row>
        <Col>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}
