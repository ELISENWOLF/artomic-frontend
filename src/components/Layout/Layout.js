import { useLocation } from 'react-router-dom'

import Routers from '../../routers/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AdminNav from '../../admin/AdminNav'

const Layout = () => {

  const location = useLocation()

  return (
    <>
      {
        location.pathname.startsWith('/admin') ? <AdminNav /> : <Header />
      }
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
