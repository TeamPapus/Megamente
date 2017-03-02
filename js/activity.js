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
            $(this).text(matriz[ejer].nombres[index]);
            $(this).css('left', pos+'px');
            pos += 135;
        });
    }

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
        // Initialize the activity.
        activity.setup();

        $('.inicio').on('click', function() {
            $(this).parents('.padre').toggle();
        	$('#menu').toggle();
        });

        $('#btn-deduccion').on('click', function() {
        	$('#menu').toggle();
        	$('#deduccion').toggle();
            var ejer = spr('od', deduccion);
            $('#pistasd').text(deduccion[ejer].pista);
            objpos('od', 70, 70);
        });

        var items = interact('.movimiento');
        items.draggable({
            initial:true,
            onmove:moveItem,
        });

        $('#btndeduccion').on('click', function() {
            var ejer = spr('od', deduccion);
            $('#pistasd').text(deduccion[ejer].pista);
            objpos('od', 70, 70);
        });

        $('#btn-quiensoy').on('click', function() {
        	$('#menu').toggle();
        	$('#quiensoy').toggle();
            ejer  = spr('oqs', quiensoy);
            pista = 0;
            $('#pistasqs').text(quiensoy[ejer].pista[pista]);
            $('.objetop').css('background','url(' + quiensoy[ejer].obj[pista][0] + ') 0 0 no-repeat');
            $('.objetop').attr('data',quiensoy[ejer].obj[pista][1]);
            nompos(ejer, quiensoy);
            var pos = 0;
            $('#pizarra').children().each(function() {
                $(this).css('left', pos+'px');
                pos+=130;
                $(this).children().remove();
            });
            objpos('oqs', 500, 0);
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

            var data = $('.objetop').attr('data');
            $(this).children().each(function () {
                vertical += 30;
                if ($(this).text() == data) {
                    existe = 1;
                    temp = $(this);
                }
            });
            var objeto_cruz = '<p class="element objcruz" style="text-align:center; margin-top: 0px; font-size:20px;background-color: darkcyan; color: white; width: 120px; height: 25px; top: '+ vertical +'px;">' + data + '</p>';
            if (existe) {
                 temp.remove();
                 vertical = 0;
                 $(this).children().each(function() {
                     $(this).css('top', vertical + 'px');
                     vertical += 30;
                 });
            }
            else $(this).append(objeto_cruz);
        });
    });

});
