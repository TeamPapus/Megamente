define(function (require) {
    var activity    = require("sugar-web/activity/activity");
    var datastore   = require("sugar-web/datastore");
    // Librerias
    var jquery      = require("jquery");
    var interact    = require("interact");
    // Matrices
    var deduccion   = require('../js/deduccion.js');
    var quiensoy    = require('../js/quiensoy.js');
    // Variables globales
    var cont        = ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6'];
    var ejer        = 0;
    var pista       = 0;
    var resps_qs    = [];

    /**
     * Funcion de movimiento para elementos html
     */
    var moveItem = function(event) {
        // elemento actual
        var target = event.target;
        // Captura el valor en el eje x + cambio de lugar
        if (!target.hasAttribute('data-x')) {
            x0 = $(target).position().top;
            y0 = $(target).position().left;
        }
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        // Traslada los elementos
        target.style.top  = x0 + 'px';
        target.style.left = y0 + 'px';
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Actualiza los atributos del elemento
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };
    
    /** 
     * Funcion para generar un numero al azar dependiendo de la longitud de un arreglo
     */
    function random(array) {
        // La funcion retorna un numero al azar
        return Math.floor(Math.random() * array.length);
	}

    /** 
     * Funcion que colocar las imagenes de cambian cada ejercicio
     */
    function spr(id, matriz) {
        var ejer = random(matriz); //Numero de ejercicio generado al azar
        // Ciclo de busqueda de imagenes en la matriz
        for (var i=0; i<=matriz[ejer].img.length; i++) {
            // Coloca cada imagen en su elemento html correspondiente
            $('#' + id + ' .'+cont[i]).css({'background': 'url(' + matriz[ejer].img[i] + ') 0 0 no-repeat', 'background-position': 'center'});
        }
        // La cuncion retorna el nuemro de ejercicio
        return ejer;
    }

    /** 
     * Funcion para ordenar en pantalla los elementos html que con tinen imagenes
     */
    function objpos(id, top, left) {
        var pos = left; // Espacio acumulado por cada elemento
        // Busca cada elemento html
        $('#'+id).children().each(function() {
            // Actualiza los atributos de cada elemento
            $(this).css({'top': top+'px', 'left': pos+'px'});
            // Espacio aumenta
            pos+=200;
        });
    }

    /** 
     * Funcion para ordenar los nombre de los personajes de quien soy
     */
    function nompos(ejer, matriz) {
        var pos = 0; // Posicion acumulada por el espacio de cada elemento
        // Recorre cada elemento html que contendra los nombres
        $('#cont_nombres').children().each(function(index) {
            // Coloca el nombre correspondiente a cada elemento html
            $(this).text(matriz[ejer].nombres[index][0]);
            // Actualiza los atributos de cada elemento html
            $(this).css({'top':'-20px','left': pos+'px', 'background-color': 'white'});
            pos += 136; // Aumento de espacio
        });
    }

    /**
     * Funcion que agrega una clase a las zonas de arrastre
     */
    var dragItem = function(event) {
        var dropzoneElement = event.target; // Caputa el elento sobre el cual se arrastro otro
        // Agrega la clase
        dropzoneElement.classList.add('respuesta_location');
    };

    /** 
     * Funcion que remueve los acentos
     */
    function remove_accent(str) {
        // Mapa de acentos
        var map={'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'AE','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ð':'D','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','ß':'s','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'ae','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ü':'u','ý':'y','ÿ':'y','Ā':'A','ā':'a','Ă':'A','ă':'a','Ą':'A','ą':'a','Ć':'C','ć':'c','Ĉ':'C','ĉ':'c','Ċ':'C','ċ':'c','Č':'C','č':'c','Ď':'D','ď':'d','Đ':'D','đ':'d','Ē':'E','ē':'e','Ĕ':'E','ĕ':'e','Ė':'E','ė':'e','Ę':'E','ę':'e','Ě':'E','ě':'e','Ĝ':'G','ĝ':'g','Ğ':'G','ğ':'g','Ġ':'G','ġ':'g','Ģ':'G','ģ':'g','Ĥ':'H','ĥ':'h','Ħ':'H','ħ':'h','Ĩ':'I','ĩ':'i','Ī':'I','ī':'i','Ĭ':'I','ĭ':'i','Į':'I','į':'i','İ':'I','ı':'i','Ĳ':'IJ','ĳ':'ij','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','Ĺ':'L','ĺ':'l','Ļ':'L','ļ':'l','Ľ':'L','ľ':'l','Ŀ':'L','ŀ':'l','Ł':'L','ł':'l','Ń':'N','ń':'n','Ņ':'N','ņ':'n','Ň':'N','ň':'n','ŉ':'n','Ō':'O','ō':'o','Ŏ':'O','ŏ':'o','Ő':'O','ő':'o','Œ':'OE','œ':'oe','Ŕ':'R','ŕ':'r','Ŗ':'R','ŗ':'r','Ř':'R','ř':'r','Ś':'S','ś':'s','Ŝ':'S','ŝ':'s','Ş':'S','ş':'s','Š':'S','š':'s','Ţ':'T','ţ':'t','Ť':'T','ť':'t','Ŧ':'T','ŧ':'t','Ũ':'U','ũ':'u','Ū':'U','ū':'u','Ŭ':'U','ŭ':'u','Ů':'U','ů':'u','Ű':'U','ű':'u','Ų':'U','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','ź':'z','Ż':'Z','ż':'z','Ž':'Z','ž':'z','ſ':'s','ƒ':'f','Ơ':'O','ơ':'o','Ư':'U','ư':'u','Ǎ':'A','ǎ':'a','Ǐ':'I','ǐ':'i','Ǒ':'O','ǒ':'o','Ǔ':'U','ǔ':'u','Ǖ':'U','ǖ':'u','Ǘ':'U','ǘ':'u','Ǚ':'U','ǚ':'u','Ǜ':'U','ǜ':'u','Ǻ':'A','ǻ':'a','Ǽ':'AE','ǽ':'ae','Ǿ':'O','ǿ':'o'};
        var res=''; // Variable donde se almacenara la palabre sin acentos
        // Ciclo que recorre cada letra de la palabra
        for (var i=0; i<str.length; i++) {
            c = str.charAt(i); // Captura cada letra de la palabra
            res += map[c] || c; // Guarda la letra procesada y sin acentos
        }
        // Retorna la palabra sin acentos
        return res;
    }
    
    /**
     * Funcion que obtiene el nombre de una imagen a partir de la cadena de su ubicacion
     */
    function perNombre(cadena) {
        var nombre = cadena.split('/'); // Separa la cadena de texto en base a  "/"
        nombre = nombre[(nombre.length - 1)].split('.'); // Separa la cadena de texto en base a "."
        return nombre[0]; // Retorna el nombre de la imagen
    }

    /**
     * Funcion que valida quien eres
     */
    function validarqs(arrastrable, zona_arrastre) {
        var coin = 0; // Contador de objetos
        var arrastre = $('div.respuesta').index(zona_arrastre); // Captura el indece del nombre
        resps_qs[arrastre] = remove_accent($(arrastrable).text().toLowerCase()); // Remueve los acentos del nombre
        // Verifica si la cantidad de objetos arrastrados en igual a 6
        if (resps_qs.length == 6) {
            // Recorre los ementos de los cada objeto arrastrado
            $.each(resps_qs, function(index, value) {
                var comp = perNombre(quiensoy[ejer].img[index]); // Retorna del nombre del archibo de imagen
                // Verifica el nombre del archibo de imagen coincide con del elemento arrastrado
                if (value === comp) coin++; // Coincidencia aumenta
                // Verifica si las coincidencias con iguales a 6
                if (coin == 6) {
                    // Actualiza los atributos de los elementos
                    $('.respuesta').each(function() {
                        $(this).removeClass('respuesta_location');
                        $(this).addClass('respuesta_checked');
                    });
                    $('.nombre').each(function() {
                        $(this).addClass('nombre_checked');
                        $(this).css('background-color','darkcyan');
                    });
                    $('#myModal').css('display', 'block');
                }
            });
        }
    }

    /**
     * Funcion que obtiene si el elemento html arrastrado en corresponde al de la imagen correspondiente
     */
    var stopItem = function(event) {
        // Captura los elemntos arrastrados y los de zona de arrastre
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;
        // Llamado de la funcion que verifica los nombres
        validarqs(draggableElement, dropzoneElement);
    };

    /**
     * Funcion que cambia al clase de las zonas de arrastre
     */
    var leaveItem = function(event) {
        //  Captura el elemento que sale de la zona de arrastre
        var dropzoneElement = event.target;
        // Remueve la clase del elemento
        dropzoneElement.classList.remove('respuesta_location');
    };

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
        // Initialize the activity.
        activity.setup();

        /** 
        /* Regrasa al menu principal
         */
        $('.inicio').on('click', function() {
            // Busca el elemto html con la clase "padre" y lo esconde
            //$(this).parents('.padre').toggle();
            // Hace visible la pantalla del menu principal
        	//$('#menu').toggle();
            // Recarga la pagina
            location.reload();
        });

        /** 
        /* Cambia del menu principal al juego de deduccion
         */
        $('#btn-deduccion').on('click', function() {
            // Esconde el menu principal
        	$('#menu').toggle();
            // Hace visible la pantall del juego deduccion
        	$('#deduccion').toggle();
            // Carga al azar un ejercicio de deduccion
            var ejer = spr('od', deduccion);
            // Acomoda la pista deducion
            $('#pistasd').text(deduccion[ejer].pista);
            // Ordena la lista de objetos
            objpos('od', 70, 70);
        });

        /** 
        /* Funcion de elementos arrastrables del juego deduccion
         */
        // Lista de objetos arrastrables
        var items = interact('.movimiento_d');
        // Atributos de los objetos arrastrables
        items.draggable({
            initial:true,
            onmove:moveItem,
        });

        /** 
        /* Carga nuevo ejerccion de deduccion
         */
        $('#btndeduccion').on('click', function() {
            // Carga al azar un ejercicio de deduccion
            var ejer = spr('od', deduccion);
            // Acomoda la pista deducion
            $('#pistasd').text(deduccion[ejer].pista);
            // Ordena la lista de objetos
            objpos('od', 70, 70);
        });

        /** 
        /* Pasa del menu principal al juego quien soy
         */
        $('#btn-quiensoy').on('click', function() {
            // Esconde el menu principal
        	$('#menu').toggle();
            // Hace visible la pantall del juego quien soy
        	$('#quiensoy').toggle();
            // Organiza los personajes del juego quien soy
            ejer  = spr('oqs', quiensoy);
            pista = 0; // Cantidad de pistas
            // Coloca la lista en su lugar
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            // Coloca el objeto en su lugar
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
            // Ordena la lista de nombres por objetos especificos
            nompos(ejer, quiensoy);
            var pos = 0; // Espaciados horizontal de lista de objetos especificos por nombre
            // Recorre la lista de elementos html de listas de objetos por nombre especifico
            $('#pizarra').children().each(function() {
                // Organiza cada lista de objetos
                $(this).css('left', pos+'px');
                pos+=136; // incremento del espaciador
                // Remueve todos los objetos de la lista de objetos por nombre espcifico
                $(this).children().remove();
            });
            // Ordena los persojes en su lugar especifico
            objpos('oqs', 450, 0);
            var pos = 30; // espaciador horizontal
            // Recorre la lista de elementos html de las casillas de nombres de personajes
            $('#contendor_qs').children().each(function() {
                // Ordena las casillas de nombres por personaje
                $(this).css({'top': '0px', 'left': pos + 'px'});
                pos+=200; // Aumentos de espaciador
            });

        });

        /** 
        /* Funcion de atraste de nombres de personajes
         */
        var cosas = interact('.movimiento_qs');
        cosas.draggable({
            initial:true,
            restrict: {
                restriction: document.getElementById('canvas'),
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            onmove:moveItem,
        });

        /** 
        /* Funcion de atraste de nombres de personajes
         */
        $("#btnquiensoy").on('click', function() {
            $('#cont_nombres').children().each(function(index) {
                $(this).remove();
            });
            for (var i=0; i<=5; i++) {
                $('#cont_nombres').append('<p class="nombre element"></p>');
            }
            $('.respuesta').each(function() {
                $(this).removeClass('respuesta_location');
            });
            $('#contendor_qs').children().each(function() {
                $(this).removeAttr('respuesta_location');
            });
            // Organiza los personajes del juego quien soy
            ejer  = spr('oqs', quiensoy);
            pista = 0; // Cantidad de pistas
            // Coloca la lista en su lugar
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            // Coloca el objeto en su lugar
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
            // Ordena la lista de nombres por objetos especificos
            nompos(ejer, quiensoy);
            var pos = 0; // Espaciados horizontal de lista de objetos especificos por nombre
            $('#pizarra').children().each(function() {
                // Organiza cada lista de objetos
                $(this).css('left', pos+'px');
                pos+=136; // incremento del espaciador
                // Remueve todos los objetos de la lista de objetos por nombre espcifico
                $(this).children().remove();
            });
            // Ordena los persojes en su lugar especifico
            objpos('oqs', 450, 0);
            var pos = 30; // espaciador horizontal
            // Recorre la lista de elementos html de las casillas de nombres de personajes
            $('#contendor_qs').children().each(function() {
                // Ordena las casillas de nombres por personaje
                $(this).css({'top': '0px', 'left': pos + 'px'});
                pos+=200; // Aumentos de espaciador
                $(this).removeClass('respuesta_checked');
            });
        });

        /**
         * Cambia las pistas de quien soy
         */
        $('#mas-pistas').on('click', function() {
            pista++; // Aumento de indice de las pistas
            // Verifica si el aumento es mayor o igual al numero de pistas en la matriz
            if (pista >= quiensoy[ejer].pista.length) pista=0; // Reinicio de cuenta de las pistas
            // Coloca la pistas en su lugar
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            // Colocar el objeto correspondiente a la pista
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
        });
        
        /**
         * Funcion que agrega objetos a la lista de objetos determinados por nombre
         */
        $('.cruz').on('click', function() {
            var existe = 0;
            var temp = '';
            var vertical = 0;
            
            // Captura nombre del objeto
            var data = $('.objetop').attr('data');
            // Recorre la lista de elementos html por nombre
            $(this).children().each(function () {
                vertical += 30; // Espaciador vertical para los objetos por nombre
                // Verificar si el elemento ya se encuentra en lista
                if ($(this).text() == data) {
                    existe = 1; // Indicador de existencia del objeto
                    temp = $(this); // Objeto de la lista
                }
            });

            // Elemento que se agragara la lista por nombre
            var objeto_cruz = '<p class="element objcruz" style="text-align:center; margin-top: 0px; font-size:20px;background-color: darkcyan; color: white; width: 130px; height: 25px; top: '+ vertical +'px;">' + data + '</p>';
            // Verifica si existe el objeto en la lista por nombre
            if (existe) {
                // Remueve el objeto de la lista
                temp.remove();
                vertical = 0; // Resetea el espaciador vertical de los objetos de la lista
                // Recorre la lista de elementos html
                $(this).children().each(function() {
                    // Reacomoda los objeto existentes en la lista
                    $(this).css('top', vertical + 'px');
                    vertical += 30;
                });
                // Captura el indeice de la lista de nombres correspondientes a la lista de objetos
                var respuesta = $('div.cruz').index($(this));
                // Remueve las clase de arrastre para el nombre correspondiente a la lista de objetos
                $('#cont_nombres :eq(' + respuesta + ')').removeClass('movimiento_qs');
                $('#cont_nombres :eq(' + respuesta + ')').css('background-color', 'white');
            }
            // Agrega el objeto a lista de objetos correspondiente a cada nombre en caso que no exista
            else $(this).append(objeto_cruz);

            // Recupera el indice de la lista de objetos correspondientes a cada nombre
            var respuesta = $('div.cruz').index($(this));
            // Verifica si la cantidad de objetos en la lista de objetos coincide con la cantidad en la matriz
            if ($(this).children().length == (quiensoy[ejer].nombres[respuesta].length - 1)) {
                var relacion = 0; // Cantidad de coincidencias entre la lista de objetos por nombre y la matriz
                // Recorre la lista de elementos html de lista de objetos correspondiente
                $(this).children().each(function (index, value) {
                    // Verifica la coincidencia entre la lista de bojetos y la lista de bojetos de la matriz
                    for (var i=1; i<=quiensoy[ejer].nombres[respuesta].length; i++){
                        if ($(this).text() === quiensoy[ejer].nombres[respuesta][i]) {
                            relacion++; // Cantidad de coincidencias aumenta
                        }
                    }
                });
                // Verifica de la cantidad de coincidencias es igual a la cantidad de objetos en la lista de objetos
                if (relacion == $(this).children().length){
                    // Agrega las clases de arratres a los nombres correspondientes a la lista de objetos
                    $('#cont_nombres :eq(' + respuesta + ')').addClass('movimiento_qs');
                    $('#cont_nombres :eq(' + respuesta + ')').css('background-color', 'yellow');
                }
            } else {
                // Remueve las clases de arratres a los nombres correspondientes a la lista de objetos
                $('#cont_nombres :eq(' + respuesta + ')').removeClass('movimiento_qs');
                $('#cont_nombres :eq(' + respuesta + ')').css('background-color', 'white');
            }
        });

        /**
         * Funcion de objetos arrastrables de quien soy
         */
        var objects = interact('.respuesta');
        objects.dropzone({
            accept:'.movimiento_qs',
            overlap: 0.75,
            ondragenter:dragItem,
            ondrop:stopItem,
            ondragleave:leaveItem
        });
        
        /*$('#get-modal').click(function() {
            $('#myModal').css('display', 'block');
        });*/
        
        /**
         * Funcion de modal
         */
        $('.close').click(function() {
            $('#myModal').css('display', 'none');
            $('#cont_nombres').children().each(function(index) {
                $(this).remove();
            });
            for (var i=0; i<=5; i++) {
                $('#cont_nombres').append('<p class="nombre element"></p>');
            }
            $('.respuesta').each(function() {
                $(this).removeClass('respuesta_location');
            });
            $('#contendor_qs').children().each(function() {
                $(this).removeAttr('respuesta_location');
            });
            // Organiza los personajes del juego quien soy
            ejer  = spr('oqs', quiensoy);
            pista = 0; // Cantidad de pistas
            // Coloca la lista en su lugar
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            // Coloca el objeto en su lugar
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
            // Ordena la lista de nombres por objetos especificos
            nompos(ejer, quiensoy);
            var pos = 0; // Espaciados horizontal de lista de objetos especificos por nombre
            $('#pizarra').children().each(function() {
                // Organiza cada lista de objetos
                $(this).css('left', pos+'px');
                pos+=136; // incremento del espaciador
                // Remueve todos los objetos de la lista de objetos por nombre espcifico
                $(this).children().remove();
            });
            // Ordena los persojes en su lugar especifico
            objpos('oqs', 450, 0);
            var pos = 30; // espaciador horizontal
            // Recorre la lista de elementos html de las casillas de nombres de personajes
            $('#contendor_qs').children().each(function() {
                // Ordena las casillas de nombres por personaje
                $(this).css({'top': '0px', 'left': pos + 'px'});
                pos+=200; // Aumentos de espaciador
                $(this).removeClass('respuesta_checked');
            });
        });

    });

});
