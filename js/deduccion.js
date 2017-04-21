define(function (require) {
    return [
        {
            'img' : [
                ['../img/deduccion/personajes/juan.png', 'juan'],
                ['../img/deduccion/personajes/beatriz.png', 'beatriz'],
                ['../img/deduccion/personajes/alonso.png', 'alonso'],
                ['../img/deduccion/personajes/irene.png', 'irene'],
                ['../img/deduccion/personajes/ana.png', 'ana']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Irene es mayor que Ana y menor que Alonso. 2). Beatriz es mayor que Alonso. 3). Juan es mayor que Beatriz.',
            'signo' : '>',
            'solucion' : ['juan', 'beatriz', 'alonso', 'irene', 'ana']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/avion-verde.svg', 'verde'],
                ['../img/deduccion/objetos/avion-rojo.svg', 'rojo'],
                ['../img/deduccion/objetos/avion-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/avion-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/avion-azul.svg', 'azul']
            ],
            'pista' : '¿Qué avión vuela más alto? 1). El avión amarillo vuela más que el avión azul y menos que el avión naranja. 2). El avión rojo vuela más que el avión verde. 3). El avión naranja vuela menos que el avión verde.',
            'signo' : '>',
            'solucion' : ['rojo', 'verde', 'naranja', 'amarillo', 'azul']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/naranja.svg', 'naranja'],
                ['../img/deduccion/alimentos/fresa.svg', 'fresa'],
                ['../img/deduccion/alimentos/sandia.svg', 'sandia'],
                ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
                ['../img/deduccion/alimentos/pera.svg', 'pera']
            ],
            'pista' : '¿Qué fruta es menos jugosa?. 1). La pera es más jugosa que la manzana. 2). La sandía es menos jugosa que la manzana. 3). La fresa es más jugosa que la naranja y menos que la sandía.',
            'signo' : '<',
            'solucion' : ['naranja', 'fresa', 'sandia', 'manzana', 'pera']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/camisa-verde.svg', 'verde'],
                ['../img/deduccion/objetos/camisa-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/camisa-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/camisa-amarilla.svg', 'amarillo'],
                ['../img/deduccion/objetos/camisa-gris.svg', 'gris']
            ],
            'pista' : '¿Qué camisa es más cómoda? 1). La camisa amarilla es más cómoda que la camisa gris y menos que la camisa naranja. 2). La camisa rosa es más cómoda que la camisa naranja. 3). La camisa verde es más cómoda que la camisa rosa.',
            'signo' : '>',
            'solucion' : ['verde', 'rosa', 'naranja', 'amarillo', 'gris']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/ciruela.svg', 'ciruela'],
                ['../img/deduccion/alimentos/piña.svg', 'piña'],
                ['../img/deduccion/alimentos/guayaba.svg', 'guayaba'],
                ['../img/deduccion/alimentos/uva.svg', 'uva'],
                ['../img/deduccion/alimentos/pitahaya.svg', 'pitahaya']
            ],
            'pista' : '¿Qué fruta es menos jugosa?. 1). La piña es menos jugosa que la guayaba y más que la ciruela. 2). La uva es más jugosa que la guayaba y menos que la pitaya.',
            'signo' : '<',
            'solucion' : ['ciruela', 'piña', 'guayaba', 'uva', 'pitahaya']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/bebida-lila.svg', 'lila'],
                ['../img/deduccion/alimentos/bebida-azul.svg', 'azul'],
                ['../img/deduccion/alimentos/bebida-roja.svg', 'roja'],
                ['../img/deduccion/alimentos/bebida-amarilla.svg', 'amarilla'],
                ['../img/deduccion/alimentos/bebida-verde.svg', 'verde']
            ],
            'pista' : '¿Qué bebida es más dulce?. 1). La bebida verde es menos dulce que la bebida lila y más que la bebida roja. 2). La bebida amarilla es menos dulce que la bebida azul. 3. La bebida roja es más dulce que la bebida azul.',
            'signo' : '>',
            'solucion' : ['lila', 'verde', 'roja', 'azul', 'amarilla']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/chaqueta-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/chaqueta-azul.svg', 'azul'],
                ['../img/deduccion/objetos/chaqueta-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/chaqueta-gris.svg', 'gris'],
                ['../img/deduccion/objetos/chaqueta-verde.svg', 'verde']
            ],
            'pista' : '¿Qué chaqueta es menos cómoda?. 1). La chaqueta rosa es menos cómoda que la chaqueta naranja. 2). La chaqueta verde es menos cómoda que la chaqueta gris y más que la chaqueta azul. 3. La chaqueta azul es más cómoda que la chaqueta naranja.',
            'signo' : '<',
            'solucion' : ['rosa', 'naranja', 'azul', 'verde', 'gris']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/carro-anaranjado.svg', 'naranja'],
                ['../img/deduccion/objetos/carro-azul.svg', 'azul'],
                ['../img/deduccion/objetos/carro-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/carro-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/carro-blanco.svg', 'blanco']
            ],
            'pista' : '¿Qué automóvil es más rápido? 1). El automóvil rosa es más rápido que el automóvil naranja. 2). El automóvil azul es más rápido que el automóvil rosa. 3. El automóvil amarillo es más rápido que el automóvil blanco y menos que el automóvil naranja.',
            'signo' : '>',
            'solucion' : ['azul', 'rosa', 'naranja', 'amarillo', 'blanco']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/zapato-gris.svg', 'gris'],
                ['../img/deduccion/objetos/zapato-verde.svg', 'verde'],
                ['../img/deduccion/objetos/zapato-azul.svg', 'azul'],
                ['../img/deduccion/objetos/zapato-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/zapato-amarillo.svg', 'amarillo']
            ],
            'pista' : '¿Qué zapato es más cómodo? 1). El zapato verde es menos cómodo que el zapato gris. 2). El zapato azul es más cómodo que el zapato naranja y menos que el zapato amarillo. 3. El zapato gris es menos cómodo que el zapato naranja.',
            'signo' : '>',
            'solucion' : ['amarillo', 'azul', 'naranja', 'gris', 'verde']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/rosa.svg', 'rosa'],
                ['../img/deduccion/personajes/marlon.svg', 'marlon'],
                ['../img/deduccion/personajes/blanca.svg', 'blanca'],
                ['../img/deduccion/personajes/alfredo.svg', 'alfredo'],
                ['../img/deduccion/personajes/daniel.svg', 'daniel']
            ],
            'pista' : '¿Qué personaja es menor? 1). Marlon es menor que Alfredo y mayor que Rosa. 2). Blanca es menor que Daniel y mayor que Alfredo.',
            'signo' : '<',
            'solucion' : ['rosa', 'marlon', 'alfredo', 'blanca', 'daniel']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/globo-blanco.svg', 'blanco'],
                ['../img/deduccion/objetos/globo-amarilo.svg', 'amarilo'],
                ['../img/deduccion/objetos/globo-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/globo-azul.svg', 'azul'],
                ['../img/deduccion/objetos/globo-rojo.svg', 'rojo']
            ],
            'pista' : '¿Qué globo vuela menos? 1). El globo rosa vuela menos que el globo blanco y más que el globo amarillo. 2). El globo rojo vuela menos que el globo amarillo y más que el globo azul.',
            'signo' : '<',
            'solucion' : ['azul', 'rojo', 'amarilo', 'rosa', 'blanco']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/silla-gris.svg', 'gris'],
                ['../img/deduccion/objetos/silla-amarilo.svg', 'amarilo'],
                ['../img/deduccion/objetos/silla-verde.svg', 'verde'],
                ['../img/deduccion/objetos/silla-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/silla-azul.svg', 'azul']
            ],
            'pista' : '¿Qué silla es más cómoda? 1). La silla azul es más cómoda que la silla gris y menos que la silla rosa. 2). La silla verde es menos cómoda que la silla gris y más que la silla amarilla.',
            'signo' : '>',
            'solucion' : ['rosa', 'azul', 'gris', 'verde', 'amarilla']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/mango.svg', 'mango'],
                ['../img/deduccion/alimentos/coco.svg', 'coco'],
                ['../img/deduccion/alimentos/cereza.svg', 'cereza'],
                ['../img/deduccion/alimentos/melón.svg', 'melón'],
                ['../img/deduccion/alimentos/papaya.svg', 'papaya']
            ],
            'pista' : '¿Qué fruta es más jugosa? 1). La cereza es más jugosa que el mango. 2). El mango es más jugoso que el coco. 3). La papaya es más jugosa que la cereza y menos que el melón.',
            'signo' : '<',
            'solucion' : ['coco', 'mango', 'cereza', 'papaya', 'melón']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/luz.svg', 'luz'],
                ['../img/deduccion/personajes/anielka.svg', 'anielka'],
                ['../img/deduccion/alimentos/frannia.svg', 'frannia'],
                ['../img/deduccion/alimentos/juan.svg', 'juan'],
                ['../img/deduccion/alimentos/marieth.svg', 'marieth']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Frannia es mayor que Anielka y menor que Juan. 2). Luz es menor que Marieth. 3). Marieth es menor que Anielka.',
            'signo' : '>',
            'solucion' : ['juan', 'frannia', 'anielka', 'marieth', 'luz']
        },

    ];
});
