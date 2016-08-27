var meth = {};

meth.bootstrap_drop_menu = function(){
	jQuery('.dropdown').each(function(){
	  var parent = jQuery(this).children('a').eq(0);
	  var dropdown = jQuery(this).find('.dropdown-toggle');
	  var clone_text = parent.clone().text();
	  parent.remove();
	  dropdown.prepend('<span>' + clone_text + '</span>');
	})

}

jQuery(document).ready(function(){
	meth.bootstrap_drop_menu();
})


