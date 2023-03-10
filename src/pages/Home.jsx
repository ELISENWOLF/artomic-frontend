import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row, Col } from "reactstrap"

import heroImg from '../assets/images/hero-image.png'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import counterImg from '../assets/images/counter-timer-img.jpeg'
import useGetData from '../custom-hooks/useGetData'
import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'


const Home = () => {

  const { data: products, loading } = useGetData('products')

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [paintinProducts, setPaintingProducts] = useState([])
  const [potraitProducts, setPotraitProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  const navigate = useNavigate()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === 'Anime'
    )
    const filteredBestSalesProducts = products.filter(
      item => item.category === 'Nature'
    )
    const filteredPaintingProducts = products.filter(
      item => item.category === '3D'
    )
    const filteredPotraitProducts = products.filter(
      item => item.category === 'Painting'
    )
    const filteredPopularProducts = products.filter(
      item => item.category === 'Potrait'
    )

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setPaintingProducts(filteredPaintingProducts);
    setPotraitProducts(filteredPotraitProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products])

  const goToShop = () => {
    navigate('/shop')
  }

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
                <motion.button whileTap={{ scale: 1.1 }} onClick={goToShop} className="buy_btn">
                  SHOP NOW
                </motion.button>
              </div>
            </Col>
            <Col lg="3" md="6" >
              <div className="hero_img">
                <motion.img animate={{ rotateY: 360 }} transition={{ duration: 12, repeat: Infinity, repeatDelay: 5 }} src={heroImg} alt="" />
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
            {
              loading ? (
                <h5 className='fw-bold'>Loading....</h5>
              ) : (
                <ProductList data={trendingProducts} />
              )
            }
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            {
              loading ? (
                <h5 className='fw-bold'>Loading....</h5>
              ) : (
                <ProductList data={bestSalesProducts} />
              )
            }
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='5' md='12' className="count_down-col">

              <div className="clock_top-content">
                <h4 className="text-white fs-2 mb-2">What Are You Looking At!!!!</h4>
                <h3 className="text-white fs-3 mb-3">Grab Your Favourite Pic</h3>
              </div>
              <motion.button whileTap={{ scale: 1.2 }} onClick={goToShop} className="buy_btn store_btn">Visit Store</motion.button>
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
            {
              loading ? (
                <h5 className='fw-bold'>Loading....</h5>
              ) : (
                <ProductList data={paintinProducts} />
              )
            }
            {
              loading ? (
                <h5 className='fw-bold'>Loading....</h5>
              ) : (
                <ProductList data={potraitProducts} />
              )
            }
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-4">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            {
              loading ? (
                <h5 className='fw-bold'>Loading....</h5>
              ) : (
                <ProductList data={popularProducts} />
              )
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
