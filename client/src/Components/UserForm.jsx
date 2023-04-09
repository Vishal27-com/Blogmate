import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createUserApi } from "../api";
import MyAlert from "./MyAlert";
const init = {
  name: "",
  email: "",
  bio: "",
};

const UserForm = ({getAllUser}) => {
  const [creds, setCreds] = useState(init);
  const [loading,setLoading]=useState(false)
  const toast = useToast();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };
  const submitHandler = async () => {
    try {
        setLoading(true)
        await createUserApi(creds);
        MyAlert("Account created", "success", toast);
        setLoading(false)
        getAllUser()
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
        <Box>
          <Text>Name</Text>
          <Input type="text" name="name" isRequired onChange={changeHandler} />
        </Box>
        <Box>
          <Text>Email</Text>
          <Input
            type="email"
            name="email"
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
            onChange={changeHandler}
          ></textarea>
        </Box>
        <Button
          variant="solid"
          colorScheme="blue"
          w="100px"
          isLoading={loading}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
