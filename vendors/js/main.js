(function($){
    'use strict';   

   jQuery(document).ready(function($){
    
 
    // skill circle progress bar
    var skillLevel1 = $('.skill-item .first').data('skill-level');
    var skillLevel2 = $('.skill-item .second').data('skill-level');
    var skillLevel3 = $('.skill-item .third').data('skill-level');
    var skillLevel4 = $('.skill-item .fourth').data('skill-level');
    //first.circle
    $('.first.circle').circleProgress({
      value: '0.' + skillLevel1,
      size: 180,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#30bae7"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(skillLevel1 * progress) + '<span>%</span>');
    });

    //second.circle
    $('.second.circle').circleProgress({
      value: '0.' + skillLevel2,
      size: 180,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#d74680"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(skillLevel2 * progress) + '<i>%</i>');
    });

    //third.circle
    $('.third.circle').circleProgress({
      value: '0.' + skillLevel3,
      size: 180,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#15c7a8"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(skillLevel3 * progress) + '<span>%</span>');
    });

    //fourth.circle
    $('.fourth.circle').circleProgress({
      value: '0.' + skillLevel4,
      size: 180,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#eb7d4b"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html(Math.round(skillLevel4 * progress) + '<span>%</span>');
    });

   });
  
})(jQuery);	 

//Mixitup

//Wow

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();