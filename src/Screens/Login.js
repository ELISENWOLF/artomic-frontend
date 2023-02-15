import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Login = () => {
    window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div className='container d-flex flex-column justify-content align-items-center'>
        <form className='Login col-md-8 col-lg-4 col-11'>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Login</button>
            <p>
                <Link to={"/register"}>Create Account</Link>
            </p>
        </form>
      </div>
    </>
  )
}

export default Login
