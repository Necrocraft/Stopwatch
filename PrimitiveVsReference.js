
let number = 10;

function increase(number) {   // Primitive Type
    ++number;
}

increase(number);
console.log(number);


let obj = { value: 10 };    // Reference Type

function increase(obj) {
        obj.value++;
    }
increase(obj);
console.log(obj);