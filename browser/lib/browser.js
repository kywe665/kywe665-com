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
    , alert = window.alert
    ;

  function init() {
    if(window.location.pathname.length <= 1 || window.location.pathname === '/index.html') {
      $(window).resize(function() {
        sizeContainer();
      });
      $('body').on('.js-view-profile', 'click', function(){
        $('.js-overview').toggleClass('css-mini-overview');
        $('iframe').toggleClass('css-faded');
        $('.css-download').toggleClass('css-hidden');
      });
      window.onorientationchange = function() {
        sizeContainer();
      };
      sizeContainer(true);
    }
    mapLocation();
  }
  
  function mapLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(gotLocation, errLocation);
    }
    function gotLocation(position) {
      console.log('gotLocation');
      makeMap(position.coords.latitude, position.coords.longitude);
    }
    function errLocation(error) {
      console.error(error);
      $('.js-map').addClass('js-deny');
    }
  }
  
  function makeMap(latitude, longitude) {
    var link = 'https://maps.google.com/maps?f=d&saddr='+latitude+','+longitude+'&daddr=637+N+300+E+provo';
    console.log(link);
    $('.js-map').attr('href', link);
  }
  
  function sizeContainer(first) {
    var height = parseInt(window.innerHeight, 10) - 80;
    if((height - 20) > parseInt($('.parent').attr('data-height'), 10)){
      $('.parent').css('height', height+'px');
    }
    else{
      $('.parent').css('height', '430px');
    }
  }

  domReady(init);
}());
