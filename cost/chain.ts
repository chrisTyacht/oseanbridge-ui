import { createContext } from "react";

const ChainContext = createContext({
  selectedChain: "binance",
  setSelectedChain: (chain: string) => {},
});

export default ChainContext;