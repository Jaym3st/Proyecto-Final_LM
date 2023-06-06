function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "lista") {
	  x.className += " responsive";
	} else {
	  x.className = "lista";
	}
  }

/*-------------------------------------- HASTA AQUI EL TOPNAV --------------------------------------*/

function relleno(){
	let name = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let email = document.getElementById("email").value;
	let tele = parseInt(document.getElementById("Telefono").value);
	let term1 = document.getElementById("term1");
	let term2 = document.getElementById("term2");
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	console.log(tele)
	console.log(name)
	if (!email.match(validRegex)){
		alert("El email no es valido");
	}
	else if (term1.checked && tele && name && apellido && email.match(validRegex)){
		alert("Gracias, contactaremos contigo lo antes posible");
	}	
	else{
		alert("No has aceptado las terminos o no has rellenado todos los campos obligatorios")
	}
}