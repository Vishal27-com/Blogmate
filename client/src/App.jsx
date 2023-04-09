import { Box } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import AllRoutes from './AllRoutes'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <Box>
    <Navbar />
    <AllRoutes />
    </Box>
  )
}

export default App