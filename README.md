jQuery Placeholdify
=============

This is a jQuery plugin to insert placeholder text into your document. Obviously you could just do this yourself, but there may come a time where you feel like you can't be bothered to copy and paste. That's where this plugin comes in handy. 

Sample Usage
------------

See the included 'index.html' file if you wish to see so sample usage, or just read below:
	
	// This will replace the H1 element with 4 words of Lorem ipsum
	$('h1').placeholdify(); 
	
	// Change the type of lorem ipsum to gangster
	$('h1').placeholdify({ text: 'gangster' }); 
	
	// Change the type of lorem ipsum to hipster
	$('h1').placeholdify({ text: 'hipster' }); 
	
	// Change the type of text to your own
	$('h1').placeholdify({ text: 'This is my own heading text' }); 
	
	// Overwrite the current text
	$('h1').placeholdify({ overwrite: true }); 
	
	// Change the quantities of text
	$('h1').placeholdify({ amounts: { h1: 10 } }); 

Options
-------

* Text: Change the type of text used. Options are: 'gangster', 'hipster', 'regular' or your own.
* Overwite: true / false (default)
* Amounts: object with types of tags and the number of words to include for each. 0 = all text.
		 
