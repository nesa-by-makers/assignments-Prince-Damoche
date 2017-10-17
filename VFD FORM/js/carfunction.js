var car = {model: "camry", year: "2010", brand: "Toyota"};
car.getSpeed = function(){
    return 50;
}

console.log("This car was manufactured in " + car.brand + " in " + car.year);
console.log("The speed of the car is " + car.getSpeed() + " mph");