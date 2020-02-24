
'use strict'

const fs = require('fs')
const file = process.argv[2]


fs.readFile(file, 'utf8', function (err, contents) {
    if (err) {
        return console.log("err", err)
    }
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
