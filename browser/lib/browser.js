/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true*/
/*
 * BROWSER
 */
(function () {
  "use strict";

  var $ = require('ender')
    , window = require('window')
    , domReady = require('domready')
    , request = require('ahr2')
    , navigator = window.navigator
    ;

  function init() {
    $(window).resize(function() {
      sizeContainer();
    });
    $('body').on('.js-view-profile', 'click', function(){
      $('.js-overview').toggleClass('css-mini-overview');
      $('.js-details').toggleClass('css-faded');
    });
    $('body').on('.js-get-directions', 'click', function(){
      console.log('click');
      mapLocation();
    });
    sizeContainer(true);
  }
  
  function mapLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(gotLocation, errLocation);
    }
    function gotLocation(position) {
      console.log('gotLocation');
      makeMap(position.coords.latitude, position.coords.longitude);
    }
    function errLocation() {
      console.log('err');
    }
  }
  
  function makeMap(latitude, longitude) {
    var link = 'https://maps.google.com/maps?f=d&saddr='+latitude+','+longitude+'&daddr=637+N+300+E+provo';
    console.log(link);
    $('.js-link').html('<span>If your popup blocker is on </span><a class="js-generated-link" target="_blank" href="'+link+'">Get Directions Here</a>');
    $('.js-generated-link').click();
  }
  
  function sizeContainer(first) {
    var height = parseInt(window.innerHeight, 10) - 80;
    if((height - 20) > parseInt($('.parent').attr('data-height'), 10)){
      $('.parent').css('height', height+'px');
    }
  }

  domReady(init);
}());
