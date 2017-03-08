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
    }
    ];
});
