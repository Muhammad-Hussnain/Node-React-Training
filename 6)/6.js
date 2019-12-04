// Constructor
    function Foo(bar) {
    // always initialize all instance properties
    this.bar = bar;
    this.baz = 'baz'; // default value
    }
    // class methods
    Foo.prototype.fooBar = function() {
    };
    // export the class
    module.exports = Foo;

    // constructor call
    var object = new Foo('Hello');

    var Foo = function() { };
    Foo.prototype.bar = function() { console.trace(); };
    var f = new Foo();
    f.bar();

    function Baz() { };
    Baz.prototype.bar = function() { console.trace(); };
    var b = new Baz();
    b.bar();

    var Foo = function (name) { this.name = name; };
    Foo.prototype.data = [1, 2, 3]; // setting a non-primitive property
    Foo.prototype.showData = function () { console.log(this.name, this.data); };
    var foo1 = new Foo("foo1");
    var foo2 = new Foo("foo2");
    // both instances use the same default value of data
    foo1.showData(); // "foo1", [1, 2, 3]
    foo2.showData(); // "foo2", [1, 2, 3]
    // however, if we change the data from one instance
    foo1.data.push(4);
    // it mirrors on the second instance
    foo1.showData(); // "foo1", [1, 2, 3, 4]
    foo2.showData(); // "foo2", [1, 2, 3, 4]


    function Foo2(name) {
        this.name = name;
        this.data = [1, 2, 3]; // setting a non-primitive property
        };
        Foo2.prototype.showData = function () { console.log(this.name, this.data); };
        var foo1 = new Foo2("foo1");
        var foo2 = new Foo2("foo2");
        foo1.data.push(4);
        foo1.showData(); // "foo1", [1, 2, 3, 4]
        foo2.showData(); // "foo2", [1, 2, 3]


    function Animal(name) {
        this.name = name;
        };
        Animal.prototype.move = function(meters) {
        console.log(this.name+" moved "+meters+"m.");
        };
        function Snake() {
        Animal.apply(this, Array.prototype.slice.call(arguments));
        };
        Snake.prototype = new Animal();
        Snake.prototype.move = function() {
        console.log("Slithering...");
        Animal.prototype.move.call(this, 5);
        };
        var sam = new Snake("Sammy the Python");
        sam.move();