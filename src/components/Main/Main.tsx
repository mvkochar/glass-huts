import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Area from '../../pages/Area'
import Booking from '../../pages/Booking'
import Faq from '../../pages/Faq'
import Home from '../../pages/Home'
import Hut from '../../pages/Hut'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='hut'
        element={<Hut/>}
      />
      <Route
        path='area'
        element={<Area/>}
      />
      <Route
        path='booking'
        element={<Booking/>}
      />
      <Route
        path='about'
        element={<About/>}
      />
      <Route
        path='faq'
        element={<Faq/>}
      />
    </Routes>
  )
}

export default Main