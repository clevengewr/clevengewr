window.onload = init;

function init()
{
	
	var btnGen = document.getElementById("btnGenerate");
	btnGen.onclick = click;
	
	
}//ends function

function click()
{
	var btnGen = document.getElementById("btnGenerate");
	create();
	fill();
	btnGen.disabled = "disable";
	
}//ends click

function create()
{
	
	var ul = document.getElementById("list");
	
	
	for(var i = 0; i < 30; i++)
	{
		var li = document.createElement("li");
		li.id = "item" + i;
		ul.appendChild(li);
		
	}//ends for
	
}//ends create

function fill()
{
	var e = new Array(30);
	var rand;
	for(var i = 0; i < e.length; i++)
	{
		
		e[i] = document.getElementById("item" + i);
		
		
		if(i % 7 == 0)
		{
			rand = 0;
			e[i].innerHTML = "Day number " + (i + 1) + " Shares traded: " + rand + ". Off day.";
			
		}
		else
		{
			rand = ((Math.floor(Math.random() * (10000 - 7000)) + 7000));
			
			if(rand > 8500)
				e[i].innerHTML = "Day number " + (i + 1) + " Shares traded: " + rand + ". It is over the target trading";
			else
				e[i].innerHTML = "Day number " + (i + 1) + " Shares traded: " + rand + ". It is under the target trading";
			
		}//ends else
		
		
	}//ends for
	
}//ends function

