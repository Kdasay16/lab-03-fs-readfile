'use strict';

// const Buffer = require('buffer').Buffer;
const fs = require('fs');
module.exports = exports = {};

module.exports = function(one, two, tree, callback) {
  let hexText = [];

  fs.readFile(one, function(err, data) {
    if(err) throw err;
    hexText.push(data.toString('hex', 0, 8));
    console.log(data.toString('hex', 0, 8));
  });

  fs.readFile(two, function(err, data) {
    if(err) throw err;
    console.log(data.toString('hex', 0, 8));
  });

  fs.readFile(tree, function(err, data) {
    if(err) throw err;
    console.log(data.toString('hex', 0, 8));
  });

  callback
};
