import { Web3Button, useContract, useContractWrite, useContractRead, useAddress } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import  web3  from "web3";
import {
  Flex,
  Card,
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  useToast,
  ChakraProvider,
  Image,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

export default function BridgeVault() {
  const { contract: vault } = useContract("0x4D33a2C3e099eEfD27c9d8D084d53c2E571B1917");
  const { contract: osean } = useContract("0x722cB8e411D40942C0f581B919ecCE3E4D759602");
  const { mutateAsync: bridge, isLoading } = useContractWrite(vault, "bridge");
  const { mutateAsync: approve } = useContractWrite(osean, "approve");
  const address = useAddress();

  const [destWallet, setDestWallet] = useState("");
  const [amount, setAmount] = useState(0);

  
  const receiver_ = destWallet;
  const siblingChainSlug_ = 137;
  const amount_ = ethers.utils.parseUnits(amount.toString(), 18); 
  const msgGasLimit_ = 5000000;
  const payload_ = "0x0000000000000000000000000000000000000000000000000000000000000000"; 
  const options_ = "0x0000000000000000000000000000000000000000000000000000000000000000";
  const nativeTokenValue = "0.001" 

  

  const bridgeFunction = async (contract: any) => {
    try {
      
      const allowance = await approve({ args: [
        "0x4D33a2C3e099eEfD27c9d8D084d53c2E571B1917",
        amount_
    ]}); 
      console.info("Contract call success", allowance);

      const data = await bridge({
        args: [receiver_, siblingChainSlug_, amount_, msgGasLimit_, payload_, options_], 
        overrides: { value: ethers.utils.parseEther(nativeTokenValue) },
      });

      console.info("Contract call success", data);
    } catch (error) {
      console.error("Contract call failure", error);
    }
  };

  return (
    

<ChakraProvider>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Card style={{ maxWidth: "600px" }}>
    <Flex justify="space-between" alignItems="flex-start" width="100%">
      <Box flex="1" m={4}>
        <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ textAlign: "center" }}>
          <h5>Bridge your OSEAN from BSC to ETH</h5>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/images/binance_osean.png" alt="bsc-osean" width={50} height={50} />
            <span className="ml-3 mr-3"> BSC to Eth</span>
            <Image src="/images/eth_osean.png" alt="bsc-osean" width={50} height={50} />
          </div>
        </div>
        <br />
          <FormControl>
          <FormLabel mt={3}  mb={-1}>Destination Wallet</FormLabel>
          <Text fontSize='xs' as='cite'>Insert your Wallet address at ETH</Text>
        <Input
          type="text"
          value={destWallet}
          onChange={(e) => setDestWallet(e.target.value)}
        />
          </FormControl>
          <FormControl>
            <FormLabel mt={3} mb={-1}>OSEAN amount</FormLabel>
            <Text fontSize='xs' as='cite'>Enter the amount in OSEAN that you wish to bridge to ETH</Text>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </FormControl>
          
         
          <div style={{ textAlign: "center" }}>
          <Web3Button className="btn btn-lg btn-round mt-4 btn-gradient-blue animated"
        contractAddress="0x4D33a2C3e099eEfD27c9d8D084d53c2E571B1917"
        action={(contract) => bridgeFunction(contract).then(() => {})}
      >
        Bridge To ETH
      </Web3Button>
          </div>
        </form>
      </Box>
    </Flex>
  </Card>
</div>
</ChakraProvider>
  );
}