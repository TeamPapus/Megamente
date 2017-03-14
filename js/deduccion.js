define(function (require) {
    return [
        {
            'img' : [
                ['../img/deduccion/personajes/juan.svg', 'juan'],
                ['../img/deduccion/personajes/beatriz.svg', 'beatriz'],
                ['../img/deduccion/personajes/alonso.svg', 'alonso'],
                ['../img/deduccion/personajes/irene.svg', 'irene'],
                ['../img/deduccion/personajes/ana.svg', 'ana']
            ],
            'pista' : '¿Qué personaje es mayor? 1). Irene es mayor que Ana y menor que Alonso. 2). Beatriz es mayor que Alonso. 3). Juan es mayor que Beatriz.',
            'signo': '>',
            'solucion': ['juan', 'beatriz', 'alonzo', 'irene', 'ana']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/avion-verde.svg','verde'],
                ['../img/deduccion/objetos/avion-rojo.svg','rojo'],
                ['../img/deduccion/objetos/avion-naranja.svg','naranja'],
                ['../img/deduccion/objetos/avion-amarillo.svg','amarillo'],
                ['../img/deduccion/objetos/avion-azul.svg','azul']
            ],
            'pista' : '¿Qué avión vuela más alto? 1). El avión amarillo vuela más que el avión azul y menos que el avión naranja. 2). El avión rojo vuela más que el avión verde. 3). El avión naranja vuela menos que el avión verde.',
            'signo': '>',
            'solucion': ['rojo', 'verde', 'naranja', 'amarillo', 'azul']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/naranja.svg','naranja'],
                ['../img/deduccion/alimentos/fresa.svg','fresa'],
                ['../img/deduccion/alimentos/sandia.svg','sandia'],
                ['../img/deduccion/alimentos/manzana.svg','manzana'],
                ['../img/deduccion/alimentos/pera.svg''pera']
            ],
            'pista' : '¿Qué fruta es menos jugosa?. 1). La pera es más jugosa que la manzana. 2). La sandía es menos jugosa que la manzana. 3). La fresa es más jugosa que la naranja y menos que la sandía.',
            'signo':'<',
            'solucion':['naranja','fresa','sandia','manzana','pera']
        },
        {
            'img' : [
                ['../img/deduccion/objetos/camisa-verde.svg','verde'],
                ['../img/deduccion/objetos/camisa-rosa.svg','rosa'],
                ['../img/deduccion/objetos/camisa-naranja.svg','naranja'],
                ['../img/deduccion/objetos/camisa-amarilla.svg','amarillo'],
                ['../img/deduccion/objetos/camisa-gris.svg','gris']
            ],
            'pista' : '¿Qué camisa es más cómoda? 1). La camisa amarilla es más cómoda que la camisa gris y menos que la camisa naranja. 2). La camisa rosa es más cómoda que la camisa naranja. 3). La camisa verde es más cómoda que la camisa rosa.',
            'signo':'>',
            'solucion':['verde','rosa','naranja','amarillo','gris']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/ciruela.svg','ciruela'],
                ['../img/deduccion/alimentos/piña.svg','piña'],
                ['../img/deduccion/alimentos/guayaba.svg','guayaba'],
                ['../img/deduccion/alimentos/uva.svg','uva'],
                ['../img/deduccion/alimentos/pitahaya.svg','pitahaya']
            ],
            'pista' : '¿Qué fruta es menos jugosa?. 1). La piña es menos jugosa que la guayaba y más que la ciruela. 2). La uva es más jugosa que la guayaba y menos que la pitaya.',
            'signo':'<',
            'solucion':['ciruela','piña','guayaba','uva','pitahaya']
        },
        {
            'img' : [
                ['../img/deduccion/alimentos/bebida-lila.svg','lila'],
                ['../img/deduccion/alimentos/bebida-azul.svg','azul'],
                ['../img/deduccion/alimentos/bebida-roja.svg','roja'],
                ['../img/deduccion/alimentos/bebida-amarilla.svg','amarilla'],
                ['../img/deduccion/alimentos/bebida-verde.svg','verde']
            ],
            'pista' : '¿Qué bebida es más dulce?. 1). La bebida verde es menos dulce que la bebida lila y más que la bebida roja. 2). La bebida amarilla es menos dulce que la bebida azul. 3. La bebida roja es más dulce que la bebida azul.',
            'signo':'>',
            'solucion':['lila','azul','roja','amarilla','verde']
        }

    ];
});
