function printListadoVehiculos() {

	let div = $("#listaVehiculos")

	listado.forEach( function(element, index) {

		let container = $(document.createElement("div"))

		container.load("listadoPorMarcaTemplate.html", () => {
			container.find("#title").text(element.title)

			if(element.logo != ""){
				container.find("#image").attr('src', "./img/" + element.logo)
			}

			let vehiculos = container.children("#listaContainer")

			element.modelos.forEach( function(element, index) {
				let modelo = $(document.createElement("p"))
				modelo.text(element)

				vehiculos.append(modelo)
			});

			container.css(styles.containerSingleList)

			div.append(container)
		})

		
	});
}


let styles = {
  containerSingleList: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#303030',
    borderRadius: '12px',
    margin: "10px"
  }
}