import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Area from '../../pages/Area'
import Booking from '../../pages/Booking'
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
    </Routes>
  )
}

export default Main