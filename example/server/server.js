var config = require('../../')(__dirname + '/config.json');

var http = require('http');

var server = http.createServer(function (req, res) {
    res.end(config.msg + '\n');
});
server.listen(config.port);
