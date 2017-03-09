define(function (require) {
    return [
    {
    	'img' : [
    		'../img/quien-soy/ejercicio1/maria.svg',
    		'../img/quien-soy/ejercicio1/ines.svg',
    		'../img/quien-soy/ejercicio1/luisa.svg',
			'../img/quien-soy/ejercicio1/paula.svg',
			'../img/quien-soy/ejercicio1/ana.svg',
            '../img/quien-soy/ejercicio1/raquel.svg'
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
			'../img/quien-soy/ejercicio2/ana.svg',
			'../img/quien-soy/ejercicio2/david.svg',
			'../img/quien-soy/ejercicio2/juan.svg',
			'../img/quien-soy/ejercicio2/jose.svg',
			'../img/quien-soy/ejercicio2/antonio.svg',
            '../img/quien-soy/ejercicio2/luisa.svg'
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
            '../img/quien-soy/ejercicio3/gabriela.svg',
            '../img/quien-soy/ejercicio3/maria.svg',
            '../img/quien-soy/ejercicio3/ana.svg',
            '../img/quien-soy/ejercicio3/javier.svg',
            '../img/quien-soy/ejercicio3/jose.svg',
            '../img/quien-soy/ejercicio3/paula.svg'
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
            '../img/quien-soy/ejercicio4/maria.svg',
            '../img/quien-soy/ejercicio4/david.svg',
            '../img/quien-soy/ejercicio4/lorena.svg',
            '../img/quien-soy/ejercicio4/paula.svg',
            '../img/quien-soy/ejercicio4/isabel.svg',
            '../img/quien-soy/ejercicio4/ricardo.svg'
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
            ['../img/deduccion/alimentos/uva.svg', 'uvas']
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
            '../img/quien-soy/ejercicio5/david.svg',
            '../img/quien-soy/ejercicio5/teresa.svg',
            '../img/quien-soy/ejercicio5/isabel.svg',
            '../img/quien-soy/ejercicio5/ricardo.svg',
            '../img/quien-soy/ejercicio5/raquel.svg',
            '../img/quien-soy/ejercicio5/ines.svg'
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
            ['../img/deduccion/objetos/voleibol.svg', 'voleibol']
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
            '../img/quien-soy/ejercicio6/pedro.svg',
            '../img/quien-soy/ejercicio6/ana.svg',
            '../img/quien-soy/ejercicio6/lorena.svg',
            '../img/quien-soy/ejercicio6/raquel.svg',
            '../img/quien-soy/ejercicio6/ricardo.svg',
            '../img/quien-soy/ejercicio6/antonio.svg'
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
            ['../img/deduccion/objetos/microfono.png', 'mircrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/carro.png', 'carro'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego'],
            ['../img/deduccion/objetos/flauta.png', 'flauta']
        ],
        'nombres' : [
            ['Ana', 'mircrófono', 'cámara','videojuego'],
    		['Raquel', 'mircrófono', 'carro','videojuego'],
    		['Ricardo', 'cámara','videojuego'],
            ['Antonio', 'guitarra', 'carro', 'videojuego'],
            ['Lorena', 'guitarra', 'flauta'],
            ['Pedro', 'carro', 'videojuego']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio7/jorge.svg',
            '../img/quien-soy/ejercicio7/pedro.svg',
            '../img/quien-soy/ejercicio7/ana.svg',
            '../img/quien-soy/ejercicio7/teresa.svg',
            '../img/quien-soy/ejercicio7/luisa.svg',
            '../img/quien-soy/ejercicio7/raquel.svg'
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
            ['../img/deduccion/objetos/microfono.png', 'mircrófono'],
            ['../img/deduccion/objetos/camara.png', 'cámara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/carro.png', 'carro'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuego']
        ],
        'nombres' : [
            ['Jorge', 'mircrófono', 'piano'],
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
            '../img/quien-soy/ejercicio8/teresa.svg',
            '../img/quien-soy/ejercicio8/luisa.svg',
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
            '../img/quien-soy/ejercicio9/jorge.svg',
            '../img/quien-soy/ejercicio9/raquel.svg',
            '../img/quien-soy/ejercicio9/pedro.svg',
            '../img/quien-soy/ejercicio9/ruth.svg',
            '../img/quien-soy/ejercicio9/jose.svg',
            '../img/quien-soy/ejercicio9/paula.svg'
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
            ['../img/deduccion/alimentos/yogurt.svg', 'yogurt'],
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
            '../img/quien-soy/ejercicio10/lorena.svg',
            '../img/quien-soy/ejercicio10/teresa.svg',
            '../img/quien-soy/ejercicio10/isabel.svg',
            '../img/quien-soy/ejercicio10/ana.svg',
            '../img/quien-soy/ejercicio10/maria.svg',
            '../img/quien-soy/ejercicio10/raquel.svg'
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
            ['../img/deduccion/objetos/sombrero.svg', 'sombrero'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Lorena', 'gafas', 'reloj', 'teléfono'],
    		['Ana', 'gafas', 'mochila', 'teléfono'],
    		['Maria', 'gafas','collar'],
            ['Raquel', 'reloj'],
            ['Isabel', 'reloj','mochila'],
            ['Teresa', 'mochila', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio11/lorena.svg',
            '../img/quien-soy/ejercicio11/teresa.svg',
            '../img/quien-soy/ejercicio11/isabel.svg',
            '../img/quien-soy/ejercicio11/ana.svg',
            '../img/quien-soy/ejercicio11/maria.svg',
            '../img/quien-soy/ejercicio11/raquel.svg'
    	],
        'pista' : [
            '1). David, Javier y Juan tienen el pelo amarillo.',
            '2). Ricardo tiene ojos azules.',
            '3). María lleva collar.',
            '4). Teresa lleva sombrero.',
            '5). Ana e Isabel llevan mochila.',
            '6). Lorena, Teresa y Ana llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.png', 'gafas'],
            ['../img/deduccion/objetos/reloj.png', 'reloj'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/sombrero.svg', 'sombrero'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Lorena', 'gafas', 'reloj', 'teléfono'],
    		['Ana', 'gafas', 'mochila', 'teléfono'],
    		['Maria', 'gafas','collar'],
            ['Raquel', 'reloj'],
            ['Isabel', 'reloj','mochila'],
            ['Teresa', 'mochila', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio12/maria.svg',
            '../img/quien-soy/ejercicio12/david.svg',
            '../img/quien-soy/ejercicio12/antonio.svg',
            '../img/quien-soy/ejercicio12/gloria.svg',
            '../img/quien-soy/ejercicio12/isabel.svg',
            '../img/quien-soy/ejercicio12/paula.svg'
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
            ['../img/deduccion/objetos/cuaderno.svg', 'cuaderno'],
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
            '../img/quien-soy/ejercicio13/ricardo.svg',
            '../img/quien-soy/ejercicio13/antonio.svg',
            '../img/quien-soy/ejercicio13/jorge.svg',
            '../img/quien-soy/ejercicio13/juan.svg',
            '../img/quien-soy/ejercicio13/daniel.svg',
            '../img/quien-soy/ejercicio13/javier.svg'
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
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Juan ', 'gafas', 'cinturón', 'mochila'],
    		['Antonio', 'gafas'],
    		['Jorge', 'corbata'],
            ['Daniel', 'gorra', 'cinturón', 'mochila'],
            ['Javier', 'cinturón','teléfono'],
            ['Ricardo', 'cinturón','teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio14/ricardo.svg',
            '../img/quien-soy/ejercicio14/antonio.svg',
            '../img/quien-soy/ejercicio14/jorge.svg',
            '../img/quien-soy/ejercicio14/juan.svg',
            '../img/quien-soy/ejercicio14/daniel.svg',
            '../img/quien-soy/ejercicio14/javier.svg'
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
            ['../img/deduccion/objetos/periodico.svg', 'periódico'],
            ['../img/deduccion/objetos/grabadora.png', 'música'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/lazo.svg', 'lazo'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['María ', 'periódico', 'lazo', 'mochila'],
    		['Raquel', 'música', 'collar'],
    		['Ana', 'collar','lazo'],
            ['Paula', 'lazo','mochila'],
            ['Isabel', 'lazo'],
            ['Lorena', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio14/maria.svg',
            '../img/quien-soy/ejercicio14/lorena.svg',
            '../img/quien-soy/ejercicio14/raquel.svg',
            '../img/quien-soy/ejercicio14/isabel.svg',
            '../img/quien-soy/ejercicio14/ana.svg',
            '../img/quien-soy/ejercicio14/paula.svg'
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
            ['../img/deduccion/objetos/periodico.svg', 'periódico'],
            ['../img/deduccion/objetos/grabadora.png', 'música'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/lazo.svg', 'lazo'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['María ', 'periódico', 'lazo', 'mochila'],
    		['Raquel', 'música', 'collar'],
    		['Ana', 'collar','lazo'],
            ['Paula', 'lazo','mochila'],
            ['Isabel', 'lazo'],
            ['Lorena', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio15/maria.svg',
            '../img/quien-soy/ejercicio15/lorena.svg',
            '../img/quien-soy/ejercicio15/raquel.svg',
            '../img/quien-soy/ejercicio15/isabel.svg',
            '../img/quien-soy/ejercicio15/ana.svg',
            '../img/quien-soy/ejercicio15/paula.svg'
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
            ['../img/deduccion/objetos/lentes.svg', 'gafas'],
            ['../img/deduccion/objetos/pañuelo.svg', 'pañuelo'],
            ['../img/deduccion/objetos/collar.png', 'collar'],
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../img/deduccion/objetos/telefono.png', 'teléfono']
        ],
        'nombres' : [
            ['Ana ', 'gafas', 'gorra'],
    		['Paula', 'gafas', 'pañuelo','teléfono'],
    		['Raquel', 'pañuelo','gorra','teléfono'],
            ['Teresa', 'collar'],
            ['Inés', 'collar','gorra','mochila'],
            ['Gloria', 'gorra','mochila', 'teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio16/isabel.svg',
            '../img/quien-soy/ejercicio16/lorena.svg',
            '../img/quien-soy/ejercicio16/david.svg',
            '../img/quien-soy/ejercicio16/carlos.svg',
            '../img/quien-soy/ejercicio16/ricardo.svg',
            '../img/quien-soy/ejercicio16/antonio.svg'
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
            ['../img/deduccion/objetos/microfono.svg', 'cantan'],
            ['../img/deduccion/objetos/camara.svg', 'fotografías'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.svg', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuegos']
        ],
        'nombres' : [
            ['Isabel ', 'cantan', 'bicicleta','piano'],
    		['Lorena', 'cantan', 'guitarra','piano'],
    		['David', 'fotografías','bicicleta','piano'],
            ['Carlos', 'fotografías','videojuegos'],
            ['Ricardo', 'fotografías','bicicleta','videojuegos'],
            ['Antonio', 'bicicleta','videojuegos']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio17/javier.svg',
            '../img/quien-soy/ejercicio17/antonio.svg',
            '../img/quien-soy/ejercicio17/david.svg',
            '../img/quien-soy/ejercicio17/ricardo.svg',
            '../img/quien-soy/ejercicio17/paula.svg',
            '../img/quien-soy/ejercicio17/luis.svg'
    	],
        'pista' : [
            '1). Javier, Antonio, David y Ricardo cantan.',
            '2). Javier, Paula y Luis tocan la guitarra.',
            '3). Antonio y Ricardo montan en bicicleta.',
            '4). Paula toca el piano.',
            '5). Paula, Ricardo y Luis juegan videojuegos.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/microfono.svg', 'cantan'],
            ['../img/deduccion/objetos/guitarra.svg', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.svg', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'videojuegos']
        ],
        'nombres' : [
            ['Javier ', 'cantan', 'guitarra'],
    		['Antonio', 'cantan', 'bicicleta'],
    		['David', 'cantan'],
            ['Ricardo', 'cantan', 'bicicleta','videojuegos'],
            ['Paula', 'guitarra','piano','videojuegos'],
            ['Luis', 'guitarra','videojuegos']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio18/isabel.svg',
            '../img/quien-soy/ejercicio18/lorena.svg',
            '../img/quien-soy/ejercicio18/david.svg',
            '../img/quien-soy/ejercicio18/carlos.svg',
            '../img/quien-soy/ejercicio18/ricardo.svg',
            '../img/quien-soy/ejercicio18/antonio.svg'
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
            ['../img/deduccion/objetos/lentes.svg', 'gafas'],
            ['../img/deduccion/objetos/corbata.svg', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.svg', 'pañuelos'],
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochilas'],
            ['../img/deduccion/objetos/telefono.svg', 'teléfono']
        ],
        'nombres' : [
            ['Francisco ', 'gafas', 'mochila'],
    		['Antonio', 'gafas', 'pañuelos'],
    		['Ricardo', 'corbata'],
            ['Jorge', 'pañuelos', 'mochila','teléfono'],
            ['José', 'pañuelos','mochila','teléfono'],
            ['Oscar', 'gorra']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio19/alejandro.svg',
            '../img/quien-soy/ejercicio19/alicia.svg',
            '../img/quien-soy/ejercicio19/juan.svg',
            '../img/quien-soy/ejercicio19/antonio.svg',
            '../img/quien-soy/ejercicio19/fabiola.svg',
            '../img/quien-soy/ejercicio19/javier.svg'
    	],
        'pista' : [
            '1). Fabiola, Javier y Alejandro usan gafas.',
            '2). Fabiola y Alicia llevan corbata.',
            '3). Juan lleva pañuelo.',
            '4). Fabiola, Javier y Alejandro llevan gorra.',
            '5). Antonio y Alicia llevan mochila.',
            '6). Antonio, Juan, Alicia y Alejandro llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.svg', 'gafas'],
            ['../img/deduccion/objetos/corbata.svg', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.svg', 'pañuelos'],
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochilas'],
            ['../img/deduccion/objetos/telefono.svg', 'teléfono']
        ],
        'nombres' : [
            ['Fabiola ', 'gafas', 'gorra', 'corbata'],
    		['Javier', 'gafas', 'gorra'],
    		['Alejandro', 'gafas', 'gorra','teléfono'],
            ['Alicia', 'corbata', 'mochila','teléfono'],
            ['Juan', 'pañuelos','teléfono'],
            ['Antonio', 'mochila','teléfono']
        ]
    },
    {
        'img' : [
            '../img/quien-soy/ejercicio19/alejandro.svg',
            '../img/quien-soy/ejercicio19/alicia.svg',
            '../img/quien-soy/ejercicio19/juan.svg',
            '../img/quien-soy/ejercicio19/antonio.svg',
            '../img/quien-soy/ejercicio19/fabiola.svg',
            '../img/quien-soy/ejercicio19/javier.svg'
    	],
        'pista' : [
            '1). Fabiola, Javier y Alejandro usan gafas.',
            '2). Fabiola y Alicia llevan corbata.',
            '3). Juan lleva pañuelo.',
            '4). Fabiola, Javier y Alejandro llevan gorra.',
            '5). Antonio y Alicia llevan mochila.',
            '6). Antonio, Juan, Alicia y Alejandro llevan teléfono.'
    	],
        'obj' : [
            ['../img/deduccion/objetos/lentes.svg', 'gafas'],
            ['../img/deduccion/objetos/corbata.svg', 'corbata'],
            ['../img/deduccion/objetos/pañuelo.svg', 'pañuelos'],
            ['../img/deduccion/objetos/gorra.svg', 'gorra'],
            ['../img/deduccion/objetos/mochila2.svg', 'mochilas'],
            ['../img/deduccion/objetos/telefono.svg', 'teléfono']
        ],
        'nombres' : [
            ['Fabiola ', 'gafas', 'gorra', 'corbata'],
    		['Javier', 'gafas', 'gorra'],
    		['Alejandro', 'gafas', 'gorra','teléfono'],
            ['Alicia', 'corbata', 'mochila','teléfono'],
            ['Juan', 'pañuelos','teléfono'],
            ['Antonio', 'mochila','teléfono']
        ]
    }
    ];
});
