import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'

import { auth } from '../firebase.config'
import { storage } from '../firebase.config'
import { db } from '../firebase.config'

import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      const storagePath = 'images/' + username

      const storageRef = ref(storage, storagePath)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + ' % done');
      },

        (error) => {
          toast.error(error.message)
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            //update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL
            })

            //store user data in database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL
            })
          })
        })

      setLoading(false)
      toast.success('Account created')
      navigate('/checkout')

    } catch (error) {
      setLoading(false)
      toast.error('something went wrong')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading ? (
                <Col lg='12' className='text-center'>
                  <h6 className='fw-bold'>Loading...</h6>
                </Col>
              ) : (
                <Col lg='6' className='m-auto text-center'>
                  <h3 className="fw-bold mb-4">Signup</h3>

                  <Form className='auth_form' onSubmit={signup}>
                    <FormGroup className='form_group'>
                      <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input
                        type="file"
                        onChange={e => setFile(e.target.files[0])}
                      />
                    </FormGroup>

                    <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn">Create an account</motion.button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                  </Form>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup