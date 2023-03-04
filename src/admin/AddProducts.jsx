import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const AddProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4 className='mb-5'>Add Products</h4>
            <Form>
              <FormGroup className="form_group">
                <span>Product title</span>
                <input type="text" placeholder='Potrait' />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Short Description</span>
                <input type="text" placeholder='lorem...' />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Description</span>
                <input type="text" placeholder='Description' />
              </FormGroup>

              <div className='d-flex align-items-center justify-content-between gap-5'>
                <FormGroup className="form_group w-50">
                  <span>Price</span>
                  <input type="number" placeholder='$100' />
                </FormGroup>

                <FormGroup className="form_group w-50">
                  <span>Category</span>
                  <select className='w-100 p-2'>
                    <option value="Anime">Anime</option>
                    <option value="Nature">Nature</option>
                    <option value="3D">3D</option>
                    <option value="Painting">Painting</option>
                    <option value="Potrait">Potrait</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form_group">
                  <span>Product Image</span>
                  <input type="file" />
                </FormGroup>
              </div>

              <button className="buy_btn">Add Product</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts