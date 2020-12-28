Function.prototype.inherits = function (SuperClass) {
    function Surrogate () {}
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject(name) {
    this.name = name;
    function move () {
        console.log("moving")
    }
}

function Ship(name) {
    MovingObject.call(this, name);
    function float () {
        console.log("floating");
    }
}
Ship.inherits(MovingObject);

function Asteroid(name) {
    MovingObject.call(this, name);
    function fall() {
        console.log("fall");
    }
}
Asteroid.inherits(MovingObject);

