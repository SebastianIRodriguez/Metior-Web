var listado = [
	{
		"title": "Chery",
		"logo": "chery.jpg",
		"modelos": ["Chery QQ3 y QQ6 (372 - 472) ECU Magnetti Marelli IAW 4AC"]
	},
	{
		"title": "Fiat - Alfa Romeo",
		"logo": "fiat.jpg",
		"modelos": [
			"Uno, Fiorino 1.5L - Palio, Siena, Strada 1.3/1.5/1.6L - IAW 1G7",
			"Palio, Siena, Marea 1.6L 16V - IAW 1AB-1AF",
			"Palio, Siena, Marea - IAW 49F",
			"Uno, Palio, Siena, Marea - IAW 4AF, 4EF, 5AF, 59F",
			"Palio, Siena - IAW 5NF (Beta)",
			"Palio, Siena, Marea - Bosch Motronic ME7.3H4 (Beta)",
			"Brava, Marea, Lancia 1.8L - Hitachi MPI (Beta)",
			"Alfa TS145, TS146, TS156, TSGTV - Fiat Elba Bosch Motronic 1.5.5",
			"Palio, Siena 1.3 16V - Bosch ME7.9.6",
			"Palio, Siena, Strada 1.4/1.8L - IAW 4SF - 4SG - 4DF",
			"Palio 1.8R 8V - Delphi MT27E",
			"Tipo 1.4L - Bosch MA1.7.3",
			"Palio Essence 1.6L 16V con ECU MM 7GF",
		]
	},
	{
		"title": "Ford",
		"logo": "ford.jpg",
		"modelos": [
			"Escort (97-2003) / Mondeo (94-95) Motor Zetec (1.8/2.0) 16V con EECIV",
			"Ka, Fiesta, Mondeo (OBDII) con EEC V PWM (96-2003)",
			"K 1.6L (OBDII)",
			"Fiesta 1.3L Endura Mod 1998 (OBDII)",
			"Mondeo V6 Duratec 2.5L Mod 1997 (OBDII)",
			"Ranger 2.3L Mod 1996 Twin Spark (OBDII)",
			"Courier 1.8L D motor Endura (OBDII)",
			"Escape Mod 2001 (OBDII)",
			"Econoline 4.2L V6 Mod 2002 Naftera (OBDII)"
		]
	},
	{
		"title": "General Motors",
		"logo": "gm.jpg",
		"modelos": [
			"Corsa Classic 1.6 8V (94 - 2008) - Blazer 2.2 DLX (95-97)",
			"Corsa Classic (GLS) 1.6 16V (97 - 99)",
			"Corsa Classic 1.4 (2009 - 2012) - Prisma, Astra 2.0 Mariposa Electrónica",
			"Corsa II - Meriva 1.8",
			"Celta 1.0L con ECU Multec H C10NE",
			"Astra 1.8/2.0 8V - Zafira 2.0 con Motronic 1.5.5",
			"Susuki",
			"Aveo",
			"Vectra TD 2.0L (98)",
			"Suzuki Grand Vitara 2.0L Common Rail con ECU EDC15C2",
			"S10 - Blazer 2.8L Common Rail con ECU EDC16C9"
		]
	},
	{
		"title": "Mercedes Benz",
		"logo": "mercedes.jpg",
		"modelos": [
			"Sprinter 2.7/3.0L CDI2 con ECU Bosch EDC15C5",
		]
	},
	{
		"title": "Peugeot - Citröen",
		"logo": "peugeot.jpg",
		"modelos": [
			"Peugeot 106 1.3L, 306 1.6/1.8L, 405 1.6/1.8/2.0L - Citröen Xantía 1.6/1.8/2.0L, Xsara 1.8L - ECU MM 8P",
			"307, 407, 408 2.0L 16V - Citröen C4 2.0 16V (Caja Manual y Automática) - ECU MM 6LP",
			"106, 205, 206, 306 1.4/1.6L, Partner 1.4/1.8L - Citröen Saxo, Xsara 1.4L, Berlingo - ECU MM 1AP",
			"106, 206, 307, Partner - Citröen C3, Xsara, Berlingo, Picasso 1.6L 16V - ECU Bosch ME7.4.4(Genérico)",
			"206, 207, 307, Partner - Citröen C3 1.4L 8V / 1.6L 16V Flex - ECU Bosch ME7.4.4(7.4.5)(7.4.9)",
			"206 1.6L 8V - Citröen - ECU Bosch MP7.2 (Ver Captura)",
			"306 1.4L, 306 1.8L 16V, Partner 1.4L - Citröen Saxo, Xsara 1.8L 16V - ECU Sagem SL96 (Beta)",
			"106 1.3L, 206, 306, 307, Partner 1.4L - Citröen C3, Berlingo 1.4L - ECU Sagem S2000",
			"206 Common Rail",
			"205, 206, Partner - Citröen Berlingo 1.9D - ECU Lucas DCN2",
			"307 HDI -Citröen HDI - ECU Bosch EDC15C2",
			"307 2.0L HDI - Citröen Berlingo, C4, C5, Picasso, Xsara2 2.0L HDI, C5 2.2L HDI- Siemens SID801-803"
		]
	},
	{
		"title": "Renault",
		"logo": "renault.jpg",
		"modelos": [
			"Megane I, Laguna, Scenic con Fenix 5.1",
			"Clío, Megane, Kangoo, Scenic, Twingo, Symbol, Sandero con Sirius 32 - EMS 3132",
			"Megane, Kangoo, Laguna con Sirius 34 - EMS 3134",
			"Clío 1.2 16V con IAW 5NR",
			"Clío II 1.0/1.2 16V con SIM32",
			"Clío - R19 - Express 1.6 con Bosch Motronic MA1.7 (Beta)",
			"Clío - R19 1.6 con Magneti Marelli MM G8",
			"Kangoo 1.9D con DCU3R (Beta)",
			"Megane, Laguna, Scenic 1.9 DTi con MSA15",
			"Kangoo, Traffic, Scenic, Megane, Clío 1.9D con ECU DPCN",
			"Master 1.9L/2.2L/2.5L DCI con ECU Bosch EDC15C",
			"Clio II, Kangoo y Scenic 1.5L DCI (common-rail) con ECU Delphi DDCR>"
		]
	},
	{
		"title": "Rover",
		"logo": "rover.jpg",
		"modelos": [
			"100 - 200 - 400 con ECU Mems 1.9",
		]
	},
	{
		"title": "Toyota",
		"logo": "toyota.png",
		"modelos": [
			"Hilux (D-4D) 2.5 2KD - 3.0 1KD (Ver Captura)",
			"Corolla 1.6L 2006 con ECU Denso"
		]
	},
	{
		"title": "Volkswagen",
		"logo": "vw.jpg",
		"modelos": [
			"VW Genérico 1 (Gol-Polo ECU Bosch MP9.0 - MM1AVP - MM1AVB, Bora TDI)",
			"VW Genérico 2 (Crossfox-Suran-Golf 1.6 ME7.5.10)",
			"VW Genérico 3 (Gol-Trend-Suran-Fox-Voyage 1.6 ME7.5.30 - Gol Power MM 4GV - Bora 2.0 Vento 2.5 2009 ME7.1.1)",
			"Polo 1.9D (98-99) - Caddy 1.9D SaugDiesel"
		]
	},
	{
		"title": "Modelos OBDII Compatibles",
		"image": "",
		"modelos": [
			"OBDII 5 baudios (Honda Fit, Gol Trend, MB Sprinter, Chrysler, etc)",
			"OBDII Fast Ini (Peugeot 408, Clio DCI, Fiat 4DF, etc)",
			"Neon 1.8 - 2.0",
			"Dakota 2.5"
		]
	},
]