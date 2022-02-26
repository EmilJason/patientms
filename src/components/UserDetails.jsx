import { Avatar, Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const MotionCard = motion(Box)

export default function UserDetails() {
    const {getUser} = useContext(DataContext)
    const bg = useColorModeValue("gray.50", "gray.500")

  return (
    <>
    <MotionCard
    // motion
    initial={{opacity: 0}}
    animate={{opacity: 1, transition:{duration: 2}}}
    // Styles 
    p={"1rem"} 
    mx={"auto"} 
    marginTop={"1rem"} 
    w={{base: "50%", md: "90%"}}
    display={"flex"} 
    flexDirection={"column"} 
    borderRadius={"lg"}
    boxShadow={"lg"}
    bgColor={bg}>
        <Heading fontSize={"1.2rem"} color={"lightgray"}>Logged in as</Heading>
        <Avatar alignSelf={"center"} my={"1.3rem"} src="" name="Emil Datuin" />
        <Heading fontSize={"1.5rem"}>Emil Jason Datuin</Heading>
        <Text colorScheme={"gray"}>Software Engineer</Text>
        <Button my={"2rem"} size={"sm"} colorScheme={"orange"} onClick={()=>getUser(null)}>Log out</Button>
    </MotionCard>
    </>
  )
}
