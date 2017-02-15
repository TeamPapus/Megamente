define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    
    var mi_imagen = new Image();
    var imagen = '../Megamente/img/deduccion/objetos/zapato-amarillo.png';
    function load_image() {
        mi_imagen.src = imagen;
        console.log("Tamaño de imagen: ");
        console.log(mi_imagen.height+'x'+mi_imagen.width);
    }
    
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
        target.style.top = x0 + 'px';
        target.style.left = y0 + 'px';
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Update element attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    };
    
    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        load_image();

        $('#btn-deduccion').on('click', function(){
        	$('#menu').toggle();
        	$('#deduccion').toggle();
            load_image();
        });
        
        $('#btn-quiensoy').on('click', function(){
        	$('#menu').toggle();
        	$('#quiensoy').toggle();
        });
        
        $('.inicio').on('click', function(){
            $(this).parents('.padre').toggle();
        	$('#menu').toggle();
        });
    });
});