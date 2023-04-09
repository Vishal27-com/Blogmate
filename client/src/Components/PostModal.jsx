import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import MyAlert from './MyAlert'
import { updatePostApi } from '../api'

const PostModal = ({data,getAllPost}) => {
  const [post,setPost]=useState(data)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading,setLoading]=useState(false)
  const toast = useToast();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const updateHandler = async () => {
    try {
        setLoading(true)
        await updatePostApi(post._id,post);
        getAllPost();
        MyAlert("Updated", "success", toast);
        setLoading(false)
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
        <Text>Content</Text>
            <textarea
              style={{
                width: "100%",
                padding:"10px",
                borderRadius: "5px",
                background: "transparent",
                border: "1px solid #fff",
              }}
              name='content'
              value={post.content}
              onChange={changeHandler}
            ></textarea>
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

export default PostModal