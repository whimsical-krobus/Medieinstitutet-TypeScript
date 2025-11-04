import './style.css'
import { add, decrement, divide, equal, eqvaluetype, greater, greaterequal, increment, less, lessequal, modulo, multiply, notequal, noteqvaluetype, subtract } from './utils';

/*================================== Arithmetic Operators ==================================*/
/* Note that for every arithmetic operator the result vill be a number */

// Create a variable that uses add with arguments for x and y and display result in terminal:
const a = add(5, 10);
console.log(a);

// Create a variable that uses subtract with arguments for x and y and display result in terminal:
const s = subtract(30, 7);
console.log(s);

// Create a variable that uses multiply with arguments for x and y and display result in terminal:
const m = multiply(8, 5);
console.log(m);

// Create a variable that uses division with arguments for x and y and display result in terminal:
const d = divide(12, 3);
console.log(d);

// Create a variable that uses modulo with arguments for x and y (y must be always be 2 for mod to work, otherwise it will act as division) and display result in terminal:
const mod = modulo(37, 2);
console.log(mod);

// Create a variable that uses increment with arguments for x and y and display result in terminal:
const inc = increment(5);
console.log(inc);

// Create a variable that uses decrement with arguments for x and y and display result in terminal:
const dec = decrement(57);
console.log(dec);

/*================================== Comparison Operators ==================================*/
/* Note that for every comparison operator the result vill be a boolean expression */

// Create a variable that uses equal to with arguments for x and y and display result in terminal:
const eq = equal(13, 7);
console.log("The equal to operation is:", eq);

// Create a variable that uses equal value or equal type to with arguments for x and y and display result in terminal:
const eqvalty = eqvaluetype(5,5);
console.log("The equal value or equal type operation is:", eqvalty);

// Create a variable that uses not equal to with arguments for x and y and display result in terminal:
const neq = notequal(47, 7);
console.log("The NOT equal to operation is:", neq);

// Create a variable that uses not equal value or not equal type to with arguments for x and y and display result in terminal:
const noeqvalty = noteqvaluetype(5,6);
console.log("The not equal value or not equal type operation is:", noeqvalty);

// Create a variable that uses greater than with arguments for x and y and display result in terminal:
const g = greater(5, 48);
console.log("The greater than operation is:", g);

// Create a variable that uses less than with arguments for x and y and display result in terminal:
const l = less(10, 12);
console.log("The less than operation is:", l);

// Create a variable that uses greater than or equal to with arguments for x and y and display result in terminal:
const geq = greaterequal(13, 13);
console.log("The greater than or equal to operation is:", geq);

// Create a variable that uses less than than or equal to with arguments for x and y and display result in terminal:
const leq = lessequal(17, 8);
console.log("The less than or equal to operation is:", leq);

/*================================== Assignment Operators ==================================*/
/*================================== Logical Operators ==================================*/