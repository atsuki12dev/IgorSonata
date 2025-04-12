import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import AboutUs from './pages/AboutUs/AboutUs'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path={'/IgorSonata/'} element={<Home />} />
          <Route path={'/IgorSonata/AboutUs'} element={<AboutUs />} />
          <Route path={'/IgorSonata/Services'} element={<Services />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter