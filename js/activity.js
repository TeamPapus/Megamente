define(function (require) {
    var activity    = require("sugar-web/activity/activity");
    var datastore   = require("sugar-web/datastore");
    var jquery      = require("jquery");
    var interact    = require("interact");
    var deduccion   = require('../js/deduccion.js');
    var quiensoy    = require('../js/quiensoy.js');
    var cont        = ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6'];
    var ejer        = 0;
    var pista       = 0;
    var resps_qs    = [];

    // funcion de movimiento para objetos html
    var moveItem = function(event) {
        // Current element
        var target = event.target;
        // Get axis values + movement change
        if (!target.hasAttribute('data-x')) {
            x0 = $(target).position().top;
            y0 = $(target).position().left;
        }
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        // Transform element
        target.style.top  = x0 + 'px';
        target.style.left = y0 + 'px';
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Update element attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };

    // imagenes en su lugar
    function spr(id, matriz) {
        var ejer = random(matriz);
        for (var i=0; i<=matriz[ejer].img.length; i++) {
            $('#' + id + ' .'+cont[i]).css({'background': 'url(' + matriz[ejer].img[i] + ') 0 0 no-repeat', 'background-position': 'center'});
        }
        return ejer;
    }

    function random(array) {
        return Math.floor(Math.random() * array.length);
	}

    function objpos(id, top, left) {
        var pos = left;
        $('#'+id).children().each(function() {
            $(this).css({'top': top+'px', 'left': pos+'px'});
            pos+=200;
        });
    }

    function nompos(ejer, matriz) {
        var pos = 0;
        $('#cont_nombres').children().each(function(index) {
            $(this).text(matriz[ejer].nombres[index][0]);
            $(this).css({'left': pos+'px', 'background-color': 'white'});
            $(this).removeClass('movimiento_qs');
            pos += 135;
        });
    }

    var dragItem = function(event) {
        var dropzoneElement = event.target;
        dropzoneElement.classList.add('respuesta_location');
    };

    function remove_accent(str) {
        var map={'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'AE','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ð':'D','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','ß':'s','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'ae','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ü':'u','ý':'y','ÿ':'y','Ā':'A','ā':'a','Ă':'A','ă':'a','Ą':'A','ą':'a','Ć':'C','ć':'c','Ĉ':'C','ĉ':'c','Ċ':'C','ċ':'c','Č':'C','č':'c','Ď':'D','ď':'d','Đ':'D','đ':'d','Ē':'E','ē':'e','Ĕ':'E','ĕ':'e','Ė':'E','ė':'e','Ę':'E','ę':'e','Ě':'E','ě':'e','Ĝ':'G','ĝ':'g','Ğ':'G','ğ':'g','Ġ':'G','ġ':'g','Ģ':'G','ģ':'g','Ĥ':'H','ĥ':'h','Ħ':'H','ħ':'h','Ĩ':'I','ĩ':'i','Ī':'I','ī':'i','Ĭ':'I','ĭ':'i','Į':'I','į':'i','İ':'I','ı':'i','Ĳ':'IJ','ĳ':'ij','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','Ĺ':'L','ĺ':'l','Ļ':'L','ļ':'l','Ľ':'L','ľ':'l','Ŀ':'L','ŀ':'l','Ł':'L','ł':'l','Ń':'N','ń':'n','Ņ':'N','ņ':'n','Ň':'N','ň':'n','ŉ':'n','Ō':'O','ō':'o','Ŏ':'O','ŏ':'o','Ő':'O','ő':'o','Œ':'OE','œ':'oe','Ŕ':'R','ŕ':'r','Ŗ':'R','ŗ':'r','Ř':'R','ř':'r','Ś':'S','ś':'s','Ŝ':'S','ŝ':'s','Ş':'S','ş':'s','Š':'S','š':'s','Ţ':'T','ţ':'t','Ť':'T','ť':'t','Ŧ':'T','ŧ':'t','Ũ':'U','ũ':'u','Ū':'U','ū':'u','Ŭ':'U','ŭ':'u','Ů':'U','ů':'u','Ű':'U','ű':'u','Ų':'U','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','ź':'z','Ż':'Z','ż':'z','Ž':'Z','ž':'z','ſ':'s','ƒ':'f','Ơ':'O','ơ':'o','Ư':'U','ư':'u','Ǎ':'A','ǎ':'a','Ǐ':'I','ǐ':'i','Ǒ':'O','ǒ':'o','Ǔ':'U','ǔ':'u','Ǖ':'U','ǖ':'u','Ǘ':'U','ǘ':'u','Ǚ':'U','ǚ':'u','Ǜ':'U','ǜ':'u','Ǻ':'A','ǻ':'a','Ǽ':'AE','ǽ':'ae','Ǿ':'O','ǿ':'o'};
        var res='';
        for (var i=0; i<str.length; i++) {
            c = str.charAt(i);
            res += map[c] || c;
        }
        return res;
    }

    function validarqs(arrastrable, zona_arrastre) {
        var coin = 0;
        var arrastre = $('div.respuesta').index(zona_arrastre);
        resps_qs[arrastre] = remove_accent($(arrastrable).text().toLowerCase());
        if (resps_qs.length == 6) {
            $.each(resps_qs, function(index, value) {
                var comp = quiensoy[ejer].img[index].split('/');
                comp = comp[(comp.length - 1)].split('.');
                comp = comp[0];
                if (value === comp) coin++;
                if (coin == 6) {
                    $('.respuesta').each(function() {
                        $(this).removeClass('respuesta_location');
                        $(this).addClass('respuesta_checked');
                    });
                    $('.nombre').each(function() {
                        $(this).addClass('nombre_checked');
                    });
                }
            });
        }
    }

    var stopItem = function(event) {
        var draggableElement = event.relatedTarget, dropzoneElement = event.target;
        validarqs(draggableElement, dropzoneElement);
    };

    var leaveItem = function(event) {
        var dropzoneElement = event.target;
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
            $(this).parents('.padre').toggle();
            // Hace visible la pantalla del menu principal
        	$('#menu').toggle();
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
                pos+=130; // incremento del espaciador
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

        var cosas = interact('.movimiento_qs');
        cosas.draggable({
            initial:true,
            onmove:moveItem,
        });

        $("#btnquiensoy").on('click', function() {
            ejer  = spr('oqs', quiensoy);
            pista = 0;
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            nompos(ejer, quiensoy);
            $('#pizarra').children().each(function() {
                $(this).children().remove();
            });
            objpos('oqs', 500, 0);
            var pos = 30;
            $('#contendor_qs').children().each(function() {
                $(this).css({'top': '0px', 'left': pos + 'px'});
                pos+=200;
            });
        });

        $('#mas-pistas').on('click', function() {
            pista++;
            if (pista >= quiensoy[ejer].pista.length) pista=0;
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
        });

        $('.cruz').on('click', function() {
            var existe = 0;
            var temp = '';
            var vertical = 0;

            /** 
            /* Verifica si el objeto exite en la 
            /* parizarra para ese determinado nombre 
            /* y lo guarda en la variable temp
             */
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

            /** 
            /* Elemina el objeto (si existe) junto con todos 
            /* sus atributos en caso contrario lo agrega  
             */
            // Elemento que se agragara la lista por nombre
            var objeto_cruz = '<p class="element objcruz" style="text-align:center; margin-top: 0px; font-size:20px;background-color: darkcyan; color: white; width: 120px; height: 25px; top: '+ vertical +'px;">' + data + '</p>';
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
                    if ($(this).text() === quiensoy[ejer].nombres[respuesta][(index + 1)]) {
                        relacion++; // Cantidad de coincidencias aumenta
                    }
                });
                // Verifica de la cantidad de coincidencias es igual a la cantidad de objetos en la lista de objetos
                if (relacion == $(this).children().length){
                    // Agrega las clases de arratres a los nombres correspondientes a la lista de objetos
                    $('#cont_nombres :eq(' + respuesta + ')').addClass('movimiento_qs');
                    $('#cont_nombres :eq(' + respuesta + ')').css('background-color', 'yellow');
                }
            }
        });

        var objects = interact('.respuesta');
        objects.dropzone({
            accept:'.movimiento_qs',
            overlap: 0.75,
            ondragenter:dragItem,
            ondrop:stopItem,
            ondragleave:leaveItem
        });

    });

});
