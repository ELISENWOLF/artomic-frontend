import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const ShippingScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <>
      <Header />
      <div className='container d-flex justify-content-center align-items-center login-'>
        <form 
            className='Login col-md-8 col-lg-4 col-11'
            onSubmit={submitHandler}
        >
            <h6>Delivery Address</h6>
            <input type='text' placeholder='Enter address' />
            <input type='text' placeholder='Enter City' />
            <input type='text' placeholder='Enter Postal code' />
            <input type='text' placeholder='Enter Country' />
            <button type='submit'>
                <Link to='/payment' className='text-white'>
                    Continue
                </Link>
            </button>
        </form>
      </div>
    </>
  )
}

export default ShippingScreen
