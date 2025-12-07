// 2 inputs le rahe hain
let input1 = prompt("Enter first number:");
let input2 = prompt("Enter second number:");

// dono inputs ko number me convert karte hain
let num1 = Number(input1);
let num2 = Number(input2);

// check karte hain ki dono valid numbers hain ya nahi
if (!isNaN(num1) && !isNaN(num2)) {

	let sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
} else {
    alert("Invalid input. Please enter a valid number.");
}
