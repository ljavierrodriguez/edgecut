import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Menu from './components/Menu'
import Footer from './components/Footer'
import ServiceDetail from './pages/ServiceDetail'
import NotFound from './pages/NotFound'

const Layout = () => {
    return (
        <BrowserRouter>
            {/*header section start */}
            <Menu />
            <Routes>
                <Route path='/services/:title' element={<ServiceDetail />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Layout