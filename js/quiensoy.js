define(function (require) {
    return [
    {
    	'img' : [
    		'../img/quien-soy/ejercicio1/maria.png',
            '../img/quien-soy/ejercicio1/luisa.png',
    		'../img/quien-soy/ejercicio1/ines.png',
			'../img/quien-soy/ejercicio1/paula.png',
			'../img/quien-soy/ejercicio1/ana.png',
            '../img/quien-soy/ejercicio1/raquel.png'
		],
		'pista' : [
			'1). Inés usa gafas.',
			'2). Luisa y María llevan reloj.',
			'3). Paula, Inés y Ana llevan collar.',
            '4). Paula y María llevan Sombrero.',
            '5). Raquel, Luisa e Inés llevan mochila',
            '6). Raquel, Paula, María, Ana llevan teléfono.'
		],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/reloj.png', 'reloj'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/sombrero.png', 'sombrero'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Inés', 'gafas', 'collar', 'mochila'],
			['Luisa', 'reloj', 'mochila'],
			['Paula', 'collar', 'sombrero', 'teléfono'],
            ['María', 'reloj', 'sombrero', 'teléfono'],
            ['Raquel', 'mochila', 'teléfono'],
            ['Ana', 'collar', 'teléfono']
        ]
	},
	{
		'img' : [
            '../img/quien-soy/ejercicio2/juan.png',
			'../img/quien-soy/ejercicio2/ana.png',
			'../img/quien-soy/ejercicio2/antonio.png',
            '../img/quien-soy/ejercicio2/luisa.png',
            '../img/quien-soy/ejercicio2/david.png',
            '../img/quien-soy/ejercicio2/jose.png'
		],
		'pista' : [
			'1). Ana, David y Juan cantan.',
	 		'2). Ana toma fotografías.',
	 		'3). David, José y Antonio tocan la guitarra.',
            '4). Juan y José montan en bicicleta.',
            '5). David, Luisa y Antonio tocan el piano.',
            '6). Luisa, Juan, José y Antonio juegan videojuegos.'
		],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'micrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego']

        ],
        'nombres' : [
            ['Ana', 'micrófono', 'cámara'],
			['David', 'micrófono', 'guitarra', 'piano'],
			['Juan', 'bicicleta', 'micrófono', 'videojuego'],
            ['José', 'guitarra', 'bicicleta', 'videojuego'],
            ['Luisa', 'piano', 'videojuego'],
            ['Antonio', 'guitarra', 'piano', 'videojuego']
        ]
	},
    {
        'img' : [
            '../img/quien-soy/ejercicio3/jose.png',
            '../img/quien-soy/ejercicio3/maria.png',
            '../img/quien-soy/ejercicio3/ana.png',
            '../img/quien-soy/ejercicio3/javier.png',
            '../img/quien-soy/ejercicio3/gabriela.png',
            '../img/quien-soy/ejercicio3/paula.png'
    	],
        'pista' : [
            '1). Gabriela, María, José y Javier cantan.',
            '2). Gabriela toma fotografías.',
            '3). María toca la guitarra.',
            '4). José monta en bicicleta.',
            '5). María, Ana y Javier tocan el piano.',
            '6). Paula juega videojuegos.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'micrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego']
        ],
        'nombres' : [
            ['Gabriela', 'micrófono', 'cámara'],
    		['María', 'micrófono', 'guitarra', 'piano'],
    		['José', 'micrófono', 'bicicleta'],
            ['Ana', 'piano'],
            ['Javier', 'piano', 'micrófono'],
            ['Paula', 'videojuego']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio4/maria.png',
            '../img/quien-soy/ejercicio4/david.png',
            '../img/quien-soy/ejercicio4/lorena.png',
            '../img/quien-soy/ejercicio4/paula.png',
            '../img/quien-soy/ejercicio4/isabel.png',
            '../img/quien-soy/ejercicio4/ricardo.png'
    	],
        'pista' : [
            '1). María, David, Lorena y Paula comen mangos.',
            '2). María come manzana.',
            '3). Isabel come melocotones.',
            '4). Ricardo, María, David, Isabel y Paula comen sandía.',
            '5). Ricardo, Lorena e Isabel comen bananos.',
            '6). David come uvas.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/mango.png', 'mango'],
            ['../img/deduccion/alimentos/manzana.png', 'manzana'],
            ['../img/deduccion/alimentos/melocoton.png', 'melocotón'],
            ['../img/deduccion/alimentos/sandia.png', 'sandia'],
            ['../img/deduccion/alimentos/banano.png', 'bananos'],
            ['../img/deduccion/alimentos/uva.png', 'uvas']
        ],
        'nombres' : [
            ['Maria', 'mango', 'manzana','sandia'],
    		['David', 'mango', 'sandia', 'uvas'],
    		['Lorena', 'mango', 'bananos'],
            ['Paula', 'mango', 'sandia'],
            ['Isabel', 'melocotón', 'sandia', 'bananos'],
            ['Ricardo', 'sandia', 'bananos']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio5/david.png',
            '../img/quien-soy/ejercicio5/teresa.png',
            '../img/quien-soy/ejercicio5/isabel.png',
            '../img/quien-soy/ejercicio5/ricardo.png',
            '../img/quien-soy/ejercicio5/raquel.png',
            '../img/quien-soy/ejercicio5/ines.png'
    	],
        'pista' : [
            '1). Inés, Teresa, Isabel y Ricardo juegan baloncesto.',
            '2). Raquel juega ajedrez.',
            '3). David, Inés y Teresa juegan fútbol.',
            '4). Raquel y David juegan fútbol americano.',
            '5). Inés y Ricardo juegan tenis.',
            '6). Raquel, David, Isabel y Ricardo juegan al voleibol.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/baloncesto.png', 'baloncesto'],
            ['../img/deduccion/objetos/ajedrez.png', 'ajedrez'],
            ['../img/deduccion/objetos/futbol.png', 'fútbol'],
            ['../img/deduccion/objetos/futbol-americano.png', 'fútbol-americano'],
            ['../img/deduccion/objetos/tenis.png', 'tenis'],
            ['../img/deduccion/objetos/voleibol.png', 'voleibol']
        ],
        'nombres' : [
            ['Inés', 'baloncesto', 'fútbol','tenis'],
    		['Teresa', 'baloncesto', 'fútbol'],
    		['Isabel', 'baloncesto', 'voleibol'],
            ['Ricardo', 'baloncesto', 'tenis','voleibol'],
            ['Raquel', 'ajedrez','fútbol-americano', 'voleibol'],
            ['David', 'fútbol', 'fútbol-americano','voleibol']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio6/pedro.png',
            '../img/quien-soy/ejercicio6/ana.png',
            '../img/quien-soy/ejercicio6/lorena.png',
            '../img/quien-soy/ejercicio6/raquel.png',
            '../img/quien-soy/ejercicio6/ricardo.png',
            '../img/quien-soy/ejercicio6/antonio.png'
    	],
        'pista' : [
            '1). Ana y Raquel cantan.',
            '2). Ricardo y Ana toman fotografía.',
            '3). Antonio y Lorena tocan la guitarra.',
            '4). Antonio, Raquel y Pedro tienen carro.',
            '5). Antonio, Ricardo, Ana, Raquel y Pedro juegan videojuegos.',
            '6). Lorena toca la flauta.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'micrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/carro.png', 'carro'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego'],
            ['../img/deduccion/objetos/flauta.png', 'flauta']
        ],
        'nombres' : [
            ['Ana', 'micrófono', 'cámara','videojuego'],
    		['Raquel', 'micrófono', 'carro','videojuego'],
    		['Ricardo', 'cámara','videojuego'],
            ['Antonio', 'guitarra', 'carro', 'videojuego'],
            ['Lorena', 'guitarra', 'flauta'],
            ['Pedro', 'carro', 'videojuego']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio7/jorge.png',
            '../img/quien-soy/ejercicio7/pedro.png',
            '../img/quien-soy/ejercicio7/ana.png',
            '../img/quien-soy/ejercicio7/teresa.png',
            '../img/quien-soy/ejercicio7/luisa.png',
            '../img/quien-soy/ejercicio7/raquel.png'
    	],
        'pista' : [
            '1). Jorge canta.',
            '2). Luisa toma fotografías.',
            '3). Raquel toca la guitarra.',
            '4). Raquel, Luisa, Teresa, Ana y Pedro tienen carro.',
            '5). Jorge y Teresa tocan el piano.',
            '6). Ana y Teresa juegan videojuegos.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'micrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/carro.png', 'carro'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego']
        ],
        'nombres' : [
            ['Jorge', 'micrófono', 'piano'],
    		['Luisa', 'cámara', 'carro'],
    		['Raquel', 'guitarra','carro'],
            ['Teresa', 'carro', 'piano', 'videojuego'],
            ['Ana', 'carro','videojuego'],
            ['Pedro', 'carro']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio8/jorge.svg',
            '../img/quien-soy/ejercicio8/pedro.svg',
            '../img/quien-soy/ejercicio8/ana.svg',
            '../img/quien-soy/ejercicio8/cristina.svg',
            '../img/quien-soy/ejercicio8/jose.svg',
            '../img/quien-soy/ejercicio8/raquel.svg'
    	],
        'pista' : [
            '1). Jorge y Raquel comen tomate.',
            '2). Cristina y Raquel comen pepino.',
            '3). Jorge, José y Cristina comen brócoli.',
            '4). Ana y Jorge comen zanahoria.',
            '5). José y Ana comen remolacha.',
            '6). Pedro y José comen lechuga.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/tomate.png', 'tomate'],
            ['../img/deduccion/alimentos/pepino.png', 'pepino'],
            ['../img/deduccion/alimentos/brocoli.png', 'brócoli'],
            ['../img/deduccion/alimentos/zanahoria.png', 'zanahoria'],
            ['../img/deduccion/alimentos/remolacha.png', 'remolacha'],
            ['../img/deduccion/alimentos/lechuga.png', 'lechuga']
        ],
        'nombres' : [
            ['Jorge', 'tomate', 'brócoli','zanahoria'],
    		['Raquel', 'tomate', 'pepino'],
    		['Cristina', 'pepino','brócoli'],
            ['José', 'brócoli', 'remolacha', 'lechuga'],
            ['Ana', 'zanahoria','remolacha'],
            ['Pedro', 'lechuga']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio9/jorge.png',
            '../img/quien-soy/ejercicio9/raquel.png',
            '../img/quien-soy/ejercicio9/pedro.png',
            '../img/quien-soy/ejercicio9/ruth.png',
            '../img/quien-soy/ejercicio9/jose.png',
            '../img/quien-soy/ejercicio9/paula.png'
    	],
        'pista' : [
            '1). Jorge y Raquel beben café.',
            '2). Ruth y Raquel beben leche.',
            '3). Jorge, José y Pedro beben refresco.',
            '4). Ruth y Pedro beben yogurt.',
            '5). José y Paula beben sopa.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/cafe.png', 'café'],
            ['../img/deduccion/alimentos/leche.png', 'leche'],
            ['../img/deduccion/alimentos/refresco.png', 'refresco'],
            ['../img/deduccion/alimentos/yogurt.png', 'yogurt'],
            ['../img/deduccion/alimentos/sopa.png', 'sopa']
        ],
        'nombres' : [
            ['Jorge', 'café', 'refresco'],
    		['Raquel', 'café', 'leche'],
    		['Ruth', 'leche','yogurt'],
            ['José', 'refresco', 'sopa'],
            ['Pedro', 'refresco','yogurt'],
            ['Paula', 'sopa']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio10/lorena.png',
            '../img/quien-soy/ejercicio10/teresa.png',
            '../img/quien-soy/ejercicio10/isabel.png',
            '../img/quien-soy/ejercicio10/ana.png',
            '../img/quien-soy/ejercicio10/maria.png',
            '../img/quien-soy/ejercicio10/raquel.png'
    	],
        'pista' : [
            '1). Lorena, Ana y María usan gafas.',
            '2). Lorena, Raquel e Isabel llevan reloj.',
            '3). María lleva collar.',
            '4). Teresa lleva sombrero.',
            '5). Ana e Isabel llevan mochila.',
            '6). Lorena, Teresa y Ana llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/reloj.png', 'reloj'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/sombrero.png', 'sombrero'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Lorena', 'gafas', 'reloj', 'teléfono'],
    		['Ana', 'gafas', 'mochila', 'teléfono'],
    		['Maria', 'gafas','collar'],
            ['Raquel', 'reloj'],
            ['Isabel', 'reloj','mochila'],
            ['Teresa', 'sombrero', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio11/david.png',
            '../img/quien-soy/ejercicio11/ricardo.png',
            '../img/quien-soy/ejercicio11/pedro.png',
            '../img/quien-soy/ejercicio11/jorge.png',
            '../img/quien-soy/ejercicio11/javier.png',
            '../img/quien-soy/ejercicio11/juan.png'
    	],
        'pista' : [
            '1). David, Javier y Juan tienen el pelo amarillo.',
            '2). Ricardo tiene ojos azules.',
            '3). Jorge, David y Javier tienen gafas.',
            '4). Ricardo, David y Pedro llevan gorras.',
            '5). Jorge y Pedro llevan mochila.',
            '6). Ricardo, Jorge, Javier y Juan llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/cabello.png', 'cabello'],
            ['../img/deduccion/objetos/ojos.png', 'ojos'],
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/gorra.png', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['David', 'cabello', 'gafas', 'gorra'],
    		['Javier', 'cabello', 'gafas', 'teléfono'],
    		['Juan', 'cabello','teléfono'],
            ['Ricardo', 'ojos','teléfono','gorra'],
            ['Pedro', 'gorra','mochila'],
            ['Jorge', 'gafas', 'mochila','teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio12/maria.png',
            '../img/quien-soy/ejercicio12/david.png',
            '../img/quien-soy/ejercicio12/antonio.png',
            '../img/quien-soy/ejercicio12/gloria.png',
            '../img/quien-soy/ejercicio12/isabel.png',
            '../img/quien-soy/ejercicio12/paula.png'
    	],
        'pista' : [
            '1). María tiene una computadora.',
            '2). David tiene un teléfono.',
            '3). Antonio y Gloria tienen nintendo.',
            '4). Antonio, Isabel y Paula tienen cuaderno.',
            '5). David, Antonio, Isabel y Gloria tienen mochila.',
            '6). María e Isabel tienen lápiz.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/computadora.png', 'computadora'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono'],
            ['../img/deduccion/objetos/videojuego.png', 'nintendo'],
            ['../img/deduccion/objetos/cuaderno.png', 'cuaderno'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/lapiz.png', 'lápiz']
        ],
        'nombres' : [
            ['María', 'computadora', 'lápiz'],
    		['David', 'teléfono', 'mochila'],
    		['Antonio', 'nintendo','cuaderno','mochila'],
            ['Gloria', 'nintendo','mochila'],
            ['Isabel', 'cuaderno','mochila','lápiz'],
            ['Paula', 'cuaderno']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio13/ricardo.png',
            '../img/quien-soy/ejercicio13/antonio.png',
            '../img/quien-soy/ejercicio13/jorge.png',
            '../img/quien-soy/ejercicio13/juan.png',
            '../img/quien-soy/ejercicio13/daniel.png',
            '../img/quien-soy/ejercicio13/javier.png'
    	],
        'pista' : [
            '1). Juan y Antonio usan gafas.',
            '2). Jorge lleva corbata.',
            '3). Juan, Daniel, Javier y Ricardo llevan cinturón.',
            '4). Daniel lleva gorra.',
            '5). Juan y Daniel llevan mochila.',
            '6). Ricardo y Javier llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/corbata.png', 'corbata'],
            ['../img/deduccion/objetos/cinturon.png', 'cinturón'],
            ['../img/deduccion/objetos/gorra.png', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Juan', 'gafas', 'cinturón', 'mochila'],
    		['Antonio', 'gafas'],
    		['Jorge', 'corbata'],
            ['Daniel', 'gorra', 'cinturón', 'mochila'],
            ['Javier', 'cinturón','teléfono'],
            ['Ricardo', 'cinturón','teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio14/ana.png',
            '../img/quien-soy/ejercicio14/isabel.png',
            '../img/quien-soy/ejercicio14/lorena.png',
            '../img/quien-soy/ejercicio14/maria.png',
            '../img/quien-soy/ejercicio14/paula.png',
            '../img/quien-soy/ejercicio14/raquel.png'
    	],
        'pista' : [
            '1). María lee el periódico.',
            '2). Raquel escucha música.',
            '3). Raquel y Ana llevan collar.',
            '4). María, Paula, Ana e Isabel llevan un lazo en el cabello.',
            '5). María y Paula llevan mochila.',
            '6). Lorena lleva teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/periodico.png', 'periódico'],
            ['../img/deduccion/objetos/grabadora.png', 'música'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/lazo.png', 'lazo'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['María', 'periódico', 'lazo', 'mochila'],
    		['Raquel', 'música', 'collar'],
    		['Ana', 'collar', 'lazo'],
            ['Paula', 'lazo', 'mochila'],
            ['Isabel', 'lazo'],
            ['Lorena', 'teléfono']
        ]
    },

    {
        'img' : [
            '../img/quien-soy/ejercicio15/teresa.png',
            '../img/quien-soy/ejercicio15/gloria.png',
            '../img/quien-soy/ejercicio15/raquel.png',
            '../img/quien-soy/ejercicio15/ines.png',
            '../img/quien-soy/ejercicio15/ana.png',
            '../img/quien-soy/ejercicio15/paula.png'
    	],
        'pista' : [
            '1). Ana y Paula usan gafas.',
            '2). Raquel y Paula llevan pañuelo.',
            '3). Teresa e Inés llevan collar.',
            '4). Gloria, Ana, Raquel e Inés llevan gorra.',
            '5). Gloria e Inés llevan mochila.',
            '6). Gloria, Raquel y Paula llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/pañuelo.png', 'pañuelo'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/gorra.png', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Ana', 'gafas', 'gorra'],
    		    ['Paula', 'gafas', 'pañuelo','teléfono'],
    		    ['Raquel', 'pañuelo','gorra','teléfono'],
            ['Teresa', 'collar'],
            ['Inés', 'collar','gorra','mochila'],
            ['Gloria', 'gorra','mochila', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio16/isabel.png',
            '../img/quien-soy/ejercicio16/lorena.png',
            '../img/quien-soy/ejercicio16/david.png',
            '../img/quien-soy/ejercicio16/carlos.png',
            '../img/quien-soy/ejercicio16/ricardo.png',
            '../img/quien-soy/ejercicio16/antonio.png'
    	],
        'pista' : [
            '1). Isabel y Lorena cantan.',
            '2). Ricardo, Carlos y David toman fotografías.',
            '3). Lorena toca guitarra.',
            '4). Antonio, Ricardo, Isabel y David montan en bicicleta.',
            '5). Isabel, Lorena y David tocan el piano.',
            '6). Antonio, Ricardo y Carlos juegan videojuegos.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'micrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuegos']
        ],
        'nombres' : [
            ['Isabel', 'micrófono', 'bicicleta','piano'],
    		['Lorena', 'micrófono', 'guitarra','piano'],
    		['David', 'cámara','bicicleta','piano'],
            ['Carlos', 'cámara','videojuegos'],
            ['Ricardo', 'cámara','bicicleta','videojuegos'],
            ['Antonio', 'bicicleta','videojuegos']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio17/javier.png',
            '../img/quien-soy/ejercicio17/ricardo.png',
            '../img/quien-soy/ejercicio17/antonio.png',
            '../img/quien-soy/ejercicio17/paula.png',
            '../img/quien-soy/ejercicio17/david.png',
            '../img/quien-soy/ejercicio17/luis.png'
    	],
        'pista' : [
            '1). Javier, Antonio, David y Ricardo cantan.',
            '2). Javier, Paula y Luis tocan la guitarra.',
            '3). Antonio y Ricardo montan en bicicleta.',
            '4). Paula toca el piano.',
            '5). Paula, Ricardo y Luis juegan videojuegos.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.png', 'cantan'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuegos']
        ],
        'nombres' : [
            ['Javier', 'cantan', 'guitarra'],
            ['Antonio', 'cantan', 'bicicleta'],
            ['David', 'cantan'],
            ['Ricardo', 'cantan', 'bicicleta','videojuegos'],
            ['Paula', 'guitarra','piano','videojuegos'],
            ['Luis', 'guitarra','videojuegos']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio18/francisco.png',
            '../img/quien-soy/ejercicio18/jorge.png',
            '../img/quien-soy/ejercicio18/jose.png',
            '../img/quien-soy/ejercicio18/oscar.png',
            '../img/quien-soy/ejercicio18/ricardo.png',
            '../img/quien-soy/ejercicio18/antonio.png'
    	],
        'pista' : [
            '1). Francisco y Antonio usan gafas.',
            '2). Ricardo lleva corbata.',
            '3). Jorge, Jose y Antonio llevan pañuelos.',
            '4). Oscar lleva gorra.',
            '5). Jorge, Francisco y José llevan mochilas.',
            '6). Jorge y José llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/corbata.png', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.png', 'pañuelo'],
            ['../img/deduccion/objetos/gorra.png', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Francisco', 'gafas', 'mochila'],
    		    ['Antonio', 'gafas', 'pañuelo'],
    		    ['Ricardo', 'corbata'],
            ['Jorge', 'pañuelo', 'mochila','teléfono'],
            ['José', 'pañuelo','mochila','teléfono'],
            ['Oscar', 'gorra']
        ]
    },
        {
        'img' : [
            '../img/quien-soy/ejercicio19/fabiola.png',
            '../img/quien-soy/ejercicio19/alicia.png',
            '../img/quien-soy/ejercicio19/juan.png',
            '../img/quien-soy/ejercicio19/antonio.png',
            '../img/quien-soy/ejercicio19/javier.png',
            '../img/quien-soy/ejercicio19/alejandro.png'
    	],
        'pista' : [
            '1). Fabiola, Javier y Alejandro usan gafas.',
            '2). Fabiola y Alicia llevan corbata.',
            '3). Juan lleva pañuelo.',
            '4). Fabiola, Javier y Alejandro llevan gorra.',
            '5). Antonio y Alicia llevan mochila.',
            '6). Antonio, Juan, Alicia y Alejandro llevan teléfono. '
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/corbata.png', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.png', 'pañuelo'],
            ['../img/deduccion/objetos/gorra.png', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Fabiola', 'gafas', 'corbata','gorra'],
            ['Javier', 'gafas', 'gorra'],
            ['Alejandro', 'gafas', 'gorra', 'teléfono'],
            ['Alicia', 'corbata', 'mochila','teléfono'],
            ['Juan', 'pañuelo','teléfono'],
            ['Antonio', 'mochila','teléfono']
        ]
    },
            
    {
        'img' : [
            '../img/quien-soy/ejercicio20/alison.png',
            '../img/quien-soy/ejercicio20/raquel.png',
            '../img/quien-soy/ejercicio20/david.png',
            '../img/quien-soy/ejercicio20/isabel.png',
            '../img/quien-soy/ejercicio20/javier.png',
            '../img/quien-soy/ejercicio20/antonio.png'
    	],
        'pista' : [
            '1). Alisson, Antonio, Javier y David comen papaya.',
            '2). Javier y David comen piña.',
            '3). Alisson y Antonio comen bananos.',
            '4). Raquel y Javier comen manzana.',
            '5). Raquel, Isabel y David comen melón.',
            '6). Teresa, Raquel e Isabel comen naranja.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/papaya.png', 'papaya'],
            ['../img/deduccion/alimentos/piña.png', 'piña'],
            ['../img/deduccion/alimentos/banano.png', 'banano'],
            ['../img/deduccion/alimentos/manzana.png', 'manzana'],
            ['../img/deduccion/alimentos/melon.png', 'melón'],
            ['../img/deduccion/alimentos/naranja.png', 'naranja']
        ],
        'nombres' : [
            ['alison', 'papaya', 'banano'],
            ['antonio', 'papaya', 'banano'],
            ['javier', 'papaya', 'piña','manzana'],
            ['david', 'papaya', 'piña','melón'],
            ['raquel', 'manzana','melón','manzana'],
            ['isabel', 'melón','naranja']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio21/gabriela.png',
            '../img/quien-soy/ejercicio21/ana.png',
            '../img/quien-soy/ejercicio21/maria.png',
            '../img/quien-soy/ejercicio21/carolina.png',
            '../img/quien-soy/ejercicio21/pedro.png',
            '../img/quien-soy/ejercicio21/luis.png'
    	],
        'pista' : [
            '1). María, Gabriela y Ana juegan baloncesto.',
            '2). Luis juega al fútbol.',
            '3). Carolina y Gabriela juegan tenis.',
            '4). Pedro, Luis y Ana juegan fútbol americano.',
            '5). Ana juega voleibol.',
            '6). María y Pedro juegan ajedrez.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/baloncesto.png', 'baloncesto'],
            ['../img/deduccion/objetos/futbol.png', 'futbol'],
            ['../img/deduccion/objetos/tenis.png', 'tenis'],
            ['../img/deduccion/objetos/futbol-americano.png', 'futbol-americano'],
            ['../img/deduccion/objetos/voleibol.png', 'voleibol'],
            ['../img/deduccion/objetos/ajedrez.png', 'ajedrez']
        ],
        'nombres' : [
            ['María', 'baloncesto', 'ajedrez'],
            ['Gabriela', 'baloncesto', 'tenis'],
            ['Ana', 'baloncesto', 'futbol-americano','voleibol'],
            ['Luis', 'futbol', 'futbol-americano'],
            ['Carolina', 'tenis'],
            ['Pedro', 'futbol-americano','ajedrez']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio22/danna.png',
            '../img/quien-soy/ejercicio22/doris.png',
            '../img/quien-soy/ejercicio22/flor.png',
            '../img/quien-soy/ejercicio22/julio.png',
            '../img/quien-soy/ejercicio22/karina.png',
            '../img/quien-soy/ejercicio22/luis.png'
    	],
        'pista' : [
            '1). Karina, Flor y Julio usan gafas.',
            '2). Luis lleva corbata.',
            '3). Karina y Danna llevan un lazo en el cabello.',
            '4). Doris lleva una bufanda.',
            '5). Karina, Flor y Luis llevan una mochila.',
            '6). Flor lleva un pañuelo.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'lentes'],
            ['../img/deduccion/objetos/corbata.png', 'corbata'],
            ['../img/deduccion/objetos/lazo.png', 'lazo'],
            ['../img/deduccion/objetos/bufanda.png', 'bufanda'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/pañuelo.png', 'pañuelo']
        ],
        'nombres' : [
            ['karina', 'lentes', 'lazo','mochila'],
            ['flor', 'lentes', 'mochila','pañuelo'],
            ['julio', 'lentes'],
            ['luis', 'corbata', 'mochila'],
            ['danna', 'lazo'],
            ['doris', 'bufanda']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio23/alfredo.png',
            '../img/quien-soy/ejercicio23/fabiola.png',
            '../img/quien-soy/ejercicio23/javier.png',
            '../img/quien-soy/ejercicio23/luz.png',
            '../img/quien-soy/ejercicio23/nathalia.png',
            '../img/quien-soy/ejercicio23/pedro.png'
    	],
        'pista' : [
            '1). Luz, Natalia y Alfredo comen bananos.',
            '2). Javier y Pedro comen naranjas.',
            '3). Fabiola y Luz comen manzanas.',
            '4). Alfredo come papaya.',
            '5). Pedro y Natalia comen mango.',
            '6). Javier y Alfredo comen sandía.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/banano.svg', 'banano'],
            ['../img/deduccion/alimentos/naranja.svg', 'naranja'],
            ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
            ['../img/deduccion/alimentos/papaya.svg', 'papaya'],
            ['../img/deduccion/alimentos/mango.svg', 'mango'],
            ['../img/deduccion/alimentos/sandia.svg', 'sandia']
        ],
        'nombres' : [
            ['luz', 'banano', 'manzana'],
            ['nathalia', 'banano', 'mango'],
            ['alfredo', 'banano','papaya','sandia'],
            ['javier', 'naranja', 'sandia'],
            ['pedro', 'naranja','mango'],
            ['fabiola', 'manzana']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio24/ana.png',
            '../img/quien-soy/ejercicio24/francisco.png',
            '../img/quien-soy/ejercicio24/isabel.png',
            '../img/quien-soy/ejercicio24/maria.png',
            '../img/quien-soy/ejercicio24/raquel.png',
            '../img/quien-soy/ejercicio24/sonia.png'
    	],
        'pista' : [
            '1). Francisco lee el periódico.',
            '2). Sonia y Francisco escucha música.',
            '3). Raquel lleva collar.',
            '4). María, Ana e Isabel llevan un lazo en el cabello.',
            '5). María e Isabel llevan mochila.',
            '6). Isabel y Ana lleva teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/periodico.png', 'periodico'],
            ['../img/deduccion/objetos/grabadora.png', 'grabadora'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/lazo.png', 'lazo'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'telefono']
        ],
        'nombres' : [
            ['francisco', 'periodico', 'grabadora'],
            ['sonia', 'grabadora'],
            ['raquel', 'collar'],
            ['maria', 'lazo', 'mochila'],
            ['ana', 'lazo','telefono'],
            ['isabel', 'lazo','mochila','telefono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio25/ana.png',
            '../img/quien-soy/ejercicio25/david.png',
            '../img/quien-soy/ejercicio25/isabel.png',
            '../img/quien-soy/ejercicio25/gloria.png',
            '../img/quien-soy/ejercicio25/paula.png',
            '../img/quien-soy/ejercicio25/enrique.png'
    	],
        'pista' : [
            '1). Enrique tiene una computadora.',
            '2). Ana tiene un teléfono.',
            '3). David y Gloria tienen un nintendo.',
            '4). Isabel y Paula tienen cuaderno.',
            '5). Enrique, Ana, David e Isabel tienen mochila.',
            '6). Gloria y Enrique tienen lápiz.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/computadora.svg', 'computadora'],
            ['../img/deduccion/objetos/telefono.svg', 'telefono'],
            ['../img/deduccion/objetos/videojuego.svg', 'videojuego'],
            ['../img/deduccion/objetos/cuaderno.svg', 'cuaderno'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila'],
            ['../img/deduccion/objetos/lapiz.svg', 'lapiz']
        ],
        'nombres' : [
            ['enrique', 'computadora','mochila','lapiz'],
            ['ana', 'telefono','mochila'],
            ['david', 'videojuego','mochila'],
            ['gloria', 'videojuego', 'lapiz'],
            ['isabel', 'cuaderno','mochila'],
            ['paula', 'cuaderno']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio26/alicia.svg',
            '../img/quien-soy/ejercicio26/alison.svg',
            '../img/quien-soy/ejercicio26/david.svg',
            '../img/quien-soy/ejercicio26/jorge.svg',
            '../img/quien-soy/ejercicio26/luis.svg',
            '../img/quien-soy/ejercicio26/martha.svg'
    	],
        'pista' : [
            '1). Alisson come piña.',
            '2). Luis y David comen papaya.',
            '3). Alicia, Jorge y Martha comen banano.',
            '4). Alisson, David y comen manzana.',
            '5). Luis, Martha y Alicia comen melón.',
            '6). Alicia come naranja.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/piña.svg', 'piña'],
            ['../img/deduccion/alimentos/papaya.svg', 'papaya'],
            ['../img/deduccion/alimentos/banano.svg', 'banano'],
            ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
            ['../img/deduccion/alimentos/melon.svg', 'melon'],
            ['../img/deduccion/alimentos/naranja.svg', 'naranja']
        ],
        'nombres' : [
            ['alison', 'piña','manzana'],
            ['luis', 'papaya','melon'],
            ['david', 'papaya','manzana'],
            ['alicia', 'banano', 'melon','naranja'],
            ['jorge', 'banano'],    
            ['martha', 'banano','melon']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio27/ana.svg',
            '../img/quien-soy/ejercicio27/carolina.svg',
            '../img/quien-soy/ejercicio27/gabriela.svg',
            '../img/quien-soy/ejercicio27/luis.svg',
            '../img/quien-soy/ejercicio27/maria.svg',
            '../img/quien-soy/ejercicio27/pedro.svg'
    	],
        'pista' : [
            '1). María, Gabriela y Ana comen tomate.',
            '2). Luis come pepino.',
            '3). Carolina y Gabriela comen brócoli.',
            '4). Pedro, Luis y Ana comen zanahoria.',
            '5). Ana come remolacha.',
            '6). María y Pedro comen lechuga.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/tomate.svg', 'tomate'],
            ['../img/deduccion/alimentos/pepino.svg', 'pepino'],
            ['../img/deduccion/alimentos/brocoli.svg', 'brocoli'],
            ['../img/deduccion/alimentos/zanahoria.svg', 'zanahoria'],
            ['../img/deduccion/alimentos/remolacha.svg', 'remolacha'],
            ['../img/deduccion/alimentos/lechuga.svg', 'lechuga'],
        ],
        'nombres' : [
            ['maria', 'tomate','lechuga'],
            ['gabriela', 'tomate','brocoli'],
            ['ana', 'tomate','zanahoria','remolacha'],
            ['luis', 'pepino', 'zanahoria'],
            ['carolina', 'brocoli'],    
            ['pedro', 'zanahoria','lechuga']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio28/antonio.svg',
            '../img/quien-soy/ejercicio28/david.svg',
            '../img/quien-soy/ejercicio28/javier.svg',
            '../img/quien-soy/ejercicio28/luis.svg',
            '../img/quien-soy/ejercicio28/paula.svg',
            '../img/quien-soy/ejercicio28/ricardo.svg'
    	],
        'pista' : [
            '1). Javier, Antonio, David y Ricardo juegan baloncesto.',
            '2). Javier, Paula y Luis juegan tenis.',
            '3). Antonio y Ricardo juegan fútbol americano.',
            '4). Paula toca juegan fútbol.',
            '5). Paula, Ricardo y Luis juegan ajedrez.',
            '6). Luis juega cartas.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/baloncesto.svg', 'baloncesto'],
            ['../img/deduccion/objetos/tenis.svg', 'tenis'],
            ['../img/deduccion/objetos/futbol-americano.svg', 'futbol-americano'],
            ['../img/deduccion/objetos/futbol.svg', 'futbol'],
            ['../img/deduccion/objetos/ajedrez.svg', 'ajedrez'],
            ['../img/deduccion/objetos/carta.svg', 'carta']
        ],
        'nombres' : [
            ['javier', 'baloncesto','tenis'],
            ['antonio', 'baloncesto','futbol-americano'],
            ['david', 'baloncesto'],
            ['ricardo', 'baloncesto', 'futbol-americano','ajedrez'],
            ['paula', 'tenis','futbol','ajedrez'],    
            ['luis', 'tenis','ajedrez','carta']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio29/cecilia.svg',
            '../img/quien-soy/ejercicio29/damaris.svg',
            '../img/quien-soy/ejercicio29/jenny.svg',
            '../img/quien-soy/ejercicio29/julio.svg',
            '../img/quien-soy/ejercicio29/karla.svg',
            '../img/quien-soy/ejercicio29/luis.svg'
    	],
        'pista' : [
            '1). Cecilia, Jenny y Julio usan gafas.',
            '2). Luis lleva mochila.',
            '3). Karla y Damaris llevan un lazo en el cabello.',
            '4). Cecilia lleva una bufanda.',
            '5). Julio y Luis llevan corbata.',
            '6). Jenny lleva un pañuelo.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.svg', 'lentes'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila'],
            ['../img/deduccion/objetos/lazo.svg', 'lazo'],
            ['../img/deduccion/objetos/bufanda.svg', 'bufanda'],
            ['../img/deduccion/objetos/corbata.svg', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.svg', 'pañuelo']
        ],
        'nombres' : [
            ['cecilia', 'lentes','bufanda'],
            ['jenny', 'lentes','pañuelo'],
            ['karla', 'lazo'],
            ['damaris', 'lazo'],
            ['julio', 'lentes','corbata'],    
            ['luis', 'mochila','corbata']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio30/antonio.svg',
            '../img/quien-soy/ejercicio30/david.svg',
            '../img/quien-soy/ejercicio30/javier.svg',
            '../img/quien-soy/ejercicio30/luis.svg',
            '../img/quien-soy/ejercicio30/paula.svg',
            '../img/quien-soy/ejercicio30/ricardo.svg'
    	],
        'pista' : [
            '1). Javier, Antonio, David y Ricardo montan en bicicleta.',
            '2). Javier, Paula y Luis cantan.',
            '3). Antonio y Ricardo tocan la guitarra.',
            '4). Paula juega videojuego.',
            '5). Paula, Ricardo y Luis tocan el piano.',
            '6). Luis tiene un carro.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/bicicleta.svg', 'bicicleta'],
            ['../img/deduccion/objetos/microfono.svg', 'microfono'],
            ['../img/deduccion/objetos/guitarra.svg', 'guitarra'],
            ['../img/deduccion/objetos/videojuego.svg', 'videojuego'],
            ['../img/deduccion/objetos/piano.svg', 'piano'],
            ['../img/deduccion/objetos/carro.svg', 'carro']
        ],
        'nombres' : [
            ['javier', 'bicicleta','microfono'],
            ['antonio', 'bicicleta','guitarra'],
            ['david', 'bicicleta'],
            ['ricardo', 'bicicleta','guitarra','piano'],
            ['paula', 'microfono','videojuego','piano'],    
            ['luis', 'microfono','piano','carro']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio31/jorge.svg',
            '../img/quien-soy/ejercicio31/jose.svg',
            '../img/quien-soy/ejercicio31/paula.svg',
            '../img/quien-soy/ejercicio31/pedro.svg',
            '../img/quien-soy/ejercicio31/raquel.svg',
            '../img/quien-soy/ejercicio31/ruth.svg'
    	],
        'pista' : [
            '1). Jorge y Raquel beben leche.',
            '2). Ruth y Raquel beben café.',
            '3). Jorge, José y Pedro beben yogurt.',
            '4). Ruth y Pedro beben refresco.',
            '5). José y Paula beben sopa.',
            '6). Ruth toma agua.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/leche.svg', 'leche'],
            ['../img/deduccion/alimentos/cafe.svg', 'cafe'],
            ['../img/deduccion/alimentos/yogurt.svg', 'yogurt'],
            ['../img/deduccion/alimentos/refresco.svg', 'refresco'],
            ['../img/deduccion/alimentos/sopa.svg', 'sopa'],
            ['../img/deduccion/alimentos/agua.svg', 'agua']
        ],
        'nombres' : [
            ['jorge', 'leche','yogurt'],
            ['raquel', 'leche','cafe'],
            ['ruth', 'cafe','refresco','agua'],
            ['jose', 'yogurt','sopa'],
            ['pedro', 'yogurt','refresco'],    
            ['paula', 'sopa']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio32/alfredo.svg',
            '../img/quien-soy/ejercicio32/fabiola.svg',
            '../img/quien-soy/ejercicio32/javier.svg',
            '../img/quien-soy/ejercicio32/luz.svg',
            '../img/quien-soy/ejercicio32/nathalia.svg',
            '../img/quien-soy/ejercicio32/pedro.svg'
    	],
        'pista' : [
            '1). Luz, Natalia y Alfredo comen sandía.',
            '2). Javier y Pedro comen mango.',
            '3). Fabiola y Luz comen papaya.',
            '4). Alfredo come manzanas.',
            '5). Pedro y Natalia comen naranjas.',
            '6). Javier y Alfredo comen bananos.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/sandia.svg', 'sandia'],
            ['../img/deduccion/alimentos/mango.svg', 'mango'],
            ['../img/deduccion/alimentos/papaya.svg', 'papaya'],
            ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
            ['../img/deduccion/alimentos/naranja.svg', 'naranja'],
            ['../img/deduccion/alimentos/banano.svg', 'banano']
        ],
        'nombres' : [
            ['luz', 'sandia','papaya'],
            ['nathalia', 'sandia','naranja'],
            ['alfredo', 'sandia','banano','manzana'],
            ['javier', 'mango','banano'],
            ['pedro', 'mango','naranja'],    
            ['fabiola', 'papaya']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio33/ana.svg',
            '../img/quien-soy/ejercicio33/david.svg',
            '../img/quien-soy/ejercicio33/enrique.svg',
            '../img/quien-soy/ejercicio33/gloria.svg',
            '../img/quien-soy/ejercicio33/isabel.svg',
            '../img/quien-soy/ejercicio33/paula.svg'
    	],
        'pista' : [
            '1). Ana tiene una computadora.',
            '2). Enrique tiene un teléfono.',
            '3). Isabel y Paula tienen un nintendo.',
            '4). David y Gloria tienen un cuaderno.',
            '5). Enrique, Ana e Isabel tienen mochila.',
            '6). Gloria, David y Enrique tienen lápiz.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/computadora.svg', 'computadora'],
            ['../img/deduccion/objetos/telefono.svg', 'telefono'],
            ['../img/deduccion/objetos/videojuego.svg', 'videojuego'],
            ['../img/deduccion/objetos/cuaderno.svg', 'cuaderno'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila'],
            ['../img/deduccion/objetos/lapiz.svg', 'lapiz']
        ],
        'nombres' : [
            ['ana', 'computadora','mochila'],
            ['enrique', 'telefono','mochila','lapiz'],
            ['isabel', 'videojuego','mochila'],
            ['paula', 'videojuego'],
            ['david', 'cuaderno','lapiz'],    
            ['gloria', 'cuaderno','lapiz']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio34/ana.svg',
            '../img/quien-soy/ejercicio34/antonio.svg',
            '../img/quien-soy/ejercicio34/isabel.svg',
            '../img/quien-soy/ejercicio34/javier.svg',
            '../img/quien-soy/ejercicio34/maria.svg',
            '../img/quien-soy/ejercicio34/paula.svg'
    	],
        'pista' : [
            '1). Javier lee el periódico.',
            '2). Javier y Antonio escuchan música.',
            '3). Paula lleva collar.',
            '4). María, Ana e Isabel llevan un lazo en el cabello.',
            '5). María e Isabel llevan mochila.',
            '6). Isabel y Ana lleva teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/periodico.svg', 'periodico'],
            ['../img/deduccion/objetos/grabadora.svg', 'grabadora'],
            ['../img/deduccion/objetos/collar.svg', 'collar'],
            ['../img/deduccion/objetos/lazo.svg', 'lazo'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila'],
            ['../img/deduccion/objetos/telefono.svg', 'telefono']
        ],
        'nombres' : [
            ['javier', 'periodico','grabadora'],
            ['antonio', 'grabadora'],
            ['maria', 'lazo','mochila'],
            ['ana', 'lazo','telefono'],
            ['paula', 'collar'],    
            ['isabel', 'lazo','mochila','telefono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio35/alison.svg',
            '../img/quien-soy/ejercicio35/antonio.svg',
            '../img/quien-soy/ejercicio35/david.svg',
            '../img/quien-soy/ejercicio35/isabel.svg',
            '../img/quien-soy/ejercicio35/javier.svg',
            '../img/quien-soy/ejercicio35/raquel.svg'
    	],
        'pista' : [
            '1). Alisson, Antonio, Javier y David comen piña.',
            '2). Javier y David comen papaya.',
            '3). Alisson y Antonio comen manzanas.',
            '4). Raquel y Javier comen bananos.',
            '5). Raquel, Isabel y David comen naranja.',
            '6). Teresa, Raquel e Isabel comen melón.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/piña.svg', 'piña'],
            ['../img/deduccion/alimentos/papaya.svg', 'papaya'],
            ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
            ['../img/deduccion/alimentos/banano.svg', 'banano'],
            ['../img/deduccion/alimentos/naranja.svg', 'naranja'],
            ['../img/deduccion/alimentos/melon.svg', 'melon']
        ],
        'nombres' : [
            ['alison', 'piña','manzana'],
            ['antonio', 'piña','manzana'],
            ['javier', 'piña','papaya','banano'],
            ['david', 'piña','papaya','naranja'],
            ['raquel', 'banano','naranja','melon'],    
            ['isabel', 'naranja','melon']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio36/antonio.svg',
            '../img/quien-soy/ejercicio36/daniel.svg',
            '../img/quien-soy/ejercicio36/javier.svg',
            '../img/quien-soy/ejercicio36/jorge.svg',
            '../img/quien-soy/ejercicio36/juan.svg',
            '../img/quien-soy/ejercicio36/ricardo.svg'
    	],
        'pista' : [
            '1). Juan y Antonio usan corbata.',
            '2). Jorge lleva gafas.',
            '3). Juan, Daniel, Javier y Ricardo llevan gorra.',
            '4). Daniel lleva cinturón.',
            '5). Juan y Daniel llevan teléfono.',
            '6). Ricardo y Javier llevan mochila.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/corbata.svg', 'corbata'],
            ['../img/deduccion/objetos/lentes.svg', 'lentes'],
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/cinturon.svg', 'cinturon'],
            ['../img/deduccion/objetos/telefono.svg', 'telefono'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila']
        ],
        'nombres' : [
            ['juan', 'corbata','gorra','telefono'],
            ['antonio', 'gorra'],
            ['jorge', 'lentes'],
            ['daniel', 'gorra','cinturon','telefono'],
            ['javier', 'gorra','mochila'],    
            ['ricardo', 'gorra','mochila']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio37/jorge.svg',
            '../img/quien-soy/ejercicio37/jose.svg',
            '../img/quien-soy/ejercicio37/paula.svg',
            '../img/quien-soy/ejercicio37/pedro.svg',
            '../img/quien-soy/ejercicio37/raquel.svg',
            '../img/quien-soy/ejercicio37/ruth.svg'
    	],
        'pista' : [
            '1). Jorge y Raquel beben café.',
            '2). Ruth y Raquel beben leche.',
            '3). Jorge, José y Pedro beben refresco.',
            '4). Ruth y Pedro beben yogurt.',
            '5). José y Paula beben agua.',
            '6). Ruth beben sopa.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/cafe.svg', 'cafe'],
            ['../img/deduccion/alimentos/leche.svg', 'leche'],
            ['../img/deduccion/alimentos/refresco.svg', 'refresco'],
            ['../img/deduccion/alimentos/yogurt.svg', 'yogurt'],
            ['../img/deduccion/alimentos/agua.svg', 'agua'],
            ['../img/deduccion/alimentos/sopa.svg', 'sopa']
        ],
        'nombres' : [
            ['jorge', 'cafe','refresco'],
            ['raquel', 'cafe','leche'],
            ['ruth', 'leche','yogurt','sopa'],
            ['jose', 'refresco','agua'],
            ['pedro', 'refresco','yogurt'],    
            ['paula', 'agua']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio38/ana.svg',
            '../img/quien-soy/ejercicio38/ines.svg',
            '../img/quien-soy/ejercicio38/luisa.svg',
            '../img/quien-soy/ejercicio38/maria.svg',
            '../img/quien-soy/ejercicio38/paula.svg',
            '../img/quien-soy/ejercicio38/raquel.svg'
    	],
        'pista' : [
            '1). Inés usa reloj.',
            '2). RLuisa y María llevan gafas.',
            '3). Paula, Inés y Ana llevan Sombrero.',
            '4). Paula y María llevan collar.',
            '5). Raquel, Luisa e Inés llevan teléfono.',
            '6). Raquel, Paula, María, Ana llevan mochila.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/reloj.svg', 'reloj'],
            ['../img/deduccion/objetos/lentes.svg', 'lentes'],
            ['../img/deduccion/objetos/sombrero.svg', 'sombrero'],
            ['../img/deduccion/objetos/collar.svg', 'collar'],
            ['../img/deduccion/objetos/telefono.svg', 'telefono'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochila']
        ],
        'nombres' : [
            ['maria', 'lentes','collar','mochila'],
            ['ines', 'reloj','sombrero','telefono'],
            ['luisa', 'lentes','telefono'],
            ['paula', 'sombrero','collar','mochila'],
            ['ana', 'sombrero','mochila'],    
            ['raquel', 'telefono','mochila']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio39/ana.svg',
            '../img/quien-soy/ejercicio39/carolina.svg',
            '../img/quien-soy/ejercicio39/gabriela.svg',
            '../img/quien-soy/ejercicio39/luis.svg',
            '../img/quien-soy/ejercicio39/maria.svg',
            '../img/quien-soy/ejercicio39/pedro.svg'
    	],
        'pista' : [
            '1). María, Gabriela y Ana comen pepino.',
            '2). Luis come tomate.',
            '3). Carolina y Gabriela comen zanahoria.',
            '4). Pedro, Luis y Ana comen brócoli.',
            '5). Ana come lechuga.',
            '6). María y Pedro comen remolacha.'
    	],
        'obj' : [
            ['../img/deduccion/alimentos/pepino.svg', 'pepino'],
            ['../img/deduccion/alimentos/tomate.svg', 'tomate'],
            ['../img/deduccion/alimentos/zanahoria.svg', 'zanahoria'],
            ['../img/deduccion/alimentos/brocoli.svg', 'brocoli'],
            ['../img/deduccion/alimentos/lechuga.svg', 'lechuga'],
            ['../img/deduccion/alimentos/remolacha.svg', 'remolacha']
        ],
        'nombres' : [
            ['maria', 'pepino','remolacha'],
            ['gabriela', 'pepino','zanahoria'],
            ['ana', 'pepino','brocoli','lechuga'],
            ['luis', 'tomate','brocoli'],
            ['carolina', 'zanahoria'],    
            ['pedro', 'brocoli','remolacha']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio40/ana.svg',
            '../img/quien-soy/ejercicio40/carolina.svg',
            '../img/quien-soy/ejercicio40/gabriela.svg',
            '../img/quien-soy/ejercicio40/luis.svg',
            '../img/quien-soy/ejercicio40/maria.svg',
            '../img/quien-soy/ejercicio40/pedro.svg'
    	],
        'pista' : [
            '1). María, Gabriela y Ana juegan fútbol.',
            '2). Luis juega al baloncesto.',
            '3). Carolina y Gabriela juegan fútbol americano.',
            '4). Pedro, Luis y Ana juegan tenis.',
            '5). Ana juega voleibol .',
            '6). María y Pedro juegan ajedrez.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/futbol.svg', 'futbol'],
            ['../img/deduccion/objetos/baloncesto.svg', 'baloncesto'],
            ['../img/deduccion/objetos/futbol-americano.svg', 'futbol-americano'],
            ['../img/deduccion/objetos/tenis.svg', 'tenis'],
            ['../img/deduccion/objetos/voleibol.svg', 'voleibol'],
            ['../img/deduccion/objetos/ajedrez.svg', 'ajedrez']
        ],
        'nombres' : [
            ['maria', 'futbol','ajedrez'],
            ['gabriela', 'futbol','futbol-americano'],
            ['ana', 'futbol','tenis','voleibol'],
            ['luis', 'baloncesto','tenis'],
            ['carolina', 'futbol-americano'],    
            ['pedro', 'tenis','ajedrez']
        ]
    }                                                                                               
    ];
});
