window.onload = init;

function init()
{
	var valid = document.getElementById("btnValidate");
	valid.onclick = checkError;
	
}

function checkError()
{
	
	
	var weight = document.getElementById("weight").value;
	var bac = document.getElementById("bac").value;
	var hours = document.getElementById("hours").value;
	
	var weightError = document.getElementById("weightError");
	var bacError = document.getElementById("bacError");
	var hoursError = document.getElementById("hoursError");
	
	var able = document.getElementById("btnSubmit");
	
	
	if(isNaN(weight) || weight <= 0)
	{
		able.disabled = "disabled";
		weightError.innerHTML = "*Weight must be a number greater than 1.";
	}//ends if
		
	else
	{
			able.disabled = false;
			weightError.innerHTML = "";
	}
		
	
	if(isNaN(bac) || bac <= 0 || bac >= 1)
	{
		able.disabled = "disabled";
		bacError.innerHTML = "*BAC must be a number between 0 and 1.";
		
	}//ends if
	else
	{
			able.disabled = false;
			bacError.innerHTML = "";
	}
	
	if(isNaN(hours) || hours <= 0)
	{
		able.disabled = "disabled";
		hoursError.innerHTML = "*Hours must be a number greater than 1.";
		
	}//ends if
	else
	{
			able.disabled = false;
			hoursError.innerHTML = "";
	}
	
	
}//ends checkError