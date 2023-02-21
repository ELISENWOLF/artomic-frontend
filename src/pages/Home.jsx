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



const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item=> item.category == 'chair'
      )
    const filteredBestSalesProducts = products.filter(
      item=> item.category == 'sofa'
      )
      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts)
  },[])

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

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Best Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts}/>
            </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
