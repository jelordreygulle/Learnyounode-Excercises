'use strict'

const bl = require('bl');
const http = require('http');
const file = process.argv[2];

http.get(file, function (response) {
    response.pipe(bl(function(err , data) {
        if(err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)

    }))
})
