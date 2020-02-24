
'use strict'

const fs = require('fs');
const file = process.argv[2];

const contents = fs.readFileSync(file, 'utf8')
const lines = contents.toString().split('\n').length - 1

console.log(lines)

