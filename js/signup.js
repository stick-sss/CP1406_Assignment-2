function checkun(){
	var pt="../bakery/right.png"
	var tt = "*The user name consists of 3-18 characters"
	var un = document.getElementById("username").value;
	if(un.length < 3 || un.length > 18){
	document.getElementById("untext").innerHTML = tt;
	document.getElementById("untext").style.display = "block";
	document.getElementById("unpt").style.display = "none";
	}
	else {
	document.getElementById("unpt").innerHTML = "<img src="+pt+">";
	document.getElementById("untext").style.display = "none";
	document.getElementById("unpt").style.display = "block"
	}
}

function checkem(){
	var pt="../bakery/right.png"
	var tt = "*Email cannot be empty"
	var em = document.getElementById("email").value;
	if(em.length < 1){
	document.getElementById("emtext").innerHTML = tt;
	document.getElementById("emtext").style.display = "block";
	document.getElementById("empt").style.display = "none";	
	}
	else{
	document.getElementById("empt").innerHTML = "<img src="+pt+">";
	document.getElementById("emtext").style.display = "none";
	document.getElementById("empt").style.display = "block"	
	}
}



