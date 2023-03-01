import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet' 
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

  const navigate = useNavigate()

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  
  const goToShop = () => {
    navigate('/shop')
  }

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 
                ? (
                  <h2 className="fs-4 text-center">No item added to the cart</h2>
                  ) 
                  : (
                    <table className='table bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                       {
                        cartItems.map((item, index) => (
                          <Tr item={item} key={index}/>
                        ))
                       }
                      </tbody>
                    </table>
                    )
              }
              
            </Col>
            <Col lg='3'>
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">taxes and shipping  will calculate in checkout</p>
              <div>
                <motion.button whileTap={{scale: 1.1}} onClick={goToCheckout} className="buy_btn w-100">
                  Buy Now
                </motion.button>
                <motion.button whileTap={{scale: 1.1}} onClick={goToShop} className="buy_btn w-100 mt-3">
                  Continue Shopping
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const  Tr = ({item}) => {

  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr >
  <td><img src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i onClick={deleteProduct} whileTap={{scale: 1.1}} class="ri-delete-bin-line"></motion.i></td>
</tr>
}

export default Cart
