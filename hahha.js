var Readable = require('stream').Readable;
var util = require('util');
util.inherits(Counter, Readable);

function Counter(opt) {
    Readable.call(this, opt);
    this._max = 50000;
    this._index = 1;
}

Counter.prototype._read = function() {
    var i = this._index++;
    if (i > this._max)
        this.push(null);
    else {
        var str = '' + i;
        var buf = new Buffer(str, 'ascii');
        console.log(str);
        this.push(buf);
    }
};
var m = new Counter();
m._read();

