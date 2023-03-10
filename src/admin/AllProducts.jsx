import { Container, Row, Col } from "reactstrap"
import { doc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject } from 'firebase/storage'
import { motion } from "framer-motion"
import { toast } from 'react-toastify'

import { db, storage } from "../firebase.config"
import useGetData from "../custom-hooks/useGetData"

const AllProducts = () => {

  const { data: productsData, loading } = useGetData("products")

  const deleteProduct = async id => {

    const docRef = doc(db, "products", id)

    for (let i = 0; i <= productsData.length; i++) {
      if (productsData[i].id === id) {

        const productPath = `productImages/` + productsData[i].productName
        const Ref = ref(storage, productPath)

        await deleteDoc(docRef)
        toast.success("Deleted")

        await deleteObject(Ref).then(() => {
          console.log('success image');
        }).catch((err) => {
          console.error('error');
        })
      }
    }
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
                        productsData.map((item) => (
                          <tr key={item.id}>
                            <td><img src={item.imgUrl} alt="" /></td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>${item.price}</td>
                            <td>
                              <motion.button
                                whileTap={{ scale: 1.1 }}
                                onClick={() => { deleteProduct(item.id) }}
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