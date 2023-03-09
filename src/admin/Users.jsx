import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from 'react-toastify'

import { db } from "../firebase.config"
import useGetData from '../custom-hooks/useGetData'

const Users = () => {
    
  const {data: usersData, loading} =  useGetData("users")

  const deleteUser = async id => {

    const docRef = doc(db, "users", id)

    await deleteDoc(docRef)
    toast.success("User deleted")
  }

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h4 className='fw-bold'>Users</h4>
                </Col>
               <Col lg='12' className='pt-5'>
               <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>email</th>
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
                        usersData.map((user)  => (
                          <tr key={user.uid}>
                            <td><img src={user.photoURL} alt="" /></td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>
                              <motion.button
                                whileTap={{scale: 1.1}}
                                onClick={() => {deleteUser(user.uid)}} 
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

export default Users