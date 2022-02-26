import React, { useContext, useState } from 'react'
import { Box, Button, Heading, HStack, useColorMode } from "@chakra-ui/react";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { DataContext } from "./context/DataContext";

const App = ()=>{
  const {user} = useContext(DataContext)
  const {toggleColorMode} = useColorMode()
  const [isDark, setIsDark] = useState(false)
  
  //handle dark mode functionality
  const handleDark = () =>{
    setIsDark(()=>(isDark ? false : "true"))
    toggleColorMode()
  }
  //check color mode
  const colorLabel = () =>(!isDark ? "Set to Light" : "Set to Dark")

  // render Dashboard otherwise Login
  const renderComponent = () =>( user === null ? <Login /> : <Dashboard />)

  return (
    <Box>
      <HStack bgColor={"green.500"} justifyContent={"flex-end"} p={".5rem"}>
        <Heading fontSize={"lg"} flexGrow={1} color={"whiteAlpha.700"} textTransform={"uppercase"} letterSpacing={"1px"}>Patient Management</Heading>
        <Button variant={"outline"} onClick={handleDark}>{colorLabel()}</Button>
      </HStack>
      
      {/* components */}
      {/* render Login or Dashboard */}
      {renderComponent()}
    </Box>
  )
}

export default App;