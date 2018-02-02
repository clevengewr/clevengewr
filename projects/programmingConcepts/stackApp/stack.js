window.onload = init;

var stackSize = 0;

var stack = [];

function init()
{
	
	var btnPush = document.getElementById("btnPush");
	btnPush.onclick = handleButtonPush;
	
	var btnPop = document.getElementById("btnPop");
	btnPop.onclick = handleButtonPop;
	
	var btnPeek = document.getElementById("btnPeek");
	btnPeek.onclick = handleButtonPeek;
	
}//ends init


function handleButtonPeek()
{
	
	var div = document.getElementById("peek");
	div.innerHTML = "";
	var img = document.createElement("img");
	img.src = stack[stackSize - 1];
	img.id = "peekObj";
	
	if(stackSize - 1 < 0)
	{
		img.src = "img/empty.png";
		div.appendChild(img);
	}
	else
		div.appendChild(img);

}//ends handleButtonPeek


function handleButtonPop()
{
	var temp = stackSize - 1;
	var li = document.getElementById(temp.toString()).outerHTML = "";
	delete li;
	stackSize--;
	stack.pop();
}//ends handleButtonPop


function handleButtonPush()
{
	
	var selected = document.getElementById("ballSelect");
	var ball = selected.options[selected.selectedIndex].value;
	
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.id = stackSize;
	var img = document.createElement("img");
	
	switch(ball) 
	{
    case "white":
        img.src = "img/white.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
    case "red":
        img.src = "img/red.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "orange":
        img.src = "img/orange.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "yellow":
        img.src = "img/yellow.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "green":
        img.src = "img/green.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "blue":
        img.src = "img/blue.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "indigo":
        img.src = "img/indigo.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "violet":
        img.src = "img/violet.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
	case "black":
        img.src = "img/black.png";
		li.appendChild(img);
		ul.appendChild(li);
		stackSize++;
        break;
    default:
        alert("Error!");
	}//ends switch 
	
	stack.push(img.src);
	
}//ends handleButton
