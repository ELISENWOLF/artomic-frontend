import React from 'react'

import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { motion } from 'framer-motion'

import { Container, Row, Col } from "reactstrap"
import heroImg from '../assets/images/hero-image.png'

const Home = () => {
  
  const year = new Date().getFullYear()
  return (
    <Helmet title={'Home'}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Room More Attractive</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Facere deleniti sit doloribus, incidunt rerum aperiam mollitia 
                  sint illo distinctio, corrupti nisi delectus voluptates, enim 
                  dolorem temporibus architecto in blanditiis qui!
                </p>
                <motion.button whileTap={{ scale:1.2 }} className="buy_btn">
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="3" md="6" >
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
