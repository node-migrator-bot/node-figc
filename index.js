var optimist = require('optimist');
var hash = require('hashish');
var fs = require('fs');
var path = require('path');

module.exports = function (configFile, argv) {
    if (Array.isArray(argv)) {
        argv = optimist.parse
    }
    else if (argv === undefined) {
        argv = optimist.argv;
    }
    
    if (!path.existsSync(configFile)) {
        return argv;
    }
    else {
        var body = fs.readFileSync(configFile);
        var config = JSON.parse(body);
        return hash.merge(config, argv);
    }
};
