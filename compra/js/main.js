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
	let direccion = document.getElementById("direccion").value;
	let codigo = parseInt(document.getElementById("codigo").value);
	let municipio = document.getElementById("municipio").value;
	let provincia = document.getElementById("provincia").value;
	let term1 = document.getElementById("term1");
	let term2 = document.getElementById("term2");
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
	else if(!direccion){
		alert("Porfavor introducca la direccion");
	}
	else if(!codigo){
		alert("Porfavor introducca el codigo postal");
	}
	else if(!municipio){
		alert("Porfavor introducca el municipio");
	}
	else if(!provincia){
		alert("Porfavor introducca la provincia");
	}
	else if (!term1.checked){
		alert("Debe de aceptar nuestra política de protección de datos");
	}
	else{
		alert("Muchisimas gracias por su compra")
	}
}