var test = require('tap').test;
var figc = require('../');

test('configs', function (t) {
    t.deepEqual(
        figc(__dirname + '/server.json', []),
        { port : 8085, msg : '...' }
    );
    
    t.deepEqual(
        figc(__dirname + '/server.json', [ '--msg', 'beep' ]),
        { port : 8085, msg : 'beep' }
    );
    
    t.deepEqual(
        figc(__dirname + '/server.json', [ '--msg', 'beep', '--o_O' ]),
        { port : 8085, msg : 'beep', o_O : true }
    );
    
    t.end();
});
