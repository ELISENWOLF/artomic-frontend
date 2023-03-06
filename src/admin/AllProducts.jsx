import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import productImg from '../assets/images/Anime-3.jpeg'

const AllProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={productImg} alt="" /></td>
                  <td>Zoro</td>
                  <td>Anime</td>
                  <td>$20</td>
                  <td><button className='btn btn-danger'>Delete</button></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts