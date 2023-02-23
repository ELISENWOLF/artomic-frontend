import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from "reactstrap"
import heroImg from '../assets/images/hero-image.png'

import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import Clock from '../components/UI/Clock'

import counterImg from '../assets/images/counter-timer-img.jpeg'


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobilProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item=> item.category === 'chair'
      )
    const filteredBestSalesProducts = products.filter(
      item=> item.category === 'sofa'
      )
    const filteredMobileProducts = products.filter(
      item=> item.category === 'mobile'
      )
    const filteredWirelessProducts = products.filter(
      item=> item.category === 'wireless'
      )
    const filteredPopularProducts = products.filter(
      item=> item.category === 'watch'
      )

      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);
  },[])

  return (
    <Helmet>
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
                <motion.img animate={{rotateY: 360}} transition={{duration: 5, repeat: Infinity, repeatDelay: 3}} src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
              <Col lg="12" className="text-center mb-4">
                <h2 className="section_title">Best Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts}/>
            </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='12' className="count_down-col">

              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">What Are You Looking At!!!!</h4>
                <h3 className="text-white fs-5 mb-3">Grab Your Favourite Pic</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>
            <Col lg='5' md='12' className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="section_title">New Arrivals</h2>
          </Col>
          <ProductList data={mobilProducts}/>
          <ProductList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className="popular_category">
    <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="section_title">Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>

    </Helmet>
  )
}

export default Home
