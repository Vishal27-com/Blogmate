import { Box, Center, Flex, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getTopMostLikedPostsApi, getTotalNumberOfPostsApi} from '../api'

const PostAnalytics = () => {
    const [tpost,setTpost]=useState(0)
    const [mostActive,setMostActive]=useState([])
    const getData=async()=>{
        let res=await getTotalNumberOfPostsApi()
        setTpost(res.data.num_of_posts)
        let res2=await getTopMostLikedPostsApi()
        setMostActive(res2.data.results)
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <Box >
     <Flex  gap='20px' >
    <Center bg='skyblue' p='20px' >
     Total Post: {tpost}
    </Center>
    </Flex>
<TableContainer>
<Table mt='10px' variant='simple' bg='#89d9f0'>
  <Tbody>
    {
     mostActive.map((item)=>
     <Tr key={item._id}>
      <Td>{item.user_id && item.user_id?.name}</Td>
      <Td>{item.content}</Td>
      <Td>{item.likes}</Td>
      </Tr>
      )
     }
  </Tbody>
</Table>
</TableContainer>
    </Box>
  )
}

export default PostAnalytics