// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 1:\n");

let gender = "male";

let isMale = (gender === "male") ? "Yes" : "No";

console.log("Is male?", isMale);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 2:\n");

let number1 = 8;
let number2 = 2;

let isNumber8 = ((number1 || number2) === 8) ? "Yes" : "No";
console.log("Is one of them the number 8?", isNumber8);

let sum = number1 + number2;
let sub = number1 - number2;

let isSumSub8 = ((sum || sub) === 8) ? "Yes" : "No";
console.log("Is the their addition or subtracion 8?", isSumSub8);


/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 3:\n");

let word1 = "Example1";
let word2 = "Example2";

let concatenation = word1 + word2;

console.log(concatenation);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 4:\n");

let variable1 = 9
let variable2 = 2
let variable3 = 7

if (variable1 > variable2 && variable2 > variable3) {
    console.log(variable1, "is the highest number", variable2, "is the second highest number and", variable3, "is the lowest number");
} else if (variable1 > variable3 && variable3 > variable2) {
    console.log(variable1, "is the highest number", variable3, "is the second highest number and", variable2, "is the lowest number");
} else if (variable2 > variable1 && variable1 > variable3) {
    console.log(variable2, "is the highest number", variable1, "is the second highest number and", variable3, "is the lowest number");
} else if (variable2 > variable3 && variable3 > variable1) {
    console.log(variable2, "is the highest number", variable3, "is the second highest number and", variable2, "is the lowest number");
} else if (variable3 > variable1 && variable1 > variable2) {
    console.log(variable3, "is the highest number", variable1, "is the second highest number and", variable2, "is the lowest number");
} else if (variable3 > variable2 && variable2 > variable1) {
    console.log(variable3, "is the highest number", variable2, "is the second highest number and", variable1, "is the lowest number");
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 5:\n");

let averageNumber1 = 21;
let averageNumber2 = 32;

let averageResult = (averageNumber1 + averageNumber2) / 2;

console.log("Average Number\n", averageResult);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 6:\n");

let longString1 = "ExampleExampleExample"
let longString2 = "ExampleExample"

if (longString1 > longString2) {
    console.log("First is the longests");
} else {
    console.log("Second is the longests");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 7:\n");

let integerOrNot = 3

let integerOrNotCheck = typeof integerOrNot;

if (integerOrNotCheck === "number") {
    console.log("Is an integer");
} else {
    console.log("Is not integer");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 8:\n");

let numberpercent = 400;
let percent = 20;

let percentResult = numberpercent * percent / 100;

console.log("Percent of the numbers given:", percentResult);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nEx 9:\n");

numberEOO = 8;

let evencheck = (numberEOO % 2 === 0) ? "Even" : "Odd";


console.log("Number check:", evencheck);