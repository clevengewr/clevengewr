window.onload = init;

function init()
{
	
	var ul = document.getElementById("list");
	var i;
	
	for(i = 1; i <= 100; i++)
	{
		
		if (i % 5 == 0 && i % 3 == 0)
		{
			var li = document.createElement("li");
			li.innerHTML = "FizzBuzz";
			ul.appendChild(li);
		}
		else if (i % 5 == 0)
		{
			var li = document.createElement("li");
			li.innerHTML = "Buzz";
			ul.appendChild(li);
		}
		else if (i % 3 == 0)
		{
			var li = document.createElement("li");
			li.innerHTML = "Fizz";
			ul.appendChild(li);
		}
		else 
		{
			var li = document.createElement("li");
			li.innerHTML = i;
			ul.appendChild(li);
		}
		
	}//ends for
	
}//ends init