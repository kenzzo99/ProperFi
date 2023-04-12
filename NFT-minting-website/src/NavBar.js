import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
        setAccounts(accounts);
        }
    }

    return(
        
        <Flex justify="space-between" align="center" padding="30px">
        
            {/*Left Side - Social Media Icons*/}
            <Flex justify="space-around" width="40%" padding="75px">
                
            </Flex>

            
            {/*Right Side - Sections and Connect*/}
            <Flex justify="space-between" align="center" padding="30px">
            <Button 
                backgroundColor="white"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="#33bbcf"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Home</Button>
            <Spacer />
            {/*Connect*/}
            { isConnected ? (
                <Box margin="0 15px">Wallet Connected</Box>
            ) : (
                <Button 
                backgroundColor="#33bbcf"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect Wallet</Button>
            ) }
        </Flex>
</Flex>


    );
};

export default NavBar;