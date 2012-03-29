var test = require('tap').test;
var figc = require('../');

test('deep', function (t) {
    t.deepEqual(
        figc(__dirname + '/deep.json', [ '--foo.x', '5' ]),
        {
            beep : 'boop',
            foo : {
                bar : { baz : 'quux' },
                x : 5,
            },
            xs : [ 1, 2, 3 ]
        }
    );
    
    t.deepEqual(
        figc(__dirname + '/deep.json', [ '--xs.1', '22' ]),
        {
            beep : 'boop',
            foo : {
                bar : { baz : 'quux' },
            },
            xs : [ 1, '22', 3 ]
        }
    );
    
    t.deepEqual(
        figc(__dirname + '/deep.json', [ '--beep', 'o_O' ]),
        {
            beep : 'o_O',
            foo : {
                bar : { baz : 'quux' },
            },
            xs : [ 1, 2, 3 ]
        }
    );
    
    t.end();
});
