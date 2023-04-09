import { Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PostForm from '../Components/PostForm'
import PostList from '../Components/PostList'
import { getAllPostApi } from '../api'
import MyAlert from '../Components/MyAlert'

const Post = () => {
  const [loading,setLoading]=useState(false)
  const [posts,setPosts]=useState([])
  const toast=useToast()
  const getAllPost=async()=>{
      try {
          setLoading(true)
          let res=await getAllPostApi();
          setPosts(res.data.message)
          setLoading(false)
      } catch (error) {
        setLoading(false)
        MyAlert('Something went wrong', "error", toast);
      }
  }
  useEffect(()=>{
    getAllPost()
},[])
  return (
    <Tabs>
    <TabList w='80%' m='auto' color='#fff'>
      <Tab>Create Post</Tab>
      <Tab>Posts</Tab>
    </TabList>
  
    <TabPanels>
      <TabPanel>
        <PostForm getAllPost={getAllPost} />
      </TabPanel>
      <TabPanel w='80%' m='auto'>
        <PostList loading={loading} posts={posts} getAllPost={getAllPost} />
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default Post