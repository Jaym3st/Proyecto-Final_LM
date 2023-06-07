function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "lista") {
	  x.className += " responsive";
	} else {
	  x.className = "lista";
	}
  }

/*-------------------------------------- HASTA AQUI EL TOPNAV --------------------------------------*/

// let docTitle = document.title;
// window.addEventListener("blur", () => {
// 	document.title = "Come Back ;(";
// })

// window.addEventListener("focus", () => {
// 	document.title = docTitle;
// })