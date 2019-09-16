function enviarFormContacto() {

    //objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
    /*var obj = {};
    obj.nombre = document.getElementById('nombre_usuario').value;
    obj.apellido = document.getElementById('ape_usuario').value;
    obj.direccion = document.getElementById('direccion_usuario').value;

    // convertimos el objeto a formato JSON
    var parametros = JSON.stringify(obj);

    $.post('./php/grabar.php', "x=" + parametros,
        function(data, status, xhr) {


            document.getElementById('nombre_usuario').value = '';
            document.getElementById('ape_usuario').value = '';
            document.getElementById('direccion_usuario').value = '';

        }
    );*/
}

function enviarFormulario() {
    var obj = {};
    obj.nombre = document.getElementById('firstName').value;
    obj.apellido = document.getElementById('lastName').value;
    obj.email = document.getElementById('email').value;
    obj.direccion = document.getElementById('address').value;
    obj.pais = document.getElementById('country').value;
    obj.provincia = document.getElementById('state').value;
    obj.cod_post = document.getElementById('zip').value;

    // convertimos el objeto a formato JSON
    var parametros = JSON.stringify(obj);

    //parametros = '{"nombre":"Seba","apellido":"R","email":"seba.rodriguez.994@gmail.com","direccion":"4","pais":"Argentina","provincia":"California","cod_post":"646"}'

    console.log('parametros' + parametros)

    $.post('./php/grabar.php', "x=" + parametros,
        function(data, status, xhr) {

            console.log('Resultado de enviar formulario: ' + status)
            /*document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';*/

        }
    );
}