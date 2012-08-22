/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true*/
/*
 * BROWSER
 */
(function () {
  "use strict";

  var $ = require('ender')
    , _ = require('underscore')
    , domReady = require('domready')
    , pure = require('pure').$p
    , request = require('ahr2')
    , forEachAsync = require('forEachAsync')
    , serializeForm = require('serialize-form')
    ;

  function init() {
    $('.css-container').on('.css-nav span', 'click', function(){
      var newSection = $(this).attr('data-active')
        , currentSection = $('.js-container').attr('data-active')
        ;
      console.log(newSection, currentSection);
      $('.js-container').attr('data-active', newSection);
      $('.js-'+newSection).removeClass('css-hidden');
      $('.js-'+currentSection).addClass('css-hidden');
    });
    $('.css-container').on('.js-view-profile', 'click', function(){
      $('.js-overview').toggleClass('css-mini-overview');
      $('.js-details').toggleClass('css-faded');
    });
    sizeTitle();
  }
  
  function sizeTitle() {
    var size
      , desiredWidth = $('.js-title').width()
      , initial = $('.js-resizer').width()
      ;
    console.log('desire ' + desiredWidth);
//    size = parseInt($('.js-resizer').css('font-size'), 10) - 1;
    console.log('current', $('.js-resizer').width());
 //   console.log('size', size);
    while($('.js-resizer').width() > desiredWidth - 32) {
      size = parseInt($('.js-resizer').css('font-size'), 10) - 1;
      console.log('Newsize', size);
      $('.js-resizer').css('font-size', size+'px');
    }
    console.log('size', size);
    $('.js-title').css('font-size', (size-3)+'px');
    if(initial > desiredWidth - 32){
      $('.js-main-intro').css('padding-left', '16%'); 
    }
  }

  domReady(init);
}());
