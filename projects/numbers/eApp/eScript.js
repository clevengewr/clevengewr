window.onload = init;


function init()
{
	
	var btnSubmit = document.getElementById("btnSubmit");
	btnSubmit.onclick = generate;
	
}//ends init


function generate()
{
	
	var p = document.getElementById("e");
	p.innerHTML = "";
	
	var selected = document.getElementById("numSelect");
	var num = parseInt(selected.options[selected.selectedIndex].value);
	
	p.innerHTML = Math.E.toFixed(num);
	
}//ends generate