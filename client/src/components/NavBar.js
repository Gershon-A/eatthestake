import React, {useContext} from "react";

import BlockchainContext from "../context/BlockchainContext";
import Button from 'react-bootstrap/Button';


const tokenAddress = '0xbAb3cbDcBCc578445480a79ed80269C50bB5B718';
const tokenSymbol = 'MDZA';
const tokenDecimals = 18;
const tokenImage = 'https://etherscan.io/token/images/medooza_28.png';

  async function addtokentoWallet() {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded =await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }

export default function NavBar() {
    const blockchainContext = useContext(BlockchainContext);
    const { web3, accounts } = blockchainContext;

    const AddressView = () => (
        <>
            Connected: {accounts? accounts[0].substring(0,6) : undefined}...{accounts? accounts[0].substring(accounts[0].length-4,accounts[0].length) : undefined}
        </>
    )

    const TokenToWalletView = () => (
        <>
        {<div class="button-box button-1"><Button variant="primary" className="button  button-1" onClick={addtokentoWallet}  >Add token to Wallet</Button></div> }
        </>
    )

    return (
        <>

        <div class="mein-menu">
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/logo-white.webp" class="logo" alt="Medooza logo" height="100px" width="200px"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://app.honeyswap.org/#/add/0xbab3cbdcbcc578445480a79ed80269c50bb5b718/xDAI?chainId=100" target="_blank">Join the Pool</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#prediction">Price Prediction</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://medooza.gitbook.io/medooza-project-wiki/guides/medooza-stake-program" target="_blank">FAQ & Support</a>
                            </li>

                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                                <a class="nav-link button-1" href="#">{web3? <AddressView />: 'Not connected'}</a>
                            </li>
                            <li class="nav-item">                
                                   
                                      <TokenToWalletView/> 
                                   
                                  </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  
  
        </>
    )
}