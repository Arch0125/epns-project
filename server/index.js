const addABI = require('../smartcontracts/artifacts/contracts/Add.sol/Add.json');
const ethers  = require("ethers");
const axios = require('axios');
async function main(){
    const provider = new ethers.providers.WebSocketProvider('https://eth-goerli.alchemyapi.io/v2/gh4d1-dAT4B_1Khy86s7JUbFhQIclYqO')
    const contractAddr = '0x45D2D5ae050174f6a2EaA3490c893D5726662C07'
    const addContract = new ethers.Contract(contractAddr, addABI.abi, provider);
    console.log("Server Started");
    addContract.on('Addition', (owner,sum) => {
        var data = sum.toString();
        axios.post('http://localhost:8080/addEvent', {
            sender: owner,
            sum: data
          })
          .then((response) => {
            console.log("Event Listened Successfully !");
          }, (error) => {
            console.log(error);
          });
        console.log('Addition Event: ', owner,sum);
    }
    );
    
}

main();