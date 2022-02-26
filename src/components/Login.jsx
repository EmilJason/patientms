import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, HStack, IconButton, Input, useToast } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext, useState } from 'react';
import {DataContext} from '../context/DataContext'

export const MotionBox = motion(Box)

export default function Login() {
  const {getUser} = useContext(DataContext)
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const toast = useToast()

  //handle inputs
  const onChangeEmail = e => {
    setInputEmail(e.target.value)
  }
  const onChangePassword = e => setInputPassword(e.target.value)

  //handle validation
  const validate = () =>{
    errorEmail === "" ? setErrorEmail("Email address is Required!") : setErrorEmail("")
    errorPassword === "" ? setErrorPassword("Password is Required!") : setErrorPassword("")
  }

  // handle login
  const login =()=>{
    if(inputEmail !== "" && errorEmail === "" && errorPassword === ""){
      toast({title:"Login Success", description:"Congratulation1", status: "success"})
       getUser(inputEmail)
    }else{
      getUser(null)
    }
   
  }

  return (
    <MotionBox 
    //animation from framer-motion
    initial={{x: 100, opacity: 0}} 
    animate={{x: 0, opacity: 1}} 
    transition={{duration: 2}} 
    // styling
    p={"1rem"} 
    boxShadow={"base"} 
    w={{base: "70%", md: "sm"}} 
    mx={"auto"} marginTop={"7%"}>
        <Heading>Login</Heading>
        <FormControl my={"1rem"}>
            <FormLabel htmlFor='userEmail'>Email Address</FormLabel>
            <Input 
            type={"email"} 
            name='userEmail' 
            id="userEmail" 
            variant={"filled"} 
            placeholder='user@example.com'
            value={inputEmail}
            onChange={onChangeEmail} />
            <FormHelperText color={"red.500"}>{errorEmail}</FormHelperText>
        </FormControl>

        <FormControl my={"1rem"}>
            <FormLabel htmlFor='userPassword'>Password</FormLabel>
            <Input 
            type={"password"} 
            name='userPassword' 
            id="userPassword" 
            variant={"filled"} 
            placeholder='********'
            value={inputPassword}
            onChange={onChangePassword} />
            <FormHelperText color="red.500">{errorPassword}</FormHelperText>
        </FormControl>
        <Button w={"100%"} colorScheme={"teal"} onClick={login}>Login</Button>
        <HStack justifyContent={"center"} my={"1rem"}>
            <IconButton icon={<FcGoogle />} variant={"outline"} colorScheme={"red"} />
            <IconButton icon={<FaFacebook />} variant={"outline"} colorScheme={"blue"} />
        </HStack>
    </MotionBox>
  )
}
