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
    });
  }

  domReady(init);
}());
