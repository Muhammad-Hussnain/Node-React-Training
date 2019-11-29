function process(argv) {
    if(argv.indexOf('help')) {
    console.log('This is the help text.');
    }
    }
    process(['foo', 'bar', 'help']);

var arr = ["1", "2", "3"];
// Search the array of keys
console.log(arr.indexOf(2)); // returns -1

console.log(2 == "2"); // true
console.log(2 === "2"); // false
var arr = ["1", "2", "3"];
// Search the array of keys
console.log(arr.indexOf(2)); // returns -1
console.log(arr.indexOf("2")); // returns 1

var lookup = { 12: { foo: 'b'}, 13: { foo: 'a' }, 14: { foo: 'c' }};
console.log(Object.keys(lookup).indexOf(12) > -1); // false
console.log(Object.keys(lookup).indexOf(''+12) > -1); // true
console.log(Object.keys(lookup).indexOf('12') > -1); 

var items = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
// only include items with even id's
items = items.filter(function(item){
return (item.id % 2 == 0);
});
console.log(items);
// prints [ {id: 2 }, { id: 4} ]

var types = ['text/html', 'text/css', 'text/javascript'];
var string = 'text/javascript; encoding=utf-8';
if (types.some(function(value) {
return string.indexOf(value) > -1;
})) {
console.log('The string contains one of the content types.');
}

var a = [ 'a', 'b', 'c' ];
var b = [ 1, 2, 3 ];
console.log( a.concat(['d', 'e', 'f'], b) );
console.log( a.join('! ') );
console.log( a.slice(1, 3) );
console.log( a.reverse() );
console.log( ' --- ');
var c = a.splice(0, 2);
console.log( a, c );
var d = b.splice(1, 1, 'foo', 'bar');
console.log( b, d );

var group = { 'Alice': { a: 'b', b: 'c' }, 'Bob': { a: 'd' }};
var people = Object.keys(group);
people.forEach(function(person) {
var items = Object.keys(group[person]);
items.forEach(function(item) {
var value = group[person][item];
console.log(person+': '+item+' = '+value);
});
});

var arr = [
    { item: 'Xylophone' },
    { item: 'Carrot' },
    { item: 'Apple'}
    ];
    arr = arr.sort(function (a, b) {
    return a.item.localeCompare(b.item);
    });
    console.log( arr );

var obj = { a: "value", b: false };
// different results when the value evaluates to false
console.log( !!obj['b'] );
console.log( !!obj.b );
console.log( 'b' in obj );
console.log( obj.hasOwnProperty('b') );

function match(item, filter) {
    var keys = Object.keys(filter);
    // true if any true
    return keys.some(function (key) {
    return item[key] == filter[key];
    });
    }
    var objects = [ { a: 'a', b: 'b', c: 'c'},
    { b: '2', c: '1'},
    { d: '3', e: '4'},
    { e: 'f', c: 'c'} ];
    objects.forEach(function(obj) {
    console.log('Result: ', match(obj, { c: 'c', d: '3'}));
    });

function f1(a, b) {
    console.log(this, a, b);
    }
    var obj1 = { id: "Foo"};
    f1.call(obj1, 'A', 'B'); // The value of this is changed to obj1
    var obj2 = { id: "Bar"};
    f1.apply(obj2, [ 'A', 'B' ]); // The value of this is changed to obj2

var doSomethingElse = function(a, b) {
    console.log(a, b);
    console.log(arguments);
    };
    doSomethingElse(1, 2, 3, 'foo');

// JSON.parse() can be used to convert JSON data to a Javascript Object or Array:
// returns an Object with two properties
var obj = JSON.parse('{"hello": "world", "data": [ 1, 2, 3 ] }');
console.log(obj.data);
// JSON.stringify() does the opposite:
var obj = { hello: 'world', data: [ 1, 2, 3 ] };
console.log(JSON.stringify(obj));