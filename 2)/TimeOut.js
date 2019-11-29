setTimeout(function() {
    console.log('Timeout 0.0001 ran at ' + new Date().toTimeString());
    }, 0.0001);

    setTimeout(function() {
    console.log('Timeout 5000 ran at ' + new Date().toTimeString());
    }, 5000);

    setTimeout(function() {
        console.log('Timeout 1000 ran at ' + new Date().toTimeString());
        }, 1000);

    i=0;
    while(i<50)    
        {setTimeout(function() {
        console.log('Timeout 0.1 ran at ' + new Date().toTimeString());
        }, 0.1);
        i++
        }

    var start = new Date();
    console.log('Enter loop at: '+start.toTimeString());
    // run a loop for 4 seconds
    var i = 0;
    // increment i while (current time < start time + 4000 ms)
    while(new Date().getTime() < start.getTime() + 10000) {
    i++;
    }
    console.log('Exit loop at: '
    +new Date().toTimeString()
    +'. Ran '+i+' iterations.');
