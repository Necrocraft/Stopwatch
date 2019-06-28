
// Factory Function
function createCircle(radius) {   // We create a factory function, which has all the properties
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1); // We create an object for the function and call it's properties.
circle.draw();
console.log(circle.radius);

// Constructor Function
function Circle(radius) {
    this.radius = radius;   // We use 'this' keyword together with 'new' operator
    this.draw = function() {
        console.log('draw');
    }
}
const circle2 = new Circle(4);
circle2.draw();
console.log(circle2.radius);