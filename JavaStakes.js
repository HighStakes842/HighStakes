function submit_form(){
	let x = document.getElementById("EmailSubmission").value;
	let y =  document.getElementById("Message").value;
	let text;
	let email = false;
	if (x != ""){
		if (x.match(document.getElementById("EmailSubmission").pattern)){
		email = true;
		}
	}
	
	if (x == "" || y == "") {
		document.getElementById("BreadText").innerHTML = "Oops youve not submitted anything";
	} else{
		if (email == true){
		document.getElementById("BreadText").innerHTML = "Woah, nice submission";
		document.getElementById("EmailSubmission").value = "";
		document.getElementById("Message").value = "";
		} else{
			document.getElementById("BreadText").innerHTML = "Invalid email";
		}
	}
}

function give_alert(){
	alert("The link does not work as of yet")
}