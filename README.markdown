figc
====

Merge config files with command-line arguments.

examples
========

server
------

server.js:

``` js
var figc = require('figc');
var config = figc(__dirname + '/config.json');

var http = require('http');

var server = http.createServer(function (req, res) {
    res.end(config.msg + '\n');
});
server.listen(config.port);
```

config.json:

``` js
{
    "port" : 8085,
    "msg" : "..."
}
```

default output:

```
$ node server.js &
[1] 19109
$ curl -sN http://localhost:8085
...
```

custom port and message:

```
$ node server.js --msg='beep boop' --port=8086 &
[1] 19114
$ curl -sN http://localhost:8086
beep boop
```

methods
=======

``` js
var figc = require('figc');
```

var config = figc(configFile, argv=process.argv)
------------------------------------------------

Load a json configuration from `configFile` and merge its contents with `argv`
which will be parsed by
[optimist](http://github.com/substack/node-optimist).

install
=======

With [npm](http://npmjs.org) do:

    npm install figc

license
=======

MIT/X11
