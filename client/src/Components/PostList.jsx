import { Box, Flex, Img, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import React from 'react'
import {  deletePostApi, unlikePostApi } from '../api'
import MyAlert from './MyAlert'
import PostModal from './PostModal'
import { likePostApi } from '../api'

const PostList = ({loading,posts,getAllPost}) => {
  const toast=useToast()
    const likePost=async(id,likes)=>{
     let res=await likePostApi(id,likes)
     
     MyAlert(res.data.message,'success',toast)
     getAllPost()
    }
    const dislikePost=async(id,likes)=>{
     let res=await unlikePostApi(id,likes)
     MyAlert(res.data.message,'success',toast)
     getAllPost()
    }
    const deletePost=async (id)=>{
     try {
    await deletePostApi(id);
    getAllPost()
    MyAlert('Deleted','success',toast)
     } catch (error) {
    MyAlert('Something went wrong', "error", toast);  
     }
    }
    
  return (
    <Box>
    {
        loading?<Flex justify='center' align='center' h='60vh'>
          <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
        </Flex>:
      <TableContainer>
  <Table variant='simple' bg='#89d9f0'>
    <Tbody>
       {
        posts.map((item)=>
        <Tr key={item._id}>
        <Td>{item.content}</Td>
        <Td>
       <PostModal data={item} getAllPost={getAllPost} />
        </Td>
        <Td>
          <Flex gap='15px'>
        <Img onClick={()=>likePost(item._id,item.likes+1)} h='20px' cursor='pointer' src='https://cdn-icons-png.flaticon.com/128/126/126473.png' alt='delete-button' />
        {item.likes}
        <Img onClick={()=>dislikePost(item._id,item.likes-1)} h='20px' cursor='pointer' src='https://cdn-icons-png.flaticon.com/128/126/126504.png' alt='delete-button' />
          </Flex>
        </Td>
        <Td>
        <Img onClick={()=>deletePost(item._id)} h='20px' cursor='pointer' src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png' alt='delete-button' />
        </Td>
        </Tr>
        )
       }
    </Tbody>
  </Table>
</TableContainer>
    }

    </Box>
  )
}

export default PostList