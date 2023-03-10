import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

import Helmet from '../components/Helmet/Helmet'
import { auth } from '../firebase.config'
import '../styles/login.css'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      console.log(user);
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')

    } catch (error) {

      setLoading(false)
      toast.error(error.message)

    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Helmet title='Login'>
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
                  <h3 className="fw-bold mb-4">Login</h3>

                  <Form className='auth_form' onSubmit={signIn}>
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

                    <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn">Login</motion.button>
                    <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
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

export default Login