function grabar () {

	
	//objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
	var obj = {};
	obj.nombre = document.getElementById('nombre_usuario').value;
	obj.apellido = document.getElementById('ape_usuario').value;
	obj.direccion = document.getElementById('direccion_usuario').value;

	// convertimos el objeto a formato JSON
	var parametros = JSON.stringify(obj);

	console.log("grabar parametros" + parametros);

	$.ajax({
	    // En data puedes utilizar un objeto JSON, un array o un query string
	    data: "x=" + parametros,
	    //Cambiar a type: POST si necesario
	    method: "post",
	    // Formato de datos que se espera en la respuesta
	    dataType: "json",
	    // URL a la que se enviará la solicitud Ajax
	    url: "grabar.php",
	})
	.done(function( data, textStatus, jqXHR ) {
	     if ( console && console.log ) {
	        console.log( "La solicitud se ha completado correctamente." );
	        
	        document.getElementById('nombre_usuario').value = '';
			document.getElementById('ape_usuario').value = '';
			document.getElementById('direccion_usuario').value = '';
			leer();
	     }
	})
	.fail(function( jqXHR, textStatus, errorThrown ) {
	     if ( console && console.log ) {
	         console.log( "La solicitud a fallado: " +  textStatus + " " + errorThrown);
	     }
	});
}

function leer () {
}
