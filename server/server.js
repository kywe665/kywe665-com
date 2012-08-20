/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true*/
/*
 * SERVER
 */
(function () {
  "use strict";

  var steve = require('./steve')
    , connect = require('connect')
    , _ = require('underscore')
    , forEachAsync = require('forEachAsync')
    , app = connect.createServer()
    , fs = require('fs')
    ;


  function getResume(req, res) {
    fs.readFile(__dirname + '/../static/images/resume.pdf',
    function (err, data) {
      if (err) {
        console.log(err);
        res.writeHead(500);
        return res.end('Error loading resume: '+err.toString());
      }
      res.writeHead(200);
      res.end(data);
    });
  }

  function router(rest) {
    rest.get('/resume', getResume);
  }

  app
    .use(steve)
    .use(connect.router(router))
    ;

  module.exports = app;
}());
