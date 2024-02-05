import { Container, Button, Flex, SimpleGrid, ChakraProvider, Card, FormControl, Box, Input, FormLabel, Text, Select, Image } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import React, {useContext} from "react";
import { OseanHeaderLinks } from "../components/oseanHeader";
import ChainContext from "../cost/chain";
import { Loading } from "./loading"
import Link from "next/link";
import BridgeVault from "../components/bridgeVault";
import BridgeEth from "../components/bridgeEth";


const Home: NextPage = () => {
  const address = useAddress();

  const [loading, setLoading] = React.useState(true);
  const { selectedChain, setSelectedChain } = useContext(ChainContext);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
    <div>
    <OseanHeaderLinks />
    <Loading />
    </div> 
    )
  }
  
  return (
    <Container maxW={"100%"}>

              <div className="sub-page">
                
                <div className="page-header">
                    <div className="img"></div>
                    <div className="head-content container-fluid">
                        <div className="container">
                            <h1 className="page-title">ETH - BSC Bridge</h1>
                           
                            <div className="breadcrumb">
                                <a href="https://osean.online">Home</a> / 
                                <a className="current">Bridge</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <ChakraProvider>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"70px" }}>
            <Card style={{ maxWidth: "600px" }}>
              <Flex justify="space-between" alignItems="flex-start" width="100%">
                <Box flex="1" m={4}>
                  <form>
                    <h4>Select your Route</h4>
                    <Select style={{ maxWidth: "600px", }}
                      value={String(selectedChain)}
                      onChange={(e) => setSelectedChain(e.target.value)}
                    >
                      <option value="binance">Binance to Ethereum</option>
                      <option value="ethereum">Ethereum to Binance</option>
                    </Select>
                  </form>
                </Box>
              </Flex>
            </Card>
          </div>
        </ChakraProvider>

        <div style={{ marginTop: "20px", marginBottom: "50px" }}>
          {selectedChain === "binance" && <BridgeVault />}
          {selectedChain === "ethereum" && <BridgeEth />}
        </div>
      
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop:"50px", marginBottom:"50px"}}>
<Text>Powered by </Text> &ensp; <p><a href="https://socket.tech" rel="socket" target="_blank"><Image src="/theme-assets/images/socket.jpg" alt="socket" /></a></p>
      
      </div>
      
      
    </Container>
    
  );
};

export default Home;