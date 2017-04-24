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
                ['../img/deduccion/personajes/frannia.svg', 'frannia'],
                ['../img/deduccion/personajes/juan.svg', 'juan'],
                ['../img/deduccion/personajes/marieth.svg', 'marieth']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Frannia es mayor que Anielka y menor que Juan. 2). Luz es menor que Marieth. 3). Marieth es menor que Anielka.',
            'signo' : '>',
            'solucion' : ['juan', 'frannia', 'anielka', 'marieth', 'luz']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/felix.svg', 'Félix'],
                ['../img/deduccion/personajes/reyna.svg', 'Reyna'],
                ['../img/deduccion/personajes/antonio.svg', 'Antonio'],
                ['../img/deduccion/personajes/gabriel.svg', 'Gabriel'],
                ['../img/deduccion/personajes/alison.svg', 'Alisson']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Félix es menor que Reyna y mayor que Gabriel. 2). Antonio es mayor que Alisson y menor que Gabriel.',
            'signo' : '>',
            'solucion' : ['Reyna', 'Félix', 'Gabriel', 'Antonio', 'Alisson']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/helado-azul.svg', 'azul'],
                ['../img/deduccion/alimentos/helado-verde.svg', 'verde'],
                ['../img/deduccion/alimentos/helado-rojo.svg', 'rojo'],
                ['../img/deduccion/alimentos/helado-lila.svg', 'lila'],
                ['../img/deduccion/alimentos/helado-amarillo.svg', 'amarillo']
            ],
            'pista' : '¿Qué helado es más dulce? 1). El helado verde es menos dulce que el helado azul y más que el helado rojo. 2). El helado amarillo es más dulce que el helado azul. 3). El helado lila es más dulce que el helado amarillo.',
            'signo' : '<',
            'solucion' : ['rojo', 'verde', 'azul', 'amarillo', 'lila']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/pajaro-azul.svg', 'azul'],
                ['../img/deduccion/objetos/pajaro-verde.svg', 'verde'],
                ['../img/deduccion/objetos/pajaro-rojo.svg', 'rojo'],
                ['../img/deduccion/objetos/pajaro-lila.svg', 'lila'],
                ['../img/deduccion/objetos/pajaro-amarillo.svg', 'amarillo']
            ],
            'pista' : '¿Qué pájaro vuela menos? 1). El pájaro azul vuela menos que el pájaro rosa y más que el pájaro rojo. 2). El pájaro amarillo vuela más que el pájaro rosa y menos que el pájaro verde.',
            'signo' : '<',
            'solucion' : ['rojo', 'azul', 'rosa', 'amarillo', 'verde']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/chocolate-azul.svg', 'azul'],
                ['../img/deduccion/alimentos/chocolate-verde.svg', 'verde'],
                ['../img/deduccion/alimentos/chocolate-rojo.svg', 'rojo'],
                ['../img/deduccion/alimentos/chocolate-lila.svg', 'lila'],
                ['../img/deduccion/alimentos/chocolate-amarillo.svg', 'amarillo']
            ],
            'pista' : '¿Qué chocolate es más dulce? 1). El chocolate amarillo es más dulce que el chocolate lila. 2). El chocolate verde es más dulce que el chocolate amarillo. 3). El chocolate azul es menos dulce que el chocolate lila y más que el chocolate rojo.',
            'signo' : '>',
            'solucion' : ['verde', 'amarillo', 'lila', 'azul', 'rojo']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/edificio-azul.svg', 'azul'],
                ['../img/deduccion/objetos/edificio-verde.svg', 'verde'],
                ['../img/deduccion/objetos/edificio-rojo.svg', 'rojo'],
                ['../img/deduccion/objetos/edificio-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/edificio-blanco.svg', 'blanco']
            ],
            'pista' : '¿Qué edificio es más alto? 1). El edificio azul es menos alto que el edificio verde y más que el edificio naranja. 2). El edificio naranja es más alto que el edificio blanco. 3). El edificio rojo es menos alto que el edificio blanco.',
            'signo' : '>',
            'solucion' : ['verde', 'azul', 'naranja', 'blanco', 'rojo']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/faja-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/faja-verde.svg', 'verde'],
                ['../img/deduccion/objetos/faja-azul.svg', 'azul'],
                ['../img/deduccion/objetos/faja-amarilla.svg', 'amarilla'],
                ['../img/deduccion/objetos/faja-rosa.svg', 'rosa']
            ],
            'pista' : '¿Qué faja es menos cómoda? 1). La faja azul es menos cómoda que la faja amarilla. 2). La faja naranja es más cómoda que la faja verde y menos que la faja rosa. 3). La faja amarilla es menos cómoda que la faja verde.',
            'signo' : '<',
            'solucion' : ['azul', 'amarilla', 'verde', 'naranja', 'rosa']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/rosario.svg', 'Rosario'],
                ['../img/deduccion/personajes/julia.svg', 'Julia'],
                ['../img/deduccion/personajes/pedro.svg', 'Pedro'],
                ['../img/deduccion/personajes/marta.svg', 'Martha'],
                ['../img/deduccion/personajes/pedro.svg', 'Camilo']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Camilo es mayor que Martha y menor que Julia. 2). Rosario es menor que Pedro. 3). Julia es menor que Rosario.',
            'signo' : '>',
            'solucion' : ['Pedro', 'Rosario', 'Julia', 'Camilo', 'Martha']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/ricardo.svg', 'ricardo'],
                ['../img/deduccion/personajes/jose.svg', 'Jose'],
                ['../img/deduccion/personajes/ines.svg', 'ines'],
                ['../img/deduccion/personajes/belen.svg', 'belen'],
                ['../img/deduccion/personajes/javier.svg', 'javier']
            ],
            'pista' : '¿Qué personaje es menor? 1). José es mayor que Ricardo y menor que Belén. 2). Javier es mayor que Inés y menor que Ricardo.',
            'signo' : '<',
            'solucion' : ['ines', 'javier', 'ricardo', 'jose', 'belen']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/libro-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/libro-blanco.svg', 'blanco'],
                ['../img/deduccion/objetos/libro-verde.svg', 'verde'],
                ['../img/deduccion/objetos/libro-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/libro-azul.svg', 'azul']
            ],
            'pista' : '¿Qué libro cuesta menos dinero? 1). El libro verde cuesta más que el libro azul. 2). El libro blanco cuesta menos que el libro azul. 3).El libro amarillo cuesta más que el libro rosa y menos que el libro blanco.',
            'signo' : '<',
            'solucion' : ['rosa', 'amarillo', 'blanco', 'azul', 'verde']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/pantalon-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/pantalon-blanco.svg', 'gris'],
                ['../img/deduccion/objetos/pantalon-verde.svg', 'verde'],
                ['../img/deduccion/objetos/pantalon-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/pantalon-azul.svg', 'azul']
            ],
            'pista' : '¿Qué pantalón es menos cómodo? 1). El pantalón amarillo es más cómodo que el pantalón azul y menos que el pantalón gris. 2). El pantalón verde es más cómodo que el pantalón rosa. 3).El pantalón azul es más cómodo que el pantalón verde.',
            'signo' : '<',
            'solucion' : ['rosa', 'verde', 'azul', 'amarillo', 'gris']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/mamey.svg', 'mamey'],
                ['../img/deduccion/alimentos/banano.svg', 'banano'],
                ['../img/deduccion/alimentos/nispero.svg', 'nispero'],
                ['../img/deduccion/alimentos/durazno.svg', 'durazno'],
                ['../img/deduccion/alimentos/melocoton.svg', 'melocoton']
            ],
            'pista' : '¿Qué fruta es más jugosa? 1). El banano es menos jugoso que el melocotón y más que el mamey. 2). El níspero es más jugoso que el melocotón y menos que el durazno.',
            'signo' : '>',
            'solucion' : ['durazno', 'nispero', 'melocoton', 'banano', 'mamey']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/fabiola.svg', 'fabiola'],
                ['../img/deduccion/personajes/rogelio.svg', 'rogelio'],
                ['../img/deduccion/personajes/asael.svg', 'asael'],
                ['../img/deduccion/personajes/fernando.svg', 'fernando'],
                ['../img/deduccion/personajes/migdalia.svg', 'migdalia']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Fabiola es mayor que Rogelio y menor que Fernando. 2). Asael es menor que Migdalia. 3). Fernando es menor que Asael.',
            'signo' : '>',
            'solucion' : ['migdalia', 'asael', 'fernando', 'fabiola', 'rogelio']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
                ['../img/deduccion/alimentos/pera.svg', 'pera'],
                ['../img/deduccion/alimentos/fresa.svg', 'fresa'],
                ['../img/deduccion/alimentos/sandía.svg', 'sandía'],
                ['../img/deduccion/alimentos/naranja.svg', 'naranja']
            ],
            'pista' : '¿Qué fruta es menos jugosa? 1). La sandía es menos jugosa que la pera y más que la fresa. 2). La naranja es más jugosa que la pera y menos que la manzana.',
            'signo' : '<',
            'solucion' : ['fresa', 'sandía', 'pera', 'naranja', 'manzana']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/yahosca.svg', 'yahosca'],
                ['../img/deduccion/personajes/roger.svg', 'roger'],
                ['../img/deduccion/personajes/carlos.svg', 'carlos'],
                ['../img/deduccion/personajes/jorge.svg', 'jorge'],
                ['../img/deduccion/personajes/kevin.svg', 'kevin']
            ],
            'pista' : '¿Qué personaje es menor? 1). Carlos es mayor que kevin y menor que Roger. 2). Jorge es menor que Yahosca y mayor que Roger.',
            'signo' : '<',
            'solucion' : ['kevin', 'carlos', 'roger', 'jorge', 'yahosca']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/libro-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/libro-verde.svg', 'verde'],
                ['../img/deduccion/objetos/libro-azul.svg', 'azul'],
                ['../img/deduccion/objetos/libro-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/libro-rojo.svg', 'rojo']
            ],
            'pista' : '¿Qué libro cuesta más dinero? 1). El libro rojo cuesta menos que el libro amarillo y más que el libro verde. 2). El libro azul cuesta más que el libro naranja y menos que el libro verde.',
            'signo' : '>',
            'solucion' : ['amarillo', 'rojo', 'verde', 'azul', 'naranja']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/libro-amarillo.svg', 'amarillo'],
                ['../img/deduccion/objetos/libro-verde.svg', 'verde'],
                ['../img/deduccion/objetos/libro-azul.svg', 'azul'],
                ['../img/deduccion/objetos/libro-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/libro-rojo.svg', 'rojo']
            ],
            'pista' : '¿Qué faja es menos cómoda? 1). La faja naranja es más cómoda que la faja verde y menos que la faja gris. 2). La faja rosa es menos cómoda que la faja azul. 3).La faja azul es menos cómoda que la faja verde.',
            'signo' : '<',
            'solucion' : ['rosa', 'azul', 'verde', 'naranja', 'gris']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/faja-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/faja-verde.svg', 'verde'],
                ['../img/deduccion/objetos/faja-azul.svg', 'azul'],
                ['../img/deduccion/objetos/faja-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/faja-gris.svg', 'gris']
            ],
            'pista' : '¿Qué faja es menos cómoda? 1). La faja naranja es más cómoda que la faja verde y menos que la faja gris. 2). La faja rosa es menos cómoda que la faja azul. 3).La faja azul es menos cómoda que la faja verde.',
            'signo' : '<',
            'solucion' : ['rosa', 'azul', 'verde', 'naranja', 'gris']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/bebida-lila.svg', 'lila'],
                ['../img/deduccion/objetos/bebida-amarilla.svg', 'amarilla'],
                ['../img/deduccion/objetos/bebida-verde.svg', 'verde'],
                ['../img/deduccion/objetos/bebida-azul.svg', 'azul'],
                ['../img/deduccion/objetos/bebida-roja.svg', 'roja']
            ],
            'pista' : '¿Qué bebida es menos dulce? 1). La bebida amarilla es más dulce que la bebida lila y menos que la bebida azul. 2).La bebida roja es menos dulce que la bebida lila y más que la bebida verde.',
            'signo' : '<',
            'solucion' : ['verde', 'roja', 'lila', 'amarilla', 'azul']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/crayola-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/crayola-blanca.svg', 'blanca'],
                ['../img/deduccion/objetos/crayola-verde.svg', 'verde'],
                ['../img/deduccion/objetos/crayola-amarilla.svg', 'amarilla'],
                ['../img/deduccion/objetos/crayola-roja.svg', 'roja']
            ],
            'pista' : '¿Qué crayola cuesta menos dinero? 1). La crayola roja cuesta más que la crayola amarilla y menos que la crayola blanca. 2).La crayola verde cuesta más que la crayola naranja. 3).La crayola blanca cuesta menos que la crayola naranja.',
            'signo' : '<',
            'solucion' : ['amarilla', 'roja', 'blanca', 'naranja', 'verde']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/zapato-naranja.svg', 'naranja'],
                ['../img/deduccion/objetos/zapato-gris.svg', 'gris'],
                ['../img/deduccion/objetos/zapato-verde.svg', 'verde'],
                ['../img/deduccion/objetos/zapato-rosa.svg', 'rosa'],
                ['../img/deduccion/objetos/zapato-azul.svg', 'azul']
            ],
            'pista' : '¿Qué zapato es menos cómodo? 1). El zapato azul es menos cómodo que el zapato verde y más que el zapato naranja. 2).El zapato gris es más cómodo que el zapato verde y menos que el zapato rosa.',
            'signo' : '<',
            'solucion' : ['naranja', 'azul', 'verde', 'gris', 'rosa']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/lucia.svg', 'lucia'],
                ['../img/deduccion/personajes/alberto.svg', 'alberto'],
                ['../img/deduccion/personajes/jairo.svg', 'jairo'],
                ['../img/deduccion/personajes/juana.svg', 'juana'],
                ['../img/deduccion/personajes/margarita.svg', 'margarita']
            ],
            'pista' : '¿Qué personaje es menor? 1). Lucía es menor que Margarita y mayor que Alberto. 2).Juana es mayor que Margarita y menor que Jairo.',
            'signo' : '>',
            'solucion' : ['alberto', 'lucia', 'margarita', 'juana', 'jairo']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/bebida-azul.svg', 'azul'],
                ['../img/deduccion/alimentos/bebida-verde.svg', 'verde'],
                ['../img/deduccion/alimentos/bebida-lila.svg', 'lila'],
                ['../img/deduccion/alimentos/bebida-amarilla.svg', 'amarilla'],
                ['../img/deduccion/alimentos/bebida-roja.svg', 'roja']
            ],
            'pista' : '¿Qué bebida es menos dulce? 1). La bebida roja es menos dulce que la bebida lila. 2).La bebida amarilla es más dulce que la bebida verde y menos que la bebida azul. 3). La bebida lila es menos dulce que la bebida verde.',
            'signo' : '<',
            'solucion' : ['roja', 'lila', 'verde', 'amarilla', 'azul']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/crayola-roja.svg', 'roja'],
                ['../img/deduccion/objetos/crayola-verde.svg', 'verde'],
                ['../img/deduccion/objetos/crayola-lila.svg', 'rosa'],
                ['../img/deduccion/objetos/crayola-amarilla.svg', 'naranja'],
                ['../img/deduccion/objetos/crayola-roja.svg', 'azul']
            ],
            'pista' : '¿Qué crayola cuesta más dinero? 1). La crayola verde es más cara que la crayola rosa y menos que la crayola naranja. 2).La crayola roja es más cara que la crayola azul. 3). La crayola azul es más cara que la crayola naranja.',
            'signo' : '>',
            'solucion' : ['roja', 'azul', 'naranja', 'verde', 'rosa']
        },
        {
            'img' : [
                ['../img/deduccion/personajes/ricardo.svg', 'ricardo'],
                ['../img/deduccion/personajes/maria.svg', 'maria'],
                ['../img/deduccion/personajes/jose.svg', 'jose'],
                ['../img/deduccion/personajes/javier.svg', 'javier'],
                ['../img/deduccion/personajes/isabel.svg', 'isabel']
            ],
            'pista' : '¿Qué personaje es mayor? 1). María es mayor que Javier y menor que Ricardo. 2).Isabel es menor que José y mayor que Ricardo.',
            'signo' : '>',
            'solucion' : ['jose', 'isabel', 'ricardo', 'maria', 'javier']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/bebida-lila.svg', 'lila'],
                ['../img/deduccion/alimentos/bebida-amarilla.svg', 'amarilla'],
                ['../img/deduccion/alimentos/bebida-verde.svg', 'verde'],
                ['../img/deduccion/alimentos/bebida-azul.svg', 'azul'],
                ['../img/deduccion/alimentos/bebida-roja.svg', 'roja']
            ],
            'pista' : '¿Qué bebida es menos dulce? 1). La bebida lila es menos dulce que la bebida roja. 2).La bebida amarilla es más dulce que la bebida roja. 3).La bebida azul es menos dulce que la bebida verde y más que la bebida amarilla.',
            'signo' : '<',
            'solucion' : ['lila', 'roja', 'amarilla', 'azul', 'verde']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/sandia.svg', 'sandia'],
                ['../img/deduccion/alimentos/fresa.svg', 'fresa'],
                ['../img/deduccion/alimentos/manzana.svg', 'manzana'],
                ['../img/deduccion/alimentos/pera.svg', 'pera'],
                ['../img/deduccion/alimentos/naranja.svg', 'naranja']
            ],
            'pista' : '¿Qué fruta es más jugosa? 1). La manzana es más jugosa que la pera y menos que la naranja. 2).La fresa es menos jugosa que la sandía. 3).La sandía es menos jugosa que la pera.',
            'signo' : '>',
            'solucion' : ['naranja', 'manzana', 'pera', 'sandia', 'fresa']
        },
    ];
});
