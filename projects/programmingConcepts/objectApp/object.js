window.onload = init;

//global variable for use as an object
var shape;

function init()
{
	var selected = document.getElementById("shapeSelect");
	selected.onchange = focusChange;
	
	var btnCreate = document.getElementById("btnCreate");
	btnCreate.onclick = create;
	
	var btnLength = document.getElementById("btnLength");
	btnLength.onclick = length;
	
	var btnWidth = document.getElementById("btnWidth");
	btnWidth.onclick = width;
	
	var btnArea = document.getElementById("btnArea");
	btnArea.onclick = shapeArea;
	
	
}//ends init

function length()
{
	alert("The length is " + shape.length);
	
}

function width()
{
	alert("The width is " + shape.width);
	
}

function shapeArea()
{
	alert("The area is " + shape.shapeArea);
	
}

function create()
{
	var div = document.getElementById("imgShape");
	div.innerHTML = "";
	var img = document.createElement("img");
	
	if(document.getElementById("shapeSelect").value == "square")
	{
		shape = {
		length:parseInt(document.getElementById("length").value), 
		width:parseInt(document.getElementById("length").value), 
		shapeArea: document.getElementById("length").value * document.getElementById("length").value
		};
		
		img.src = "img/square.png";
	}//ends if
	else if(document.getElementById("shapeSelect").value == "rectangle")
	{
		shape = {
		length:parseInt(document.getElementById("length").value), 
		width:parseInt(document.getElementById("width").value), 
		shapeArea: parseInt(document.getElementById("length").value) * parseInt(document.getElementById("width").value)
		};
		
		
		img.src = "img/rectangle.png";
	}//ends else if
	else
	{
		shape = {
		length:parseInt(document.getElementById("length").value), 
		width:parseInt(document.getElementById("width").value), 
		shapeArea:(document.getElementById("width").value * document.getElementById("width").value) / 2
		};
		
		img.src = "img/rhombus.png";
		
	}//ends else if
	
	div.appendChild(img);
	
	
}//ends create

function focusChange()
{
	if(document.getElementById("shapeSelect").value == "square")
		document.getElementById("width").disabled = true;
	else
		document.getElementById("width").disabled = false;
	
}//ends focusChange