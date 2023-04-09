import { Box, Flex, Img, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import React from 'react'
import {  deleteUserApi} from '../api'
import MyAlert from './MyAlert'
import UserModal from './UserModal'

const UserList = ({loading,users,getAllUser}) => {
  const toast=useToast()
    const deleteUser=async (id)=>{
     try {
    await deleteUserApi(id);
    getAllUser()
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
    <Thead>
      <Tr>
        <Th>user_id</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Bio</Th>
      </Tr>
    </Thead>
    <Tbody>
       {
        users.map((item)=>
        <Tr key={item._id}>
        <Td>{item._id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.bio}</Td>
        <Td>
       <UserModal 
        user={item}
        getAllUser={getAllUser}
        />
        </Td>
        <Td>
        <Img onClick={()=>deleteUser(item._id)} h='20px' cursor='pointer' src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png' alt='delete-button' />
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

export default UserList