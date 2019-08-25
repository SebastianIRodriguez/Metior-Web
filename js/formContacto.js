function enviarFormContacto() {

    //objeto nuevo al que cargamos los datos que el usuario puso en los inputs a los que identificamos por su ID
    var obj = {};
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
    );
}