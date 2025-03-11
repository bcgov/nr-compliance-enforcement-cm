import UserList from '@/components/UserList'
import { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  Row,
  Col,
} from 'react-bootstrap'
import natrix from '@/assets/natrix.png'

export default function Dashboard() {
  const [counter, setCounter] = useState<any>(0)

  return (
    <Row>
      <Col>
        <h1>Welcome to...</h1>
        <p>Counter: {counter}</p>
        <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
        <Card className="w-25 p-3">
          <CardHeader>Welcome to...</CardHeader>
          <CardBody>
            <Image className="img-fluid" src={natrix} />
          </CardBody>
        </Card>
        <UserList />
      </Col>
    </Row>
  )
}
