import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './Pages/User'
import Post from './Pages/Post'
import Analytics from './Pages/Analytics'

const AllRoutes = () => {
  return (
    <Routes>
<Route path='/' element={<User />} />
<Route path='/post' element={<Post />} />
<Route path='/analytic' element={<Analytics />} />
    </Routes>
  )
}

export default AllRoutes