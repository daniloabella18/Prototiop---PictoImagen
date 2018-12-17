// Conteo

var cuadro1 = cuadro2 = cuadro3 = cuadro4 = 0;

// Img 1
var i = true;

function CambioImagen1() {
	cuadro1 = cuadro1 + 1;
	switch (i) {
		case true:
			document.getElementById("onom1").src = "assets/images/Tematica/Animales/Leon/L-Ono-1.png";
        i = false;
			break;
		case false:
			document.getElementById("onom1").src = "assets/images/Tematica/Animales/Leon/L-Ono-2.png";
        i = true;
			break;
	}
}

// Img 2
var x = true;

function CambioImagen2() {
	cuadro2 = cuadro2 + 1;
	switch (x) {
		case true:
			document.getElementById("onom2").src = "assets/images/Tematica/Animales/Leon/L-Ono-3.png";
        x = false;
			break;
		case false:
			document.getElementById("onom2").src = "assets/images/Tematica/Animales/Leon/L-Ono-4.png";
        x = true;
			break;
	}
}

// Img 3
var y = true;

function CambioImagen3() {
	cuadro3 = cuadro3 + 1;
	switch (y) {
		case true:
			document.getElementById("onom3").src = "assets/images/Tematica/Animales/Leon/L-Ono-5.png";
        y = false;
			break;
		case false:
			document.getElementById("onom3").src = "assets/images/Tematica/Animales/Leon/L-Ono-6.png";
        y = true;
			break;
	}
}

// Img 4
var z = true;

function CambioImagen4() {
	cuadro4 = cuadro4 + 1;
	switch (z) {
		case true:
			document.getElementById("onom4").src = "assets/images/Tematica/Animales/Leon/L-Ono-7.png";
        z = false;
			break;
		case false:
			document.getElementById("onom4").src = "assets/images/Tematica/Animales/Leon/L-Ono-8.png";
        z = true;
			break;
	}
}


// Finalizar
function OnomFin() {
var sig = document.getElementById('siguiente');

	if (cuadro1>0 && cuadro2>0 && cuadro3>0 && cuadro4>0){
		sig.style.display = 'block';
		FinalMsj();
		playBeHappy();
		playBienHecho();
		}
	}

	function FinalMsj() {
	    document.getElementById("cartel").className = "bien hecho";
			document.getElementById("campo").className = "row fondo osc";
			document.getElementById("onom1").className = "fondo osc";
			document.getElementById("onom2").className = "fondo osc";
			document.getElementById("onom3").className = "fondo osc";
			document.getElementById("onom4").className = "fondo osc";
	}
