window.onload = init;

function init()
{
	var button = document.getElementById("btnSubmit");
	button.onclick = reverse;
	
}//ends init

function reverse()
{
	var str = document.getElementById("txtCheck").value;
	
	alert(str.split("").reverse().join(""));
	
}//ends reverse