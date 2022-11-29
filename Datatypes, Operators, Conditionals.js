/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

//Undefined: It dosen't have a defined content. Is the default setup for a variable in JavaScript.
//Null: It have a defined content which is emptyness or void.
//String: This is a line of text.
//Number: It only contains numbers and no text. This include decimal numbers and have a limit.
//Boolean: This represent variables as true and false.
//BigInt: This represent numbers outside the limit of the numberic variables.

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

//A variable is anything that can vary and we can change anytime to achive different results.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let addition = 12 + 20;
console.log(addition);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let numeberx = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

let subtracion = 12 - numeberx;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

let name1 = "john";
let name2 = "John";

let verifyName = name1 === name2;
let verifyName2 = name2.toLowerCase() === name1;
console.log("Verify", verifyName);
console.log("Verify", verifyName2);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

let variablex = 9;
console.log(variablex);

if (variablex === 1) {
    console.log("one")
}
else if (variablex === 2) {
    console.log("two")
}
else if (variablex === 3) {
    console.log("tree")
}
else if (variablex === 4) {
    console.log("four")
}
else if (variablex === 5) {
    console.log("five")
}
else if (variablex === 6) {
    console.log("six")
}
else if (variablex === 7) {
    console.log("seven")
}
else if (variablex === 8) {
    console.log("eigth")
}
else if (variablex === 9) {
    console.log("nine")
}
else if (variablex === 10) {
    console.log("ten")
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

console.log("\nTernary:\n");

let variable9 = 9;

let isNumber9 = (variable9 === 9) ? "Yes" : "No";

console.log("Is this the number 9?", isNumber9);
