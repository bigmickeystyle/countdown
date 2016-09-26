// var events = require('events');

var EventEmitter = require('events').EventEmitter;


function Countdown(n){
    var self = this;
    function timer(){
        setTimeout(function(){
            self.emit('secondElapsed', n);
            n--;
            if (n >= 0) {
                timer(n);
            }
        }, 1000);
    }
    timer();
}

Countdown.prototype = new EventEmitter;

module.exports.Countdown = Countdown;
