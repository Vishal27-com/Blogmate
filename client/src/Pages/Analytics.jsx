import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import UserAnalytics from '../Components/UserAnalytics'
import PostAnalytics from '../Components/PostAnalytics'

const Analytics = () => {
  return (
    <Tabs>
    <TabList w='80%' m='auto' color='#fff'>
      <Tab>User</Tab>
      <Tab>Post</Tab>
    </TabList>
  
    <TabPanels>
    <TabPanel w='80%' m='auto'>
     <UserAnalytics />
      </TabPanel>
      <TabPanel w='80%' m='auto'>
      <PostAnalytics />
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default Analytics