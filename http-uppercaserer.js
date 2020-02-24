const map = require('through2-map')
const http = require('http')
const port = Number(process.argv[2])

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send a POST recleaquest')
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)

}).listen(port)
