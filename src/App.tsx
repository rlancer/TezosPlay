import "./styles.css";
import { useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";

const tezos = new TezosToolkit("https://rpc.tzbeta.net/");
//
tezos.tz
  .getBalance("tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY")
  .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
  .catch((error) => console.log(JSON.stringify(error)));

export default function App() {
  useEffect(() => {});
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
