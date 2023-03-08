import React from 'react'
import { Container, Row, Col } from 'reactstrap'
// import useGetData from '../custom-hooks/useGetData'

const Users = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h4 className='fw-bold'>Users</h4>
                </Col>
                <Col lg='12' className='pt-5'>
                    <tabel className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                        </tbody>
                    </tabel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Users