import { useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row } from 'reactstrap'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

import userIcon from '../assets/images/user-icon.png'
import { auth } from '../firebase.config'
import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css'

const admin_nav = [
    {
        display: 'Dashboard',
        path: '/admin/dashboard'
    },
    {
        display: 'All-Products',
        path: '/admin/all-products'
    },
    {
        display: 'Add-Products',
        path: '/admin/add-products'
    },
    {
        display: 'Users',
        path: '/admin/users'
    },
]

const AdminNav = () => {
  const headerRef = useRef(null);
  const profileActionRef = useRef(null)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {currentUser} = useAuth()

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

  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle('show_admin_action')
  }

  return (
    <>
      <header className="admin_header" ref={headerRef}>
        <Container>
          <Row>
            <div className="admin_nav_wrapper">
              <div className="admin_logo">
                <h1>Artomic</h1>
              </div>

              <div className="admin_navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="admin_menu">
                  {
                    admin_nav.map((item, index) => (
                      <li className="admin_nav_item" key={index}>
                        <NavLink
                          to={item.path}
                          className={(navClass) =>
                            navClass.isActive ? 'admin_nav_active' : ''
                          }
                        >
                          {item.display}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="admin_nav_icons">
                <div className='admin_profile'>
                  <motion.img 
                    whileTap={{ scale: 1.2 }} 
                    src={currentUser ? currentUser.photoURL : userIcon} 
                    alt=""
                    onClick={toggleProfileActions}
                  />
                  <div 
                    className="admin_action" 
                    ref={profileActionRef} 
                    onClick={toggleProfileActions}
                  >
                    {
                      currentUser ? (
                          <>
                          <motion.p className='text-center' whileHover={{scale:1.1}} onClick={logout}>Logout</motion.p> 
                          <Link to='/'><motion.p className='text-center' whileHover={{scale:1.1}}>Home</motion.p></Link>
                          </>
                        ) : ( '' )
                    }
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
    </>
  )
}

export default AdminNav
