// JQuery Placeholidfy Plugin
// Written by Chris Bell, http://cjbell.co
// License: http://unlicense.org/ (i.e. do what you want with it!)

(function( $ ){
  
  // Define our different types of text	
  var text = {
  	
  	regular: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  	
  	hipster: "Tempor freegan locavore, synth carles nisi food truck sint american apparel marfa twee. Echo park banh mi iphone, mlkshk fap williamsburg high life consectetur nesciunt cliche ea voluptate sartorial. Irony locavore butcher nulla reprehenderit twee, magna nihil. Duis dreamcatcher cosby sweater, carles exercitation twee keffiyeh dolor next level esse terry richardson nisi. Master cleanse ex gluten-free, vegan stumptown ethical elit nisi nulla. Tempor 8-bit non synth, voluptate keffiyeh ut etsy thundercats. Tumblr iphone put a bird on it twee, wayfarers salvia cred raw denim seitan fixie PBR helvetica.",
  	
  	gangster: "Lorizzle ipsum boom shackalack sizzle dope, tellivizzle adipiscing check it out. Fo shizzle my nizzle check out this velit, fo shizzle volutpizzle, cool nizzle, owned vizzle, sheezy. Pellentesque egizzle i'm in the shizzle. Sizzle erizzle. Break yo neck, yall pizzle dolizzle dapibus turpis tempizzle brizzle. Break yo neck, yall tellivizzle nibh izzle boom shackalack. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle izzle my shizz. Shut the shizzle up bow wow wow phat nisi. In hizzle habitasse platea dictumst. Away dapibizzle. Curabitizzle tellizzle sheezy, pretizzle its fo rizzle, fo shizzle my nizzle ac, black vitae, nunc. Pimpin' suscipizzle. Fo shizzle my nizzle semper velit own yo' i saw beyonces tizzles and my pizzle went crizzle."
  }
  
  var defaults = {
  	text: text.regular, // The block of text we want to use
  	overwrite: false, // Overwrite if text is in there already?
  	amounts: { // The amount of text (in words) we want to use - 0 is all
  		p: 0,
  		h1: 4,
  		h2: 8,
  		h3: 10,
  		h4: 12,
  		span: 4,
  		label: 2 
  	}
  }		
	
  var methods = {
     init : function( options ) {
     	
       var settings = $.extend(defaults,options);  
       
       switch(settings.text){
       	 case 'hipster':
       	 	settings.text = text.hipster;
       	 break;	
       	 case 'gangster':
       	 	settings.text = text.gangster;
       	 break;	
       }  
       
       var all_words = settings.text.split(' ');	   
       	
       return this.each(function(){
       		// Apply our particular text style and however much text they want 		
       		var tag = this.nodeName.toLowerCase(),
       			qty = (typeof settings['amounts'][tag] != "undefined") ? settings['amounts'][tag] : 0,
       			words = (qty != 0) ? all_words.slice(0,qty) : settings.text,
       			current = $(this).html();
       			
       		if(current.length > 0 && !settings.overwite) return; // No overwite
       			
       		if(words.constructor == Array){
       			words = words.join(' ');
       		}
       		
       		$(this).html(words); // Set	
       });
     },
     destroy : function( ) {
       return this.each(function(){
       	$(this).html('');	// Empty
       })
     }
  };

  $.fn.placeholdify = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.placeholdify' );
    }    
  
  };

})( jQuery );