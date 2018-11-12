$(document).ready(function() {
    $('#map').usmap({
	 'stateSpecificStyles': {
	    'CA' : {fill: '#0f0'}
	}, 
	
	'stateSpecificHoverStyles': {
	    'CA' : {fill: '#ff0'}
	},
	
	'mouseoverState': {
	    'HI' : function(event, data) {
		console.log("You are mousing over HI. Aloha!")
	    }
	},
	
	
	'click' : function(event, data) {
	    state = data.name
	    $.get( "capital/" + state, function( data ) {
		$('#alert')
	          .text('The capital of '+state+' is ' + data)
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    });
	    
	}
    });
    
    $('#map2').usmap({
	'stateStyles': {
	    fill: '#025', 
	    "stroke-width": 1,
	    'stroke' : '#036'
	},
	'stateHoverStyles': {
	    fill: 'teal'
	},
	
	'click' : function(event, data) {
	    $('#alert')
	        .text('Click '+data.name+' on map 2')
	        .stop()
	        .css('backgroundColor', '#af0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	}
    });
    
    $('#over-md').click(function(event){
	$('#map').usmap('trigger', 'MD', 'mouseover', event);
    });
    
    $('#out-md').click(function(event){
	$('#map').usmap('trigger', 'MD', 'mouseout', event);
    });
});
