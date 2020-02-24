'use strict'

const fs = require('fs')
const path = require('path')
const folder = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    files.forEach(file => {
        if (path.extname(file) == '.md') {
            console.log(file)
        }
    });
})