var meth = {};

meth.bootstrap_drop_menu = function(){
    jQuery('.dropdown').each(function(){
        var parent = jQuery(this).children('a').eq(0);
        var dropdown = jQuery(this).find('.dropdown-toggle');
        var clone_text = parent.clone().text();
        parent.remove();
        dropdown.prepend('<span>' + clone_text + '</span>');
    });
}

meth.build_news_feed = function() {
    var feedMarkup = "";

    $.getJSON("http://ctl.columbia.edu/tag/mediathread/?feed=json&jsonp=?", function (data) {
        $.each(data, function (i, newsItem) {
            // remove time from date string
            newsItem.date = newsItem.date.replace(/\s\d{2}\:\d{2}/, "");

            feedMarkup += `<div class='views-row'>
              <div class='views-field views-field-title-1'>
                <span class='field-content'>${newsItem.title}</span>
              </div>
              <div class='views-field views-field-url-1'>
                <span class='field-content'>
                  <a href='${newsItem.permalink}'><h3>${newsItem.title}</h3></a>
                </span>
              </div>
              <div class='views-field views-field-created'>
                <span class='field-content'>${newsItem.date}</span>
              </div>
              <div class='views-field views-field-field-feed-item-description'>
                <div class='field-content'>${newsItem.excerpt}</div>
              </div>
              <div class='views-field views-field-url'>
                <span class='field-content read-more'>
                  <a href='${newsItem.permalink}'>Read More</a>
                </span>
              </div>
            </div>`;
        })
        $(".view-id-mediathread_news .view-content").append(feedMarkup);
    });
}

$(document).ready(function(){
    meth.bootstrap_drop_menu();
    meth.build_news_feed();
});


