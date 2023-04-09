import React from 'react'
import {Box, Flex, Select, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Box color='#fff' p='5px'>
        <Flex gap='30px' align='center' h='50px'>
       <Text fontSize='25px' fontWeight='600'>Blogmate |</Text>
       <Flex gap='20px' >
       <Link to='/'>
       <Text>Users</Text>
        </Link>
        <Link to='/post'>
       <Text>Posts</Text>
        </Link>
        <Link to='/analytic'>
       <Text>Analytics</Text>
        </Link>
        </Flex> 
        </Flex>
    </Box>
  )
}

export default Navbar