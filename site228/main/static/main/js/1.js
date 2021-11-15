 window.addEventListener('load', async () => {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();

          initPayButton0()
          initPayButton3()
          initPayButton6()

        } catch (err) {

          $('#status0').html('User denied account access', err)
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)


        initPayButton0()
        initPayButton3()
        initPayButton6()

      } else {

        $('#status0').html('No Metamask (or other Web3 Provider) installed')
      }
    })

    const initPayButton0 = () => {
      $('.floating-button0').click(() => {

        // paymentAddress is where funds will be send to
        const paymentAddress = '0x009d976b070eAbC3686B277a5F74eBe93E970FbA'
        const amountEth = '0.5'
	
	const url = 'https://bsc-dataseed.binance.org/'
	//web3 = new Web3(url)
	const TokenAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
	const MyAddress = '0x965A2327d7bc15c9712AAb4Df890dDbE9dE665af'
	const url_eth = 'https://api.bscscan.com/api'
   	//contract_address = web3.eth.toChecksumAddress(TokenAddress)
	const API_ENDPOINT = url_eth+'?module=contract&action=getabi&address='+(TokenAddress)
	//r = requests.get(url=API_ENDPOINT)
	//response = r.json()
	//abi = json.loads(response['result'])	
	abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "addListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "destAddr",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
	


const token = new web3.eth.Contract(abi, MyAddress)
token.methods.listing(TokenAddress, '0').call(function (err, res) {
  	if (err) {

			$('#asdf0').html('Something wrong, please give us to know')
    			return
  		}

			if (res[0] == 0){
				$('#asdf0').html('Someone already bought it(')
				$(".floating-button").attr("disabled","true")
					}
			else {qwer()}
		})

	
	async function qwer ()   { 

    	
     	let  acct = (await  web3.eth.getAccounts ())[0]; 
  
  	
        
	token.methods.purchase(TokenAddress,
        '0', '1').send({from: acct, value: web3.utils.toWei(amountEth, 'ether'), gas: 3000000 }, (err, transactionId) => {

        if  (err) {


            $('#status0').html('Payment failed')
          } else {


            $('#status0').html('Payment successful')
          }
        })
	
}

      })
    }


const initPayButton3 = () => {
      $('.floating-button3').click(() => {

        // paymentAddress is where funds will be send to
        const paymentAddress = '0x009d976b070eAbC3686B277a5F74eBe93E970FbA'
        const amountEth = '1'

	const url = 'https://bsc-dataseed.binance.org/'
	//web3 = new Web3(url)
	const TokenAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
	const MyAddress = '0x965A2327d7bc15c9712AAb4Df890dDbE9dE665af'
	const url_eth = 'https://api.bscscan.com/api'
   	//contract_address = web3.eth.toChecksumAddress(TokenAddress)
	const API_ENDPOINT = url_eth+'?module=contract&action=getabi&address='+(TokenAddress)
	//r = requests.get(url=API_ENDPOINT)
	//response = r.json()
	//abi = json.loads(response['result'])
	abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "addListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "destAddr",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



const token = new web3.eth.Contract(abi, MyAddress)
token.methods.listing(TokenAddress, '3').call(function (err, res) {
  	if (err) {

			$('#asdf3').html('Something wrong, please give us to know')
    			return
  		}

			if (res[0] == 0){
				$('#asdf3').html('Someone already bought it(')
				$(".floating-button").attr("disabled","true")
					}
			else {qwer()}
		})


	async function qwer ()   {


     	let  acct = (await  web3.eth.getAccounts ())[0];



	token.methods.purchase(TokenAddress,
        '3', '1').send({from: acct, value: web3.utils.toWei(amountEth, 'ether'), gas: 3000000}, (err, transactionId) => {

        if  (err) {


            $('#status3').html('Payment failed')
          } else {


            $('#status3').html('Payment successful')
          }
        })

}

      })
    }


    const initPayButton6 = () => {
      $('.floating-button6').click(() => {

        // paymentAddress is where funds will be send to
        const paymentAddress = '0x009d976b070eAbC3686B277a5F74eBe93E970FbA'
        const amountEth = '0.2'

	const url = 'https://bsc-dataseed.binance.org/'
	//web3 = new Web3(url)
	const TokenAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
	const MyAddress = '0x965A2327d7bc15c9712AAb4Df890dDbE9dE665af'
	const url_eth = 'https://api.bscscan.com/api'
   	//contract_address = web3.eth.toChecksumAddress(TokenAddress)
	const API_ENDPOINT = url_eth+'?module=contract&action=getabi&address='+(TokenAddress)
	//r = requests.get(url=API_ENDPOINT)
	//response = r.json()
	//abi = json.loads(response['result'])
	abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "addListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "listing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contractAddr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "destAddr",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



const token = new web3.eth.Contract(abi, MyAddress)
token.methods.listing(TokenAddress, '6').call(function (err, res) {
  	if (err) {

			$('#asdf6').html('Something wrong, please give us to know')
    			return
  		}

			if (res[0] == 0){
				$('#asdf6').html('Someone already bought it(')
				$(".floating-button").attr("disabled","true")
					}
			else {qwer()}
		})


	async function qwer ()   {


     	let  acct = (await  web3.eth.getAccounts ())[0];



	token.methods.purchase(TokenAddress,
        '6', '1').send({from: acct, value: web3.utils.toWei(amountEth, 'ether'), gas: 3000000 }, (err, transactionId) => {

        if  (err) {


            $('#status6').html('Payment failed')
          } else {


            $('#status6').html('Payment successful')
          }
        })

}

      })
    }



