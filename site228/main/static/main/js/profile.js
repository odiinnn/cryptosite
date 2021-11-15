        window.addEventListener('load', async () => {
          if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
              await ethereum.enable();
              initbalanceOf()
              initPayButton()
              sendTransaction()
            } catch (err) {
                $('#wallet').html('User denied account access', err)
            }
          } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider)
            initbalanceOf()
            initPayButton()
            sendTransaction()
          } else {
            $('#wallet').html('No Metamask (or other Web3 Provider) installed')
          }
        })

function pop_up_balance () {
console.log('asdad')
        $('#iputprikol').removeAttr('hidden')



const sendTransaction = () => {

        const contract_address = '0x2C759c861bEB4EA44D946f5e7B845001362d7232'
        const main_address = '0x009d976b070eAbC3686B277a5F74eBe93E970FbA'

		abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


		const amount = document.getElementById("iputprikol").value;
		console.log(amount);



const token = new web3.eth.Contract(abi, contract_address)


	asdf()
	async function asdf ()   {


     	let  acct = (await  web3.eth.getAccounts ())[0];

	amount_s99 =  web3.utils.toWei(amount, 'ether')
	console.log(amount_s99)


	token.methods.transfer(
        main_address, amount_s99).send({from: acct}, function (err, res) {

        if  (err) {

            console.log('Payment failed', err)
            $('#status').html('Payment failed')
          } else {
            async function loadwallet ()   {
                        let  acct = (await  web3.eth.getAccounts ())[0];
                        console.log(acct)
                        $.ajax({
                                url:'/top_up_balance',
                                type: "GET",
                                data: {amount : amount},
                                success: function(data) {
                                alert(acct);

                                },
                                failure: function(data) {
                                alert('Got an error dude');
                                }
                        });
            }
            loadwallet()
            console.log('Your balance', res)
            $('#status').html('Payment successful')
          }
        })

}


}
sendTransaction()

}


function sell_item (abc) {
//    const amount = document.getElementById().value;
    console.log(abc)
    $('#status' + abc).removeAttr('hidden')
    $('#status' + abc).html('We will add this function soon')

    setTimeout(abc)
    setTimeout(function(){
            $('#status' + abc).attr('hidden')
            $('#status' + abc).html('')
        }, 2000)

//    alert(abc)
//    const contract_address = '0xc5063B38346CFb2806BeAC778820D774cc0b31b1'
//    const main_address = '0x009d976b070eAbC3686B277a5F74eBe93E970FbA'
//    abi = [
//	{
//		"anonymous": false,
//		"inputs": [
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "account",
//				"type": "address"
//			},
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "operator",
//				"type": "address"
//			},
//			{
//				"indexed": false,
//				"internalType": "bool",
//				"name": "approved",
//				"type": "bool"
//			}
//		],
//		"name": "ApprovalForAll",
//		"type": "event"
//	},
//	{
//		"anonymous": false,
//		"inputs": [
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "operator",
//				"type": "address"
//			},
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "from",
//				"type": "address"
//			},
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "to",
//				"type": "address"
//			},
//			{
//				"indexed": false,
//				"internalType": "uint256[]",
//				"name": "ids",
//				"type": "uint256[]"
//			},
//			{
//				"indexed": false,
//				"internalType": "uint256[]",
//				"name": "values",
//				"type": "uint256[]"
//			}
//		],
//		"name": "TransferBatch",
//		"type": "event"
//	},
//	{
//		"anonymous": false,
//		"inputs": [
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "operator",
//				"type": "address"
//			},
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "from",
//				"type": "address"
//			},
//			{
//				"indexed": true,
//				"internalType": "address",
//				"name": "to",
//				"type": "address"
//			},
//			{
//				"indexed": false,
//				"internalType": "uint256",
//				"name": "id",
//				"type": "uint256"
//			},
//			{
//				"indexed": false,
//				"internalType": "uint256",
//				"name": "value",
//				"type": "uint256"
//			}
//		],
//		"name": "TransferSingle",
//		"type": "event"
//	},
//	{
//		"anonymous": false,
//		"inputs": [
//			{
//				"indexed": false,
//				"internalType": "string",
//				"name": "value",
//				"type": "string"
//			},
//			{
//				"indexed": true,
//				"internalType": "uint256",
//				"name": "id",
//				"type": "uint256"
//			}
//		],
//		"name": "URI",
//		"type": "event"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address",
//				"name": "from",
//				"type": "address"
//			},
//			{
//				"internalType": "address",
//				"name": "to",
//				"type": "address"
//			},
//			{
//				"internalType": "uint256[]",
//				"name": "ids",
//				"type": "uint256[]"
//			},
//			{
//				"internalType": "uint256[]",
//				"name": "amounts",
//				"type": "uint256[]"
//			},
//			{
//				"internalType": "bytes",
//				"name": "data",
//				"type": "bytes"
//			}
//		],
//		"name": "safeBatchTransferFrom",
//		"outputs": [],
//		"stateMutability": "nonpayable",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address",
//				"name": "from",
//				"type": "address"
//			},
//			{
//				"internalType": "address",
//				"name": "to",
//				"type": "address"
//			},
//			{
//				"internalType": "uint256",
//				"name": "id",
//				"type": "uint256"
//			},
//			{
//				"internalType": "uint256",
//				"name": "amount",
//				"type": "uint256"
//			},
//			{
//				"internalType": "bytes",
//				"name": "data",
//				"type": "bytes"
//			}
//		],
//		"name": "safeTransferFrom",
//		"outputs": [],
//		"stateMutability": "nonpayable",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address",
//				"name": "operator",
//				"type": "address"
//			},
//			{
//				"internalType": "bool",
//				"name": "approved",
//				"type": "bool"
//			}
//		],
//		"name": "setApprovalForAll",
//		"outputs": [],
//		"stateMutability": "nonpayable",
//		"type": "function"
//	},
//	{
//		"inputs": [],
//		"stateMutability": "nonpayable",
//		"type": "constructor"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address",
//				"name": "account",
//				"type": "address"
//			},
//			{
//				"internalType": "uint256",
//				"name": "id",
//				"type": "uint256"
//			}
//		],
//		"name": "balanceOf",
//		"outputs": [
//			{
//				"internalType": "uint256",
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address[]",
//				"name": "accounts",
//				"type": "address[]"
//			},
//			{
//				"internalType": "uint256[]",
//				"name": "ids",
//				"type": "uint256[]"
//			}
//		],
//		"name": "balanceOfBatch",
//		"outputs": [
//			{
//				"internalType": "uint256[]",
//				"name": "",
//				"type": "uint256[]"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "address",
//				"name": "account",
//				"type": "address"
//			},
//			{
//				"internalType": "address",
//				"name": "operator",
//				"type": "address"
//			}
//		],
//		"name": "isApprovedForAll",
//		"outputs": [
//			{
//				"internalType": "bool",
//				"name": "",
//				"type": "bool"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [],
//		"name": "S99almostthere3",
//		"outputs": [
//			{
//				"internalType": "uint256",
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [],
//		"name": "S99nft6",
//		"outputs": [
//			{
//				"internalType": "uint256",
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [],
//		"name": "S99referal9",
//		"outputs": [
//			{
//				"internalType": "uint256",
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [],
//		"name": "S99tothemoon0",
//		"outputs": [
//			{
//				"internalType": "uint256",
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "bytes4",
//				"name": "interfaceId",
//				"type": "bytes4"
//			}
//		],
//		"name": "supportsInterface",
//		"outputs": [
//			{
//				"internalType": "bool",
//				"name": "",
//				"type": "bool"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"inputs": [
//			{
//				"internalType": "uint256",
//				"name": "_tokenId",
//				"type": "uint256"
//			}
//		],
//		"name": "uri",
//		"outputs": [
//			{
//				"internalType": "string",
//				"name": "",
//				"type": "string"
//			}
//		],
//		"stateMutability": "view",
//		"type": "function"
//	}
//]
//    console.log(abc);
//    const token = new web3.eth.Contract(abi, contract_address)
//	asdf()
//	async function asdf ()   {
//    let  acct = (await  web3.eth.getAccounts ())[0];
//	token.methods.safeTransferFrom(
//        acct, main_address, abc, 1, []).send({from: acct}, function (err, res) {
//        if  (err) {
//            console.log('Payment failed', err)
//            $('#status').html('Payment failed')
//          } else {
//            async function loadwallet ()   {
//                        let  acct = (await  web3.eth.getAccounts ())[0];
//                        console.log(acct)
//                        $.ajax({
//                                url:'/add2',
//                                type: "GET",
//                                data: {abc : abc},
//                                success: function(data) {
//                                alert(acct);
//
//                                },
//                                failure: function(data) {
//                                alert('Got an error dude');
//                                }
//                        });
//            }
//            loadwallet()
//            console.log('Your balance', res)
//            $('#status').html('Payment successful')
//          }
//        })
//}
}


    const initPayButton = () => {

        async function qwer ()   {
        let  acct = (await  web3.eth.getAccounts ())[0];
        $('#wallet').html(acct)
        }

        qwer()

    }


const initbalanceOf = () => {
	    const url = 'https://bsc-dataseed.binance.org/'
        const TokenAddress = '0x965A2327d7bc15c9712AAb4Df890dDbE9dE665af'
        const MyAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
        const url_eth = 'https://api.bscscan.com/api'
        const API_ENDPOINT = url_eth+'?module=contract&action=getabi&address='+(TokenAddress)
        abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "S99almostthere3",
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
		"inputs": [],
		"name": "S99almostthere4",
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
		"inputs": [],
		"name": "S99almostthere5",
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
		"inputs": [],
		"name": "S99nft6",
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
		"inputs": [],
		"name": "S99nft7",
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
		"inputs": [],
		"name": "S99nft8",
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
		"inputs": [],
		"name": "S99referal9",
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
		"inputs": [],
		"name": "S99tothemoon0",
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
		"inputs": [],
		"name": "S99tothemoon1",
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
		"inputs": [],
		"name": "S99tothemoon2",
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
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
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
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


        const token = new web3.eth.Contract(abi, MyAddress)

        async function asdf ()   {

            let  acct = (await  web3.eth.getAccounts ())[0];

            for (let i = 0; i < 10; i++) {
                    await token.methods.balanceOf(acct,
                    i).call(async function (err, res) {
                    if  (err) {
//                            console.log('qwer')
                        $('#status').html('Oops... Some problems...')
                      } else {
                      if (res > 0) {
//                      console.log(res)
                        $('#status').html('sosi ueban')
                        $('#amount'+i).html("Amount: " + res)


                         await inituri(i)



                      }
                      else {
                            $('#fake').html('You have not got our special items...')
                      }
                      }
                    })
            }



        }
        asdf()

    }



async function inituri  (i)  {



	    const url = 'https://bsc-dataseed.binance.org/'
        const TokenAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
        const MyAddress = '0x2c3e4B2c2F9d040aA48bAD307c7921F7AE9299cE'
        const url_eth = 'https://api.bscscan.com/api'
        const API_ENDPOINT = url_eth+'?module=contract&action=getabi&address='+(TokenAddress)

        abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "S99almostthere3",
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
		"inputs": [],
		"name": "S99almostthere4",
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
		"inputs": [],
		"name": "S99almostthere5",
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
		"inputs": [],
		"name": "S99nft6",
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
		"inputs": [],
		"name": "S99nft7",
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
		"inputs": [],
		"name": "S99nft8",
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
		"inputs": [],
		"name": "S99referal9",
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
		"inputs": [],
		"name": "S99tothemoon0",
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
		"inputs": [],
		"name": "S99tothemoon1",
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
		"inputs": [],
		"name": "S99tothemoon2",
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
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
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
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


        const token = new web3.eth.Contract(abi, MyAddress)

        async function zxcv ()   {

            let  acct = (await  web3.eth.getAccounts ())[0];

           await token.methods.uri(i).call(async function (err, res) {

                    if  (err) {


                        $('#status').html('Payment failed')
                      } else {
                        let response  = await fetch(res)
                        let obj = await response.json()


                        $('#name'+i).html(obj.name)
                        $('#description'+i).html(obj.description)
                        $('#image'+i).attr("src", obj.image);
                        $('#id'+i).html("Element id: " + obj.id)
                        $('#link'+i).attr("href", "https://testnet.bscscan.com/address/0xb92ebf76ce586571070fdbd0bbd8fadd3885077d" )
                        $('#link'+i).html("Contract address")
                        $('#link'+i).attr("style", "color: dark ")
                        $('#image'+i).attr("style", "width: 200px; height: 200px; border: 2px solid #f1f1f1;" );
                        $('#row_mode'+i).attr("style", "display: flex; flex-direction: row; justify-content: space-around; flex-wrap: wrap; margin: 0 -30px; margin-top: 0 20px;")
                        $('#sorting'+i).attr("style", "display: flex; flex-direction: column; justify-content: normal; margin: 0 20px; margin-top: 3%; border: 2px solid #33006E; padding: 20px; border-radius: 25px; background-color: #E4B1FB;")
                      }
                    })


        }
        zxcv()

    }
