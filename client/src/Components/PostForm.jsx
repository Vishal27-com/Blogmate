import {
    Box,
    Button,
    Input,
    Stack,
    Text,
    useToast
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { createPostApi, createUserApi } from "../api";
  import MyAlert from "./MyAlert";
  const init = {
    user_id: "",
    content: ""
  };
  
  const PostForm = ({getAllPost}) => {
    const [post, setPost] = useState(init);
    const [loading,setLoading]=useState(false)
    const toast = useToast();
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setPost({
        ...post,
        [name]: value,
      });
    };
    const submitHandler = async () => {
      try {
          setLoading(true)
          await createPostApi(post);
          getAllPost()
          MyAlert("posted", "success", toast);
          setLoading(false)
      } catch (error) {
        setLoading(false)
        MyAlert(error.response.data.message, "error", toast);
      }
    };
  
    return (
      <Box display="flex" color="#fff">
        <Stack
          boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          bg="#161515"
          w={['90%','50%','25%']}
          m="5% auto"
          p="15px"
          spacing={5}
          borderRadius="5px"
        >
            <Text>User_Id</Text>
            <Input type='text' name='user_id' onChange={changeHandler} />
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
              onChange={changeHandler}
            ></textarea>
          <Button
            variant="solid"
            colorScheme="blue"
            w="100px"
            isLoading={loading}
            onClick={submitHandler}
          >
            Post
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default PostForm;
  