import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { useRequest } from '@/graphql/client'
import { Table, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from '@tanstack/react-router'

const PersonList = () => {
  // GraphQL query
  const GET_PERSONS = gql`
    query GetPersons {
      people {
        personGuid
        firstName
        lastName
      }
    }
  `

  interface Person {
    personGuid: string
    firstName: string
    lastName: string
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['persons'],
    queryFn: () => useRequest(GET_PERSONS),
  })

  if (isLoading) return <div>Loading users...</div>
  if (error) {
    console.log(error.message)
    return <div>Error loading users</div>
  }

  return (
    <>
      <Row>
        <Col md={10} className="">
          <h2>Persons</h2>
        </Col>
        <Col md={2}>
          <Link to="/persons/create">
            <Button variant="primary" className="float-end">
              Add Person
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="m-0 mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.people.map((user: Person) => (
              <tr key={user.firstName + user.lastName}>
                <td>
                  <Link
                    to="/persons/$id"
                    params={{ id: user.personGuid }}
                  >{`${user.firstName} ${user.lastName}`}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  )
}

export default PersonList
