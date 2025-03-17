import PersonList from '@/components/UserList'
import { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

export const Dashboard = () => {
  return (
    <Row>
      <Col>
        <PersonList />
      </Col>
    </Row>
  )
}

export default Dashboard
