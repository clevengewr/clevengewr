window.onload = init;

function init()
{
	var button = document.getElementById("btnSubmit");
	button.onclick = checkPal;
	
}//ends init

function checkPal()
{
	var str = document.getElementById("txtCheck").value;
	
	if(str == str.split('').reverse().join(''))
		alert("Its a palindrome!");
	else
		alert("Its not a palindrome!");
	
}//ends checkPal