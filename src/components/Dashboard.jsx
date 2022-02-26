import { Box } from "@chakra-ui/react";
import Patients from "./Patients";
import UserDetails from "./UserDetails";

export default function Dashboard() {
  return (
    <>
    <Box display={"flex"} flexDirection={{base: "column", md: "row"}} h={"auto"}>
        <Box w={{base: "100%", md: "20%"}}>
            <UserDetails />
        </Box>
        <Box mt={{base: "1rem", md: ".5rem"}} w={{base: "100%", md: "70%"}} overflowY={"auto"} h={"90vh"}>
            <Patients />
        </Box>
        <Box w={{base: "100%", md: "10%"}}>Box3</Box>
    </Box>
    </>
  )
}
