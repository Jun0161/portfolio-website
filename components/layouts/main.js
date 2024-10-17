import Head from "next/head"
import Navbar from "../navbar.js"
import { Box, Container } from "@chakra-ui/react"


const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-=device-wdith, initial-scale=1"/>
                <title>Jun Yi Ng - Homepage</title>
            </Head>
            <Navbar path={router.asPath} ></Navbar>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main