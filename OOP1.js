
const circle = {
    radius: 1,
    location: {   // Object inside an object
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();
console.log(circle.radius);
console.log(circle.location);
console.log(circle); // For running the complete object