const net = require('net')
const moment = require('moment')
const port = process.argv[2]

const server = net.createServer(function (socket) {
    socket.end(moment().format("YYYY-MM-DD HH:mm") + "\n")
}).listen(port)

