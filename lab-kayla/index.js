'use strict';
// two functions leading to the data

const readFiles = require('./lib/lib.js');
const paths = [
  `${__dirname}/dataFile/dataOne.txt`,
  `${__dirname}/dataFile/dataTwo.txt`,
  `${__dirname}/dataFile/dataThree.txt`,
];

readFiles();
