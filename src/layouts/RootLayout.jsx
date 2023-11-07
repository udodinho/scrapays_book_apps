import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Nav"

// components
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }} 
        bg="#34495E"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
