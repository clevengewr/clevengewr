window.onload = init;


function init()
{
	
	var btnSubmit = document.getElementById("btnSubmit");
	btnSubmit.onclick = flip;
	
}//ends init


function flip()
{
	var coin = document.getElementById("coin");
	coin.innerHTML = "";
	
	var img = document.createElement("img");
	var flip = (Math.random() * (10 - 1)) + 1;
	
	if(flip >= 5)
		img.src = "img/heads.jpg";
	else
		img.src = "img/tails.jpg";
	
	coin.appendChild(img);
	
}//ends flip