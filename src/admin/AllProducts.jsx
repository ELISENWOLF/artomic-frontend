import React from "react"
import { Container, Row, Col } from "reactstrap"
import { db } from "../firebase.config"
import { doc, deleteDoc } from "firebase/firestore"
import useGetData from "../custom-hooks/useGetData"
import { motion } from "framer-motion"
import { toast } from 'react-toastify'

const AllProducts = () => {

  const {data: productsData, loading} = useGetData("products")

  const deleteProduct = async id => {

    const docRef = doc(db, "products", id)

    await deleteDoc(docRef)
    toast.success("Deleted")
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
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
                {
                  loading ? (
                    <h4 className="fw-bold py-5 text-center">Loading.....</h4>
                  ) : (
                    <>
                      {
                        productsData.map((item)  => (
                          <tr key={item.id}>
                            <td><img src={item.imgUrl} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>${item.price}</td>
                            <td>
                              <motion.button
                                whileTap={{scale: 1.1}} 
                                onClick={() => {deleteProduct(item.id)}} 
                                className="btn btn-danger"
                              >
                                Delete
                              </motion.button>
                            </td>
                          </tr>
                        ))
                      }
                    </>
                  )
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts