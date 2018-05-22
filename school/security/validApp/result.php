<!DOCTYPE html>
<html lang = "en"> 

<head>

<meta charset= "UTF-8">

<title>Final Exam</title>

<link rel = "stylesheet/css" href = "style.css">
<script src = "script.js"></script>

</head>
<body>

<h1>How much did they drink?</h1>

<?php 
	$weight = $_POST["weight"] * 16;
	$gender = $_POST["gender"];
	$bac = $_POST["bac"] / 100;
	$hours = $_POST["hours"];
	$alcohol = $_POST["drink"];

	$genderNum;
	$ounces;
	$volume;
	$elimination;
	
	
	if($gender == "male")
	{
		$genderNum = .68;
		$elimination = .015 / 100;
	}
		
	else
	{
		$genderNum = .55;
		$elimination = .017 / 100;
	}
	
	
	if($alcohol == "beer")
	{
		$ounces = 12;
		$volume = .06;
	}
		
	else if($alcohol == "liqour")
	{
		$ounces = 1.25;
		$volume = .4;
	}
		
	else
	{
		$ounces = 5;
		$volume = .14;
	}
		
	
	$numOfDrinks = ($weight * $genderNum) * ($bac + ($elimination * $hours)) / (.8 * $volume * $ounces);
	
	echo "The number of drinks was ".$numOfDrinks.".";

?>
</body>
</html>