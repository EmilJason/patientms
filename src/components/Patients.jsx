import { useToast, Textarea, Select, FormControl, FormLabel, Input,Box, Button, Divider, Heading, HStack, Table, Tbody, Td, Th, Thead, Tr,useDisclosure, Modal,ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,ModalBody } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const NewPatient =({isOpen, onClose})=>{
    const {patients,getPatients} = useContext(DataContext)
    const [firstName, setFirstName] = useState("")
    const [middleInitial, setMiddleInitial] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const toast = useToast()

    //save
    const savePatient = () =>{
        toast({
        title: "Success",
        description: "New Patient Save",
        status: "success"
        })
        getPatients({firstName, middleInitial,lastName,age,gender,symptoms})
        onClose()
    }

    useEffect(()=>console.log(patients))
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Patient</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl my={"1rem"}>
                        <FormLabel htmlFor="firstName">First Name:</FormLabel>
                        <Input 
                        type="text" 
                        variant={"filled"} 
                        name="firstName" 
                        id="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={e=>setFirstName(e.target.value)} />
                    </FormControl>
                    
                    <FormControl my={"1rem"}>
                        <FormLabel htmlFor="middleName">Middle Initial:</FormLabel>
                        <Input 
                        type="text" 
                        variant={"filled"} 
                        name="middleName" 
                        id="middleName"
                        placeholder="Middle Initial"
                        value={middleInitial}
                        onChange={e=>setMiddleInitial(e.target.value)} />
                    </FormControl>

                    <FormControl my={"1rem"}>
                        <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                        <Input 
                        type="text" 
                        variant={"filled"} 
                        name="lastName" 
                        id="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={e=>setLastName(e.target.value)} />
                    </FormControl>

                    <HStack>
                        <FormControl my={"1rem"}>
                            <FormLabel htmlFor="age">Age:</FormLabel>
                            <Input 
                            type="number" 
                            variant={"filled"} 
                            name="age" 
                            id="age"
                            placeholder="Age"
                            value={age}
                            onChange={e=>setAge(e.target.value)} />
                        </FormControl>

                        <FormControl my={"1rem"}>
                            <FormLabel htmlFor="gender">Gender</FormLabel>
                            <Select 
                            id="gender" 
                            name="gender" 
                            placeholder="Select a Gender" 
                            variant={"filled"} 
                            value={gender}
                            onChange={e=>setGender(e.target.value)}>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </Select>
                        </FormControl>
                    </HStack>
                    <FormControl my={"1rem"}>
                        <FormLabel htmlFor="symptoms">Symptoms</FormLabel>
                        <Textarea 
                        id="symptoms" 
                        name="symptoms" 
                        placeholder="Enter symptoms here..."
                        value={symptoms}
                        onChange={e=>setSymptoms(e.target.value)} />
                    </FormControl>

                    <Button colorScheme={"teal"} onClick={savePatient}>Save</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default function Patients() {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
        <HStack my={"1%"} marginTop={"1rem"}>
            <Heading flexGrow={1} color={"teal"} fontSize={"md"} letterSpacing={"2px"} textTransform={"uppercase"}>
                Patient
            </Heading>
            <Button size={"sm"} colorScheme={"teal"} onClick={onOpen}>New</Button>
            <NewPatient onClose={onClose} isOpen={isOpen} />
        </HStack>
        <Divider />
        <Box border={"1px solid teal"} borderRadius={"lg"} p={"1rem"} h={"100%"}>
        <Table variant={"striped"} colorScheme={"teal"}>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Gender</Th>
                    <Th>Age</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Emil Jason Datuin</Td>
                    <Td>Male</Td>
                    <Td>26</Td>
                    <Td>
                        <Button size={"sm"} variant={"outline"} colorScheme={"messenger"}>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Emil Jason Datuin</Td>
                    <Td>Male</Td>
                    <Td>26</Td>
                    <Td>
                        <Button size={"sm"} variant={"outline"} colorScheme={"messenger"}>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Emil Jason Datuin</Td>
                    <Td>Male</Td>
                    <Td>26</Td>
                    <Td>
                        <Button size={"sm"} variant={"outline"} colorScheme={"messenger"}>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Emil Jason Datuin</Td>
                    <Td>Male</Td>
                    <Td>26</Td>
                    <Td>
                        <Button size={"sm"} variant={"outline"} colorScheme={"messenger"}>Edit</Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
        </Box>
    </>
  )
}
