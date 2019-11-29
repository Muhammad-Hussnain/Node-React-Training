var obj = {
    id: "An object",
    f1: function() {
    console.log(this);
    }
    };
    obj.f1();

function fn() {
    console.log(this.toString());
    console.log(this == global);
    }
    fn();

function f1() {
    console.log(this);
    }
    var obj1 = { id: "Foo"};
    f1.call(obj1);
    var obj2 = { id: "Bar"};
    f1.apply(obj2);

function f3(a, b) {
    console.log(this, a, b);
    }
    var obj1 = { id: "Foo"};
    f3.call(obj1, 'A', 'B');
    var obj2 = { id: "Bar"};
    f3.apply(obj2, [ 'A', 'B' ]);


var obj = {
    id: "xyz",
    printId: function() {
    console.log('The id is '+ this.id + ' '+ this.toString());
    }
    };
    setTimeout(function() { obj.printId() }, 100);
    var callback = function() { obj.printId() };
    callback();


var objct = {
    items: ["a", "b", "c"],
    process: function() {
    var self = this; // assign this to self
    this.items.forEach(function(item) {
    // here, use the original value of this!
    self.print(item);
    });
    },
    print: function(item) {
    console.log('*' + item + '*');
    }
    };
    objct.process();

var data = [];
for (var i = 0; i < 5; i++) {
data[i] = function foo() {
console.log(i);
};
}
data[0](); data[1](); data[2](); data[3](); data[4]();

var a = "foo";
function grandparent() {
var b = "bar";
function parent() {
function nested() {
console.log(a);
console.log(b);
}
nested();
}
parent();
}
grandparent();


var a = "foo";
function grandparent() {
var b = "bar";
function parent() {
var b = "b redefined!";
function nested() {
console.log(a);
console.log(b);
}
nested();
}
parent();
}
grandparent();

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(isNaN(NaN));

console.log("Input is 123 - ", !isNaN(parseInt("123", 10)));
console.log("Input is abc - ", !isNaN(parseInt("abc", 10)));
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);