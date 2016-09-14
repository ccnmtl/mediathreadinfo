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

meth.build_news_feed = function() {
  // var xmlFeed;

  // var feedRequest = new XMLHttpRequest();
  // feedRequest.open('GET', 'http://ctl.columbia.edu/tag/mediathread/feed/');
  // // feedRequest.setRequestHeader("Authorization", "Negotiate");
  // feedRequest.send();
  // console.log(feedRequest.getAllResponseHeaders());

  // this should work, but doesn't:
  // var feedRequest = $.ajax({
  //   method: 'GET',
  //   url: 'http://ctl.columbia.edu/tag/mediathread/feed/',
  //   dataType: "jsonp text xml",
  // });
  
  // Ok, I give up, do it for me Uncle Google
  var xmlFeed = new google.feeds.Feed("http://ctl.columbia.edu/tag/mediathread/feed/");
  xmlFeed.load(function(result){
    if (!result.error) {
      console.log(result.feed.entries.length);
      // It works!^^^, now loop through the results and mark it up
    }
  });
}

$(document).ready(function(){
	meth.bootstrap_drop_menu();
  meth.build_news_feed();
});


