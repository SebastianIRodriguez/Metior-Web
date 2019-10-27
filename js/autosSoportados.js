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

			container.id=element.id

			container.css(styles.containerSingleList)

			div.append(container)

			let barra = $('.navBarVehiculos')

			let boton = $(document.createElement("button"))

			boton.text(element.title)

			boton.click(() =>{
  					$('html, body').animate(
	    					{
	      					scrollTop: container.offset().top,
   						},1000)
			}) 

			boton.addClass("mdc-button")
	
			boton.css(styles.navItem)

			barra.append(boton)
		})

		
	});
}


let styles = {
  containerSingleList: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#303030',
    borderRadius: '12px',
	marginLeft: "10px",
	marginRight: "10px",
	marginTop: '0px',
	marginBottom: '30px',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.25)'
  },
  navItem: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#303030',
    borderRadius: '12px',
    margin: "10px",
    color: '#AAAAAA'
  }
}
