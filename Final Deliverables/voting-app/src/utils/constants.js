import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
