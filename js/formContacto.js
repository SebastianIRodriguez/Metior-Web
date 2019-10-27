function enviarFormContacto() {

    //objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
    let obj = {
        nombre: document.getElementById('nombre_usuario').value,
        apellido: document.getElementById('ape_usuario').value,
        mail: document.getElementById('direccion_usuario').value,
        mensaje: "Hola amiguito"
    }

    // convertimos el objeto a formato JSON
    let parametros = JSON.stringify(obj);

    $.post('./php/mail.php', "x=" + parametros,
        function(data, status, xhr) {
            console.log(data)

            document.getElementById('nombre_usuario').value = '';
            document.getElementById('ape_usuario').value = '';
            document.getElementById('direccion_usuario').value = '';

        }
    );
}

function enviarFormulario() {
    let obj = {
        nombre: document.getElementById('firstName').value,
        apellido: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('address').value,
        pais: document.getElementById('country').value,
        provincia: document.getElementById('state').value,
        cod_post: document.getElementById('zip').value
    }

    // convertimos el objeto a formato JSON
    let parametros = JSON.stringify(obj);

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