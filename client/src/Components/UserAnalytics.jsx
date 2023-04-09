import { Box, Center, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTopMostUsers, getTotalNumberOfUsersApi } from '../api'

const UserAnalytics = () => {
    const [tuser,setTuser]=useState(0)
    const [mostActive,setMostActive]=useState([])
    const getData=async()=>{
        let res=await getTotalNumberOfUsersApi()
        setTuser(res.data.num_of_users)
        let res2=await getTopMostUsers()
        setMostActive(res2.data.results)
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <Box >
    <Flex  gap='20px' >
    <Center bg='skyblue' p='20px' >
     Total User: {tuser}
    </Center>
    </Flex>
<TableContainer>
<Table mt='10px' variant='simple' bg='#89d9f0'>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Total Post</Th>
    </Tr>
  </Thead>
  <Tbody>
    {
     mostActive.map((item)=>
      <Tr key={item._id}>
      <Td>{item._id?.name}</Td>
      <Td>{item._id?.email}</Td>
      <Td>{item.totalPost}</Td>
      </Tr>
      )
     }
  </Tbody>
</Table>
</TableContainer>
    </Box>
  )
}

export default UserAnalytics