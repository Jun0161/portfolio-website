import Head from "next/head"
import Navbar from "../navbar.js"
import { Box, Container } from "@chakra-ui/react"
import CatModel from "../cat-model.js"

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width-=device-wdith, initial-scale=1"/>
                <meta name="description" content="Jun's homepage" />
                <meta name="author" content="Jun Yi Ng" />
                <link rel="cat-icon" href="cat.ico" />
                <link rel="shortcut icon" href="/cat.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Jun Yi Ng" />
                <meta name="og:title" content="Jun Yi Ng" />
                <meta property="og:type" content="website" />
                <title>Jun Yi Ng - Homepage</title>
            </Head>
            <Navbar path={router.asPath} ></Navbar>
            <Container maxW="container.md" pt={14}>
                <CatModel />
                {children}
            </Container>
        </Box>
    )
}

export default Main