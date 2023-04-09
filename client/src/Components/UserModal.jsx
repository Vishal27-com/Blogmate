import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { updateUserApi } from '../api'
import MyAlert from './MyAlert'

const UserModal = ({user,getAllUser}) => {
  const [creds,setCreds]=useState(user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading,setLoading]=useState(false)
  const toast = useToast();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };
  const updateHandler = async () => {
    try {
        setLoading(true)
        await updateUserApi(creds._id,creds);
        MyAlert("Updated", "success", toast);
        setLoading(false)
        getAllUser()
    } catch (error) {
      setLoading(false)
      MyAlert(error.response.data.message, "error", toast);
    }
  };
  return (
    <Box>
<Button onClick={onOpen} bg='transparent'>
<Img h='20px' src='https://cdn-icons-png.flaticon.com/128/2356/2356780.png' alt='edit-button' />
</Button>
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Edit User</ModalHeader>
    <ModalBody>
    <Stack
        boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        bg="#161515"
        p="15px"
        spacing={5}
        borderRadius="5px"
        color='#fff'
      >
        <Box>
          <Text>Name</Text>
          <Input type="text" value={creds.name} name="name" isRequired onChange={changeHandler} />
        </Box>
        <Box>
          <Text>Email</Text>
          <Input
            type="email"
            name="email"
            value={creds.email}
            isRequired
            onChange={changeHandler}
          />
        </Box>
        <Box>
          <Text>Bio</Text>
          <textarea
            style={{
              width: "100%",
              padding:"10px",
              borderRadius: "5px",
              background: "transparent",
              border: "1px solid #fff",
            }}
            name='bio'
            value={creds.bio}
            onChange={changeHandler}
          ></textarea>
        </Box>
        <Flex gap='10px'>
        <Button
          variant="solid"
          colorScheme="red"
          w="100px"
          onClick={onClose}>  
          Close
        </Button>
        <Button
          variant="solid"
          colorScheme="yellow"
          w="100px"
          isLoading={loading}
          onClick={updateHandler}
        >
          Update
        </Button>
          </Flex>
      </Stack>
      </ModalBody>
  </ModalContent>
</Modal>
    </Box>
  )
}

export default UserModal