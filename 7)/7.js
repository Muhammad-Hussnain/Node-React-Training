    // Async task (same in all examples in this chapter)
    function async(arg, callback) {
    console.log('do something with \''+arg+'\', return 1 sec later');
    setTimeout(function() { callback(arg * 2); }, 1000);
    }
    // Final task (same in all the examples)
    function final() { console.log('Done', results); }
    // A simple async series:
    var items = [ 1, 2, 3, 4, 5, 6 ];
    var results = [];
    function series(item) {
    if(item) {
    async( item, function(result) {
    results.push(result);
    return series(items.shift());
    });
    } else {
    return final();
    }
    }
    series(items.shift());


    function async2(arg, callback) {
        console.log('do something with \''+arg+'\', return 1 sec later');
        setTimeout(function() { callback(arg * 2); }, 1000);
        }
    function final2() { console.log('Done', results2); }
    var items2 = [ 1, 2, 3, 4, 5, 6 ];
    var results2 = [];
    items2.forEach(function(item) {
    async(item, function(result){
    results2.push(result);
    if(results2.length == items2.length) {
    final2();
    }
    })
    });


    function async3(arg, callback) {
        console.log('do something with \''+arg+'\', return 1 sec later');
        setTimeout(function() { callback(arg * 2); }, 1000);
        }
    function final3() { console.log('Done', results3); }
    var items3 = [ 1, 2, 3, 4, 5, 6 ];
    var results3 = [];
    var running = 0;
    var limit = 2;
    function launcher() {
    while(running < limit && items3.length > 0) {
    var item = items3.shift();
    async3(item, function(result) {
    results3.push(result);
    running--;
    if(items3.length > 0) {
    launcher();
    } else if(running == 0) {
    final3();
    }
    });
    running++;
    }
    }
    launcher();


    function series(callbacks, last) {
        var results = [];
    function next() {
    var callback = callbacks.shift();
    if(callback) {
    callback(function() {
    results.push(Array.prototype.slice.call(arguments));
    next();
    });
    } else {
    last(results);
    }
    }
    next();
    }
    // Example task
    function async(arg, callback) {
    var delay = Math.floor(Math.random() * 5 + 1) * 100; // random ms
    console.log('async with \''+arg+'\', return in '+delay+' ms');
    setTimeout(function() { callback(arg * 2); }, delay);
    }
    function final(results) { console.log('Done', results); }
    series([
    function(next) { async(1, next); },
    function(next) { async(2, next); },
    function(next) { async(3, next); },
    function(next) { async(4, next); },
    function(next) { async(5, next); },
    function(next) { async(6, next); }
    ], final);


    function fullParallel(callbacks, last) {
    var results = [];
    var result_count = 0;
    callbacks.forEach(function(callback, index) {
    callback( function() {
    results[index] = Array.prototype.slice.call(arguments);
    result_count++;
    if(result_count == callbacks.length) {
    last(results);
    }
    });
    });
    }
    // Example task
    function async(arg, callback) {
    var delay = Math.floor(Math.random() * 5 + 1) * 100; // random ms
    console.log('async with \''+arg+'\', return in '+delay+' ms');
    setTimeout(function() { callback(arg * 2); }, delay);
    }
    function final(results) { console.log('Done', results); }
    fullParallel([
    function(next) { async(1, next); },
    function(next) { async(2, next); },
    function(next) { async(3, next); },
    function(next) { async(4, next); },
    function(next) { async(5, next); },
    function(next) { async(6, next); }
    ], final);



    function limited(limit, callbacks, last) {
    var results = [];
    var running = 1;
    var task = 0;
    function next(){
    running--;
    if(task == callbacks.length && running == 0) {
    last(results);
    }
    while(running < limit && callbacks[task]) {
    var callback = callbacks[task];
    (function(index) {
    callback(function() {
    results[index] = Array.prototype.slice.call(arguments);
    next();
    });
    })(task);
    task++;
    running++;
    }
    }
    next();
    }
    // Example task
    function async(arg, callback) {
    var delay = Math.floor(Math.random() * 5 + 1) * 1000; // random ms
    console.log('async with \''+arg+'\', return in '+delay+' ms');
    setTimeout(function() {
    var result = arg * 2;
    console.log('Return with \''+arg+'\', result '+result);
    callback(result);
    }, delay);
    }
    function final(results) { console.log('Done', results); }
    limited(3, [
    function(next) { async(1, next); },
    function(next) { async(2, next); },
    function(next) { async(3, next); },
    function(next) { async(4, next); },
    function(next) { async(5, next); },
    function(next) { async(6, next); }
    ], final);

    