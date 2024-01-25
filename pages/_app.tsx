import { ChakraProvider } from "@chakra-ui/react";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import ChainContext from "../cost/chain";
import { OseanFooter } from "../components/oseanFooter";
import { OseanHeader, OseanHeaderLinks } from "../components/oseanHeader";
import { BSC, ETH } from "../cost/addresses";
import { useState } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState("binance");
  return (
   <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
    <ThirdwebProvider 
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      secretKey={process.env.NEXT_PUBLIC_TEMPLATE_SECRET_KEY}
      activeChain={selectedChain}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
      ]}
      sdkOptions={{
        gatewayUrls: ["https://ipfs.io/ipfs/"],
      }}
    >
      <ChakraProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content="Osean is a crypto currency project designed to invest in Yachting industry"
          />
          <meta name="theme-color" content="#1FC7D4" />
          <meta
            name="twitter:image"
            content="https://osean.online/osean200.png"
          />
          <meta
            name="twitter:description"
            content="Osean is a crypto currency project designed to invest in Yachting industry"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="🌊 OSEAN BRIDGE - Osean Bridge BSC to ETH"
          />
          <title>Osean Bridge</title>
        </Head>
        <OseanHeaderLinks />
        <OseanHeader />
        <Component {...pageProps} />
        <OseanFooter />
      </ChakraProvider>
    </ThirdwebProvider>
  </ChainContext.Provider>
  );
}

export default MyApp;