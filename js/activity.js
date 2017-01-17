define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");


    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {


        // Initialize the activity.
        activity.setup();

        $('#btn').on('click', function(){
        	$('#menu').toggle();
        	$('#deduccion').toggle();

        });




    });

});
