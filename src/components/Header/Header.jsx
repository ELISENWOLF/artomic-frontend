import React, { useRef, useEffect } from 'react'

import { NavLink, useNavigate, Link } from 'react-router-dom'
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav_links = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  const logout = () => {
    signOut(auth).then(()=> {
      toast.success('Logged out')
      navigate('/')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  const navigateToCart = () => {
    navigate("/cart")
  }

  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle('show_profileActions')
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Artomic</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? 'nav_active' : ''
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav_icons">
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img 
                  whileTap={{ scale: 1.2 }} 
                  src={ currentUser ? currentUser.photoURL : userIcon} 
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div 
                  className="profile_actions" 
                  ref={profileActionRef} 
                  onClick={toggleProfileActions}
                >
                  {
                    currentUser ? (
                       <motion.p className='text-center' whileHover={{scale:1.1}} onClick={logout}>Logout</motion.p> 
                       ) : (
                       <div className='d-flex align-items-center justify-center flex-column'>
                        <Link to='/signup'><motion.p whileHover={{scale: 1.1}}>Signup</motion.p></Link>
                        <Link to='/login'><motion.p whileHover={{scale: 1.1}}>Login</motion.p></Link>
                        <Link to='/dashboard'><motion.p whileHover={{scale: 1.1}}>Dashboard</motion.p></Link>
                      </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>



          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
