import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Area from '../../pages/Area'
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
    </Routes>
  )
}

export default Main