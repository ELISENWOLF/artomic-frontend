import React, { useState, useEffect } from 'react'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

import '../styles/shop.css'

import ProductList from '../components/UI/ProductList'
import useGetData from '../custom-hooks/useGetData'

const Shop = () => {

  const {data: products} = useGetData('products')
  const [productsData, setProductsData] = useState(products)


  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === "Anime") {
      const filterdProducts = products.filter((item) => item.category === "Anime")
      setProductsData(filterdProducts)
    }
    if (filterValue === "Nature") {
      const filterdProducts = products.filter((item) => item.category === "Nature")
      setProductsData(filterdProducts)
    }
    if (filterValue === "3D") {
      const filterdProducts = products.filter((item) => item.category === "3D")
      setProductsData(filterdProducts)
    }
    if (filterValue === "Painting") {
      const filterdProducts = products.filter((item) => item.category === "Painting")
      setProductsData(filterdProducts)
    }
    if (filterValue === "Potrait") {
      const filterdProducts = products.filter((item) => item.category === "Potrait")
      setProductsData(filterdProducts)
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Shop' >

      <CommonSection title='Products' className="#" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="Anime">Anime</option>
                  <option value="Nature">Nature</option>
                  <option value="3D">3D</option>
                  <option value="Painting">Painting</option>
                  <option value="Potrait">Potrait</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className="text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search_box">
                <input type="text" placeholder="Search....." onChange={handleSearch} />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0
                ? <h1 className="text-center fs-4">No products are found</h1>
                : (
                  <>
                    {/* <ProductList data={products} /> */}
                    <ProductList data={productsData} />
                  </>
                )
                
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
