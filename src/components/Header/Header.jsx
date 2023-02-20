import React from 'react'

import { NavLink } from 'react-router-dom'
import './header.css'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Artomic</h1>
                <p>since 2023</p>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav_item">
                  <NavLink to='home'>Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to='shop'>Shop</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to='cart'>Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_icons">

              <span className="fav_icon">
                <i class="ri-heart-line"></i>
              </span>
              <span className="cart_icon">
                <i class="ri-shopping-bag-line"></i>
              </span>
              <span>
                <img src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
