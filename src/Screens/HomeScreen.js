import React from 'react'
import Header from '../Components/Header';
import CalltoActionSection from '../Components/HomeComponents/CalltoActionSection';
import ContactInfo from '../Components/HomeComponents/ContactInfo';
// import ShopSection from '../Components/HomeComponents/ShopSection';
import Footer from '../Components/Footer.js';

const HomeScreen = () => {
    window.scrollTo(0,0);
  return (
    <div>
      <Header />
      {/* <ShopSection /> */}
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default HomeScreen
