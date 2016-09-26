var poop = require('./countdown');

new poop.Countdown(10).on('secondElapsed', function(n) {
    if (n) {
        console.log(n + '!');
    } else {
        console.log('Lift off!');
    }
});
