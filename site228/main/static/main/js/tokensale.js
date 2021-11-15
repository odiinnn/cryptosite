function myFunctionn(){
		const contractaddress = '0x7A6F6d49fB3E1bFD0e737fbBcf34866C4238156E'
        amountEth = 3333000000000
	abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "endSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sold",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
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
		"name": "tokenContract",
		"outputs": [
			{
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
		"name": "tokensSold",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


		const buyTokens_number1 = document.getElementById("buyTokens1").value;
		console.log(buyTokens_number1 );
		buyTokens_number = parseInt(buyTokens_number1);



const token = new web3.eth.Contract(abi, contractaddress)

token.methods.tokensSold().call(function (err, res) {
    price_pop3 = 1
	console.log(res)
	$('#sold').html(res);
	price_pop = Math.floor(res/10000)
	price_pop1 = Math.pow(1.7, price_pop)
	price_pop2 = Math.floor(buyTokens_number/10000)
	price_pop3 = Math.pow(1.7, price_pop2)

	price_real = 0.000003333 * price_pop1
	const buyTokens_number1 = document.getElementById("buyTokens1").value;
	console.log(buyTokens_number1 );
	buyTokens_number = parseInt(buyTokens_number1);
	price_real1 = price_real * buyTokens_number1
	console.log('dasdadddddd', price_real1)
    $('#pricec').html(price_real);
	console.log('sad', price_real)


})


		var price_value = $('#price').val();
		console.log(price_value)
		price_value1 = price_value * 8





}


//function myFunctionnn(){
//		const contractaddress = '0x7A6F6d49fB3E1bFD0e737fbBcf34866C4238156E'
//        amountEth = 3333000000000
//	abi = [
//	{
//		"constant": false,
//		"inputs": [
//			{
//				"name": "numberOfTokens",
//				"type": "uint256"
//			}
//		],
//		"name": "buyTokens",
//		"outputs": [],
//		"payable": true,
//		"stateMutability": "payable",
//		"type": "function"
//	},
//	{
//		"constant": false,
//		"inputs": [],
//		"name": "endSale",
//		"outputs": [],
//		"payable": false,
//		"stateMutability": "nonpayable",
//		"type": "function"
//	},
//	{
//		"anonymous": false,
//		"inputs": [
//			{
//				"indexed": false,
//				"name": "buyer",
//				"type": "address"
//			},
//			{
//				"indexed": false,
//				"name": "amount",
//				"type": "uint256"
//			}
//		],
//		"name": "Sold",
//		"type": "event"
//	},
//	{
//		"inputs": [
//			{
//				"name": "_tokenContract",
//				"type": "address"
//			},
//			{
//				"name": "_price",
//				"type": "uint256"
//			}
//		],
//		"payable": false,
//		"stateMutability": "nonpayable",
//		"type": "constructor"
//	},
//	{
//		"constant": true,
//		"inputs": [],
//		"name": "price",
//		"outputs": [
//			{
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"payable": false,
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"constant": true,
//		"inputs": [],
//		"name": "tokenContract",
//		"outputs": [
//			{
//				"name": "",
//				"type": "address"
//			}
//		],
//		"payable": false,
//		"stateMutability": "view",
//		"type": "function"
//	},
//	{
//		"constant": true,
//		"inputs": [],
//		"name": "tokensSold",
//		"outputs": [
//			{
//				"name": "",
//				"type": "uint256"
//			}
//		],
//		"payable": false,
//		"stateMutability": "view",
//		"type": "function"
//	}
//]
//
//        let buyTokens_number = 0
//		const buyTokens_number1 = document.getElementById("price1").value;
//		console.log(buyTokens_number1 );
//		buyTokens_number = parseInt(buyTokens_number1);
//
//
//
//const token = new web3.eth.Contract(abi, contractaddress)
//
//token.methods.tokensSold().call(function (err, res) {
//	console.log(res)
//	$('#sold').html(res);
//	price_pop = Math.floor(res/10000)
//	price_pop1 = Math.pow(1.7, price_pop)
//    price_pop2 = Math.floor(buyTokens_number/10000)
//	price_pop3 = Math.pow(1.7, price_pop2)
//	price_real = 0.000003333 * price_pop1 * price_pop3
//	const buyTokens_number1 = document.getElementById("buyTokens1").value;
//	console.log(buyTokens_number1 );
//	buyTokens_number = parseInt(buyTokens_number1);
//	price_real2 = Math.floor(price_real * 1000000000000000000) / 1000000000000000000
//	console.log(price_real2)
//	price_real1 = price_real2 * buyTokens_number1
//    console.log('qwerasdf', price_real2)
//	console.log('dasdadddddd', price_real1)
//	console.log('sad', price_real)
//	$('#buyTokens1').val(price_real1);
//
//})


function myFunction(){
		const contractaddress = '0x7A6F6d49fB3E1bFD0e737fbBcf34866C4238156E'
        amountEth = 3333000000000
	abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "endSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sold",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
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
		"name": "tokenContract",
		"outputs": [
			{
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
		"name": "tokensSold",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

        let buyTokens_number = 0
		const buyTokens_number1 = document.getElementById("buyTokens1").value;
		console.log(buyTokens_number1 );
		buyTokens_number = parseInt(buyTokens_number1);



const token = new web3.eth.Contract(abi, contractaddress)

token.methods.tokensSold().call(function (err, res) {
	console.log(res)
	$('#sold').html(res);
	price_pop = Math.floor(res/10000)
	price_pop1 = Math.pow(1.7, price_pop)
    price_pop2 = Math.floor(buyTokens_number/10000)
	price_pop3 = Math.pow(1.7, price_pop2)
	price_real = 0.000003333 * price_pop1 * price_pop3
	const buyTokens_number1 = document.getElementById("buyTokens1").value;
	console.log(buyTokens_number1 );
	buyTokens_number = parseInt(buyTokens_number1);
	price_real2 = Math.floor(price_real * 1000000000000000000) / 1000000000000000000
	console.log(price_real2)
	price_real1 = price_real2 * buyTokens_number1
    console.log('qwerasdf', price_real2)
	console.log('dasdadddddd', price_real1)
	console.log('sad', price_real)
	$('#price1').val(price_real1);

})


		var price_value = $('#price').val();
		console.log(price_value)
		price_value1 = price_value * 8





}


		async function loadwallet ()   {
        let  acct = (await  web3.eth.getAccounts ())[0];
        console.log(acct)
    $.ajax({
        url:'/tokensale',
        type: "GET",
        data: {wallett : acct},
        success: function(data) {
        alert(acct);
//        {{ wallett }} = data;
        },
        failure: function(data) {
        alert('Got an error dude');
        }
    });
    }

 window.addEventListener('load', async () => {
	console.log(web3.version)
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();
	  initbuyTokens();

	  loadwallet();
        } catch (err) {
	console.log('Payment failed', err)
          $('#status').html('User denied account access', err)
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)
	initbuyTokens();

    loadwallet();
      } else {
 	console.log('Payment failed', err)
        $('#status').html('No Metamask (or other Web3 Provider) installed')
      }
    })

    const initbuyTokens = () => {
      $('.floating-buttonnn').click(() => {

        // paymentAddress is where funds will be send to
        const contractaddress = '0x7A6F6d49fB3E1bFD0e737fbBcf34866C4238156E'
        amountEth = 3333000000000
	abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "endSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sold",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
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
		"name": "tokenContract",
		"outputs": [
			{
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
		"name": "tokensSold",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

        let buyTokens_number = 0
		const buyTokens_number1 = document.getElementById("buyTokens1").value;
		console.log(buyTokens_number1 );
		buyTokens_number = parseInt(buyTokens_number1);



const token = new web3.eth.Contract(abi, contractaddress)
	token.methods.tokensSold().call(function (err, res) {
	console.log(res)
	$('#sold').html(res);
	price_pop = Math.floor(res/10000)
	price_pop1 = Math.pow(1.7, price_pop)
	price_pop2 = Math.floor(buyTokens_number/10000)
	price_pop3 = Math.pow(1.7, price_pop2)


	price_real = 0.000003333 * price_pop1 * price_pop3

	price_real2 = Math.floor(price_real * 1000000000000000000) / 1000000000000000000
    console.log('qwerasdf', price_real2)
	console.log('hui suka nahui', price_real2)
	$('#price1').html(price_real2);
	qwer(price_real2)
	})


	async function qwer (abc)   {


	tokens_value = buyTokens_number * abc
	tokens_value1 = Math.floor(tokens_value * 1000000000000000000) / 1000000000000000000
	console.log('abc', abc)
	console.log('hohoh', tokens_value1)
	const decimals = 18;
	const value = (Math.floor(tokens_value1*(10**decimals))).toString();
	console.log('value', value)
	const amount = web3.utils.toBN(value);
	console.log('popopopo', amount)

    let  acct = (await  web3.eth.getAccounts ())[0];




	// web3.utils.toWei(amountEth, 'ether')

    console.log('kjahgfkjhf', price_real)
	token.methods.buyTokens(buyTokens_number).send({from: acct, value:amount }, (err, transactionId) => {

        if  (err) {

            console.log('Payment failed', err)
            window.location.href = '#main';
            $('#status').html('Payment failed')
          } else {

            console.log('Payment successful', transactionId)
            window.location.href = '#main';
            $('#status').html('Payment successful! Check your wallet')
          }
        })

}

      })
}

