window.onload = init;

function init()
{
	var button = document.getElementById("btnSubmit");
	button.onclick = convert;
	
}//ends init

function convert()
{
	var temp = parseInt(document.getElementById("txtCheck").value);
	
	var cel = (((temp - 32) * 5) / 9).toFixed(2);
	
	alert("The temperature in Celsius is " + cel + ".");
	
	
}//ends checkPal