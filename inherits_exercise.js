Function.prototype.inherits = function (SuperClass) {
    function Surrogate () {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function MovingObject() {};
  
function Ship(name) {
  this.name = name;
};
Ship.inherits(MovingObject);

function Asteroid(name) {
  this.name = name;
};
Asteroid.inherits(MovingObject);
  
let titanic = new Ship("titanic");
let ast = new Asteroid("ast");

MovingObject.prototype.move = function () {
  console.log("moving");
};

Ship.prototype.float = function () {
  console.log("floating");
};

Asteroid.prototype.fall = function () {
  console.log("fall");
};

titanic.float();
ast.fall();

titanic.fall();
ast.float();

titanic.move();
ast.move();

// Function.prototype.inherits using Object.create

Function.prototype.inherits = function (SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};