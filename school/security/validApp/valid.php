<!DOCTYPE html>
<html lang = "en"> 

<head>

<meta charset= "UTF-8">

<title>Validation</title>

<link rel = "stylesheet/css" href = "style.css">
<script src = "valScript.js"></script>

</head>
<body>

<h1>How much did they drink?</h1>

<form method = "post" action = "result.php">

<label for = "gender">Gender</label> <br>
  <select name="gender">
    <option value="male">male</option>
    <option value="female">female</option>
  </select>
<input type = "text" name = "weight" id = "weight" placeholder = "Weight"></input><span id = "weightError"></span><br>

<input type = "text" name = "bac" id = "bac" placeholder = "BAC%"></input><span id = "bacError"></span><br>

<input type = "text" name = "hours" id = "hours" placeholder = "Hours since first drink."><span id = "hoursError"></span></input><br>

<label for = "drink">Drink</label> <br>
  <select name="drink">
    <option value="beer">beer</option>
    <option value="liqour">liqour</option>
	<option value="wine">wine</option>
  </select>
  
<input type = "button" name = "btnValidate" id = "btnValidate" value = "Validate"></input><br>
<input type = "submit" name = "btnSubmit" id = "btnSubmit" disabled = disabled value = "Submit"></input><br>
  
</form>

</body>
</html>