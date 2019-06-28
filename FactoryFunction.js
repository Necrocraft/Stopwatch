
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
const circle2 = createCircle(5); // Avoid creating and duplication the same object, just give the different value in the function while creating another object.
// Different from OOP1.js in respect that, then we need to copy the complete object.
circle2.draw();
console.log(circle2.radius);