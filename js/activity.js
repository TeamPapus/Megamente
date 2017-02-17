define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var deduccion = require('../js/deduccion.js');
    var quiensoy = require('../js/quiensoy.js');
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
      function spr(matriz){
          var ejer = random(matriz);
          for(var i=0;i<=4;i++){
              $('.'+cont[i]).css('background','url('+matriz[ejer].img[i]+') 0 0 no-repeat');
          }
          return ejer;
      }
    
     function random(array){
		return Math.floor(Math.random()*array.length);
	}
    
    function objpos(id, top, left){
        var pos = left; 
        $('#'+id).children().each(function(){
            $(this).css({'top': top+'px', 'left': pos+'px'});
            pos+=200;
        });
    }
    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        var items = interact('.movimiento');
        items.draggable({
            initial:true,
            onmove:moveItem,
        });
        
        $('#btn-deduccion').on('click', function(){
        	$('#menu').toggle();
        	$('#deduccion').toggle();
            var ejer = spr(deduccion);
            $('#pistasd').text(deduccion[ejer].pista);
            objpos('od', 70, 70);
        });
        
        $('#btn-quiensoy').on('click', function(){
        	$('#menu').toggle();
        	$('#quiensoy').toggle();
            var ejer = spr(quiensoy);
            $('#pistasqs').text(quiensoy[ejer].pista[0]);
            objpos('oqs', 500, 70);
        });
        
        $('.inicio').on('click', function(){
            $(this).parents('.padre').toggle();
        	$('#menu').toggle();
        });
        
        $("#btndeduccion").on('click',function(){
            var ejer = spr(deduccion);
            $('#pistasd').text(deduccion[ejer].pista);
            objpos('od', 70, 70);
        });
        
        $("#btnquiensoy").on('click',function(){
            var ejer = spr(quiensoy);
            $('#pistasqs').text(quiensoy[ejer].pista[0]);
            objpos('oqs', 500, 70)
        });
       
    });
});