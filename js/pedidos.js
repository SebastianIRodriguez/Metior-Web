function loadListaPedidos() {

    $.get("./php/getPedidos.php", function(data) {

        var pedidos = JSON.parse(data)

        var container = document.getElementById('responsecontainer')

        var id = document.createElement("div")
        id.setAttribute("class", "text-light flex-center")
        id.setAttribute("style","width:5%;border-style: solid;border-width: 1px;")
        id.innerHTML = "ID"

        var cant = document.createElement("div")
        cant.setAttribute("class", "text-light flex-center")
        cant.setAttribute("style","width:5%;border-style: solid;border-width: 1px;")
        cant.innerHTML = "Cant."

        var nombre = document.createElement("div")
        nombre.setAttribute("class", "text-light flex-center")
        nombre.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
        nombre.innerHTML = "Nombre"

        var apellido = document.createElement("div")
        apellido.setAttribute("class", "text-light flex-center")
        apellido.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
        apellido.innerHTML = "Apellido"

        var direccion = document.createElement("div")
        direccion.setAttribute("class", "text-light flex-center")
        direccion.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
        direccion.innerHTML = "Direccion"

        var guia = document.createElement("div")
        guia.setAttribute("style","display:flex;flex-direction:row;width:100%")

        guia.appendChild(id)
        guia.appendChild(cant)
        guia.appendChild(nombre)
        guia.appendChild(apellido)
        guia.appendChild(direccion)

        container.appendChild(guia)

        for (var pedido of pedidos) {

            var id = document.createElement("div")
            id.setAttribute("class", "text-light flex-center")
            id.setAttribute("style","width:5%;border-style: solid;border-width: 1px;")
            id.innerHTML = pedido.orden

            var cant = document.createElement("div")
            cant.setAttribute("class", "text-light flex-center")
            cant.setAttribute("style","width:5%;border-style: solid;border-width: 1px;")
            cant.innerHTML = pedido.cant

            var nombre = document.createElement("div")
            nombre.setAttribute("class", "text-light flex-center")
            nombre.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
            nombre.innerHTML = pedido.nombre

            var apellido = document.createElement("div")
            apellido.setAttribute("class", "text-light flex-center")
            apellido.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
            apellido.innerHTML = pedido.apellido

            var direccion = document.createElement("div")
            direccion.setAttribute("class", "text-light flex-center")
            direccion.setAttribute("style","width:30%;border-style: solid;border-width: 1px;")
            direccion.innerHTML = pedido.direccion

            var para = document.createElement("div")
            para.css(styles)

            para.appendChild(id)
            para.appendChild(cant)
            para.appendChild(nombre)
            para.appendChild(apellido)
            para.appendChild(direccion)

            container.appendChild(para)
        }

    });
}

let styles = {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#303030',
    borderRadius: '12px',
	marginLeft: "30px",
	marginRight: "30px",
	marginTop: '0px',
	marginBottom: '30px',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.25)'
  }
