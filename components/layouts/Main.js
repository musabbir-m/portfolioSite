import Head from "next/head";
import { Box } from "@chakra-ui/react";
const Main= ({children, router})=>{
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device"/>
                <title>
                    Musabbir - Homepage  
                </title>
            </Head>
            
        </Box>
    )
    
}