import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { doc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject } from 'firebase/storage'
import { toast } from 'react-toastify'

import { db, storage } from "../firebase.config"
import useGetData from '../custom-hooks/useGetData'


const Users = () => {

  const { data: usersData, loading } = useGetData("users")

  const deleteUserDetails = async id => {

    const docRef = doc(db, "users", id)

    for (let i = 0; i <= usersData.length; i++) {
      if (usersData[i].id === id) {
        
        const userPath = `images/` + usersData[i].id
        const Ref = ref(storage, userPath)

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
                        usersData.map((user) => (
                          <tr key={user.uid}>
                            <td><img src={user.photoURL} alt="" /></td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>
                              <motion.button
                                whileTap={{ scale: 1.1 }}
                                onClick={() => { deleteUserDetails(user.uid) }}
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