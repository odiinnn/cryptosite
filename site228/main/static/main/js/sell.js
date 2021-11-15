function qwer(){
    const pricee = document.getElementById("sell_form").value;
    priceee = parseInt(pricee);
    price = priceee * 0.95
	console.log(price );
	$('#price123').html(price);
	$('#price1234').removeAttr('hidden');
	$('#price12345').removeAttr('hidden');
}