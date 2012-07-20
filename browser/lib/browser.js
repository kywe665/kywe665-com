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
      console.log($(this).attr('data-active'));
      $('.js-container').attr('data-active', $(this).attr('data-active'));
    });
  }

  domReady(init);
}());
