var name;
name = "John";
var age = 23;

var message = name + " is " + age  +  "years old";

var first_number = 23;
var second_number = 24;
var third_number = 52;

var sum = first_number + second_number + third_number;
var average = sum / 3;

console.log("The sum is " + sum);
console.log("The average is " + average);

var IsJohnYoung = age < 77;
console.log(IsJohnYoung);
if (IsJohnYoung)
{
	console.log("John is a younger person.")
}
else if (age == 98) {
	console.log("John is not a younger person.")
}
else {
	console.log("John is not a younger person.")
}


while (age > 0) {
	console.log(age);
	age = age -1;

}

for (var position=20; position>0;position=position-2) {
	console.log(position);
}
for (var number = 0; number < 100; number = number + 1) {
	if(number % 3 == 0) {
		console.log(number + " is divisible by 3");
	}
	else {
		console.log(number + " is not divisble by 3");
	}
}
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}