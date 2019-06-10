function grabar () {
//objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
	var obj = {};
	obj.nombre = document.getElementById('nombre_usuario').value;
	obj.apellido = document.getElementById('ape_usuario').value;
	obj.direccion = document.getElementById('direccion_usuario').value

// convertimos el objeto a formato JSON
	var parametros = JSON.stringify(obj);

// creamos un objeto XMLRequest
	var xmlhttp = new XMLHttpRequest();

// Una funcion para ejecutar SI TODO SALIO BIEN, es decir, si se pudo grabar en el servidor. OJO que se ejecuta DESPUES de grabar 
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('nombre_usuario').value = '';
			document.getElementById('ape_usuario').value = '';
			document.getElementById('direccion_usuario').value = '';
			leer();
		}
	};
// Que hacer el usuario manda a grabar
	xmlhttp.open("POST", "grabar.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("x=" + parametros); 
}

function leer () {
}
