define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var deduccion = require('../js/deduccion.js');
    var cont = [
        'obj1', 'obj2', 'obj3', 'obj4', 'obj5'
    ];
    
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
    
    // imagenes en su lugar
      function spr(){
    	
    	var ejer = random(deduccion);
		for(var i=0;i<=4;i++){
			$('#'+cont[i]).css('background-image','url('+deduccion[ejer].img[i]+')');
        }
      }
    
     function random(array){
		return Math.floor(Math.random()*array.length);
	}
    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        var items = interact('.objeto');
        items.draggable({
            initial:true,
            onmove:moveItem,
        });
        
        $('#btn-deduccion').on('click', function(){
        	$('#menu').toggle();
        	$('#deduccion').toggle();
            spr();
        });
        
        $('#btn-quiensoy').on('click', function(){
        	$('#menu').toggle();
        	$('#quiensoy').toggle();
        });
        
        $('.inicio').on('click', function(){
            $(this).parents('.padre').toggle();
        	$('#menu').toggle();
        });
        
        $("#btn_siguiente").on('click',function(){
        	console.log("btn sigui");
        	spr();
        });
       
    });
});