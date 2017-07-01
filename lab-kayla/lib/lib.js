'use strict';

// const Buffer = require('buffer').Buffer;
const fs = require('fs');


module.exports = function() {
  if(paths.length > 3 || paths.length < 3) throw new error('must have 3 paths');
  let [one, two, three] = paths;
  let hexText = [];

  fs.readFile(one, function(err, data) {
    if(err) throw err;
    hexText.push(data.toString('hex', 0, 8));
    console.log(hexText);

      fs.readFile(two, function(err, data) {
        if(err) throw err;
        hexText.push(data.toString('hex', 0, 8));
        console.log(hexText);

          fs.readFile(three, function(err, data) {
            if(err) throw err;
            hexText.push(data.toString('hex', 0, 8));
            console.log(hexText);
          });
      });
  });



};
