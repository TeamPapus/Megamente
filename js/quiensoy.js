define(function (require) {
    return [
    {
    	'img' : [
    		'../Megamente/img/quien-soy/ejercicio1/maria.svg',
    		'../Megamente/img/quien-soy/ejercicio1/ines.svg',
    		'../Megamente/img/quien-soy/ejercicio1/luisa.svg',
			'../Megamente/img/quien-soy/ejercicio1/paula.svg',
			'../Megamente/img/quien-soy/ejercicio1/ana.svg',
            '../Megamente/img/quien-soy/ejercicio1/raquel.svg'
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
            ['../Megamente/img/deduccion/objetos/lentes.png', 'gafas'],
            ['../Megamente/img/deduccion/objetos/reloj.png', 'reloj'],
            ['../Megamente/img/deduccion/objetos/collar.png', 'collar'],
            ['../Megamente/img/deduccion/objetos/sombrero.png', 'sombrero'],
            ['../Megamente/img/deduccion/objetos/mochila2.png', 'mochila'],
            ['../Megamente/img/deduccion/objetos/telefono.png', 'telefono']
        ],
        'nombres' : [
            ['Inés', 'gafas', 'collar', 'mochila'],
			['Luisa', 'reloj', 'mochila'],
			['Paula', 'collar', 'sombrero', 'telefono'],
            ['María', 'reloj', 'sombrero', 'telefono'],
            ['Raquel', 'mochila', 'telefono'],
            ['Ana', 'collar', 'telefono']
        ]
	},
	{
		'img' : [
			'../Megamente/img/quien-soy/ejercicio2/ana.svg',
			'../Megamente/img/quien-soy/ejercicio2/david.svg',
			'../Megamente/img/quien-soy/ejercicio2/juan.svg',
			'../Megamente/img/quien-soy/ejercicio2/jose.svg',
			'../Megamente/img/quien-soy/ejercicio2/antonio.svg',
            '../Megamente/img/quien-soy/ejercicio2/luisa.svg'
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
            ['../Megamente/img/deduccion/objetos/microfono.png', 'microfono'],
            ['../Megamente/img/deduccion/objetos/camara.png', 'camara'],
            ['../Megamente/img/deduccion/objetos/guitarra.png', 'guitarra'],
            ['../Megamente/img/deduccion/objetos/bicicleta.png', 'bicicleta'],
            ['../Megamente/img/deduccion/objetos/piano.png', 'piano'],
            ['../Megamente/img/deduccion/objetos/videojuego.png', 'video juego']
        ],
        'nombres' : [
            ['Ana', 'microfono', 'camara'],
			['David', 'microfono', 'guitarra', 'piano'],
			['Juan', 'bicicleta', 'microfono', 'videojuego'],
            ['José', 'guitarra', 'bicicleta', 'videojuego'],
            ['Luisa', 'piano', 'videojuego'],
            ['Antonio', 'guitarra', 'piano', 'videojuego']
        ]
	},
    {
        'img' : [
            '../Megamente/img/quien-soy/ejercicio3/gabriela.svg',
            '../Megamente/img/quien-soy/ejercicio3/maria.svg',
            '../Megamente/img/quien-soy/ejercicio3/ana.svg',
            '../Megamente/img/quien-soy/ejercicio3/javier.svg',
            '../Megamente/img/quien-soy/ejercicio3/jose.svg',
            '../Megamente/img/quien-soy/ejercicio3/paula.svg'
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
                ['../Megamente/img/deduccion/objetos/microfono.png', 'microfono'],
                ['../Megamente/img/deduccion/objetos/camara.png', 'camara'],
                ['../Megamente/img/deduccion/objetos/guitarra.png', 'guitarra'],
                ['../Megamente/img/deduccion/objetos/bicicleta.png', 'bicicleta'],
                ['../Megamente/img/deduccion/objetos/piano.png', 'piano'],
                ['../Megamente/img/deduccion/objetos/videojuego.png', 'video juego']
        ],
        'nombres' : [
            ['Gabriela', 'microfono', 'camara'],
    		['María', 'microfono', 'guitarra', 'piano'],
    		['José', 'microfono', 'bicicleta'],
            ['Ana', 'piano'],
            ['Javier', 'piano', 'microfono'],
            ['Paula', 'videojuego']
        ]
    }
    ];
});
