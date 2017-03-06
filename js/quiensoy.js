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
            ['../img/deduccion/objetos/telefono.png', 'telefono']
        ],
        'nombres' : [
            ['Inés', 'afas', 'collar', 'mochila'],
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
            ['../img/deduccion/objetos/microfono.png', 'microfono'],
            ['../img/deduccion/objetos/camara.png', 'camara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../Mimg/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'video juego']
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
            ['../img/deduccion/objetos/microfono.png', 'microfono'],
            ['../img/deduccion/objetos/camara.png', 'camara'],
            ['../img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../img/deduccion/objetos/piano.png', 'piano'],
            ['../img/deduccion/objetos/videojuego.png', 'video juego']
        ],
        'nombres' : [
            ['Gabriela', 'micrófono', 'cámara'],
    		['María', 'micrófono', 'guitarra', 'piano'],
    		['José', 'micrófono', 'bicicleta'],
            ['Ana', 'piano'],
            ['Javier', 'piano', 'micrófono'],
            ['Paula', 'videojuego']
        ]
    }];
});
