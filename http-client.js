'use strict'

const http = require('http');
const file = process.argv[2]

http.get(file, function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('err', console.error)
