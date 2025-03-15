import UserList2 from '@/components/UserList'
import { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

export const Dashboard = () => {
  return (
    <Row>
      <Col>
        <UserList2 />
      </Col>
    </Row>
  )
}

export default Dashboard
