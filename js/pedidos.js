function loadListaPedidos() {

    $.get("./php/getPedidos.php", function(data) {

        var pedidos = JSON.parse(data)

        var container = document.getElementById('responsecontainer')
        for (var pedido of pedidos) {
            var para = document.createElement("p")
            var node = document.createTextNode(pedido)
            para.appendChild(node)
            para.setAttribute("class", "text-light")

            container.appendChild(para)
        }

    });
}