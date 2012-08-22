/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true*/
/*
 * BROWSER
 */
(function () {
  "use strict";

  var $ = require('ender')
    , _ = require('underscore')
    , window = require('window')
    , domReady = require('domready')
    , pure = require('pure').$p
    , request = require('ahr2')
    , forEachAsync = require('forEachAsync')
    , serializeForm = require('serialize-form')
    , navigator = window.navigator
    ;

  function init() {
    $('.css-container').on('.css-nav span', 'click', function(){
      var newSection = $(this).attr('data-active')
        , currentSection = $('.js-container').attr('data-active')
        ;
      $('.js-container').attr('data-active', newSection);
      $('.js-'+newSection).removeClass('css-hidden');
      $('.js-'+currentSection).addClass('css-hidden');
      if(newSection === 'contact') {
        injectMap();
      }
    });
    $('.css-container').on('.js-view-profile', 'click', function(){
      $('.js-overview').toggleClass('css-mini-overview');
      $('.js-details').toggleClass('css-faded');
    });
    $('.css-container').on('.js-get-directions', 'click', function(){
      console.log('click');
      mapLocation();
    });
    sizeTitle();
  }
  
  function injectMap() {
    if($('.js-map-container .js-map').html().length < 1) {
      console.log('injectingMap');
      var iframe = '<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=637+N+300+E+Provo&amp;aq=&amp;sll=39.499761,-111.547028&amp;sspn=5.204832,9.876709&amp;ie=UTF8&amp;hq=&amp;hnear=637+N+300+E,+Provo,+Utah+84606&amp;t=m&amp;ll=40.250184,-111.653109&amp;spn=0.022928,0.036478&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>';
      $('.js-map-container .js-map').html(iframe);
    }
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
  
  function sizeTitle() {
    var size
      , desiredWidth = $('.js-title').width()
      , initial = $('.js-resizer').width()
      ;
    console.log('desire ' + desiredWidth);
    console.log('current', $('.js-resizer').width());
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
