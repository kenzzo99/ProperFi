import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import roboPunksNFT from "./RoboPunksNFT.json";

const roboPunksNFTAddress = "0xBA7d0E7d36b733ff8113980a263cde09E3129Be3";

const MaintMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(20);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    let amount = ""+mintAmount;
    const form = new FormData();
    form.append('allowPlatformToOperateToken', 'true');
    form.append('chain', 'goerli');
    form.append('metadataUrl', 'https://ipfs.io/ipfs/bafyreiawn2na76wijmqhpjngt3srcifevkr62pjdis32ajys6kf4sepel4/metadata.json');
    form.append('contractAddress', '0xD0CA06e3a005D75dCf4A0b2a0dB2cE706013f191');
    form.append('tokenInitialSupply', amount);
    form.append('recipientAddress', '0x585888AdddB67A1377f971185F2B0735F15478BD');

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_f089015b-1ca5-40b4-b5d5-99e6e6073c99'
      }
    };

    options.body = form;

    fetch('https://api.verbwire.com/v1/nft/mint/createToken1155', options)
      .then(response => response.json())
      .then(response => alert(response))
      .catch(err => alert(err));
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 100) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="45vh" paddingBottom="100px">
      
      <Box width="720px">
        
        <div>

          <Text fontSize="96px" color="white" textShadow="0 4px 4px #000000">
            ProperFi
          </Text>
          <p></p>
          <Text
            
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            font
            textShadow="0 8px 8px #000000"
            color="#33bbcf "
          >
            This website is for demo purposes only.
          </Text>
          
          <Text
            
            fontSize="70px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 4px 4px #000000"
            color="white"
          >
            Villa Korcula Supreme
          </Text>
          <Text
            as='b'
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 8px 8px #000000"
            color="#33bbcf "
          >
            Šetalište Tina Ujevića 25, 20260, Korčula, Croatia
          </Text>


          
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
                backgroundColor="#008fd4"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="10"
                onClick={handleDecrement}
              >
                {" "}
                -
              </Button>

              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />

              <Button
                backgroundColor="#008fd4"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="black"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="10"
                onClick={handleIncrement}
              >
                {" "}
                +
              </Button>
            </Flex>

            <Button
              backgroundColor="#008fd4"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="black"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="white"
          >
            Connect your wallet to mint.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MaintMint;
