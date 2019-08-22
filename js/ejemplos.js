$( document ).ready(function() {

	console.log("document ready");

 	$('#enviar').on('click', function(event) {

		event.preventDefault();

		//objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
		var obj = {};
		obj.nombre = document.getElementById('nombre_usuario').value;
		obj.apellido = document.getElementById('ape_usuario').value;
		obj.direccion = document.getElementById('direccion_usuario').value;

		// convertimos el objeto a formato JSON
		var parametros = JSON.stringify(obj);

		console.log("URL del js es: " + document.URL)

		console.log("grabar parametros" + parametros);

		$.post('./php/grabar.php', "x=" + parametros,
	                function (data, status, xhr) {
	                   	if ( console && console.log ) {
					        console.log( "La solicitud se ha completado correctamente." );
					        
					        document.getElementById('nombre_usuario').value = '';
							document.getElementById('ape_usuario').value = '';
							document.getElementById('direccion_usuario').value = '';
							leer();
					    }
	                }
	            );
	});
});
