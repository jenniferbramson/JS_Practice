
/*
$(function() {
   $('#container').width(containerHeight * 2);
  });
    var containerWidth = $('#content').width();
    var containerHeight = $('#content').height();
    var searchpageWidth = $('#searchpagecontent').width();
    var searchpageHeight = $('#searchpagecontent').height();
      $contentWidth, scale * 100 + '%';
      $contentHeight, scale * 100 + '%';


$(document).ready(main);*/



$(document).ready(function(event) {

  $(function(){
    $('#startbutton').click(function(){
      var containerWidth = $('#container').width();
      var contentWidth = $('.content')
        $('#searchpage').animate({
        'right': containerWidth
      }, 200);

      $('#home').animate({
        'right': containerWidth
      }, 200);
    });
  });


  $(function() {
    // At this width, no scaling occurs. Above/below will scale appropriately.
    var defaultWidth = 1000;
    var contentWidth = $('.content').width();

    // This controls how fast the font-size scales. If 1, will scale at the same 
    // rate as the window (i.e. when the window is 50% of the default width, the 
    // font-size will be scaled 50%). If I want the font to not shrink as rapidly 
    // when the page gets smaller, I can set this to a smaller number (e.g. at 0.5,
    // when the window is 50% of default width, the font-size will be scaled 75%).
    var scaleFactor =0.75;

    // choose a maximum and minimum scale factor (e.g. 4 is 400% and 0.5 is 50%)
    var maxScale = 2;
    var minScale = 0;

    //the resize function
    var $html = $("html");

    var setHtmlScale = function() {

      var scale = 1 + scaleFactor * ($html.width() - defaultWidth) / defaultWidth;
      if (scale > maxScale) {
        scale = maxScale;
      }
      else if (scale < minScale) {
        scale = minScale;
      }

      $html.css('font-size', scale * 100 + '%');
    };

    $(window).resize(function() {
      setHtmlScale();
    });
  /*$(window).risize(function(){
      $('.content').width($window).width();
      $('#container').width($window).width();
  });*/
    setHtmlScale();
  });
});