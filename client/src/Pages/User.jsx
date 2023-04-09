import { Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from "@chakra-ui/react"
import UserForm from "../Components/UserForm"
import UserList from "../Components/UserList"
import { useEffect, useState } from "react"
import MyAlert from "../Components/MyAlert"
import { getAllUserApi } from "../api"

const User = () => {
  const [loading,setLoading]=useState(false)
  const [users,setUsers]=useState([])
  const toast=useToast()
  const getAllUser=async()=>{
    try {
        setLoading(true)
        let res=await getAllUserApi();
        setUsers(res.data.message)
        setLoading(false)
    } catch (error) {
      setLoading(false)
      MyAlert('Something went wrong', "error", toast);
    }
}
useEffect(()=>{
  getAllUser()
},[])
  return (
    <Tabs>
  <TabList w='80%' m='auto' color='#fff'>
    <Tab>Create User</Tab>
    <Tab>Users</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <UserForm getAllUser={getAllUser} />
    </TabPanel>
    <TabPanel w='80%' m='auto'>
      <UserList loading={loading} users={users} getAllUser={getAllUser} />
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default User