var figc = require('figc');
var config = figc(__dirname + '/server.json');

var http = require('http');

var server = http.createServer(function (req, res) {
    res.end(config.msg + '\n');
});
server.listen(config.port);
