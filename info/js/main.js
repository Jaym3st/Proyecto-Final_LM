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
	let term1 = document.getElementById("term1");
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!name){
		alert("Porfavor introducca el nombre");
	}
	else if (!apellido){
		alert("Porfavor introducca el apellido");
	}
	else if(!email){
		alert("Porfavor introducca el email");
	}
	else if(!email.match(validRegex)){
		alert("El email no es válido, porfavor vuelva a introducirlo")
	}
	else if (!term1.checked){
		alert("Debe de aceptar nuestra política de protección de datos");
	}
	else{
		alert("Muchisimas gracias, contactaremos con usted lo antes posible")
	}

}