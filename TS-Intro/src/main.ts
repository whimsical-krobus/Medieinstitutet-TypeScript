import { add, decrement, divide, increment, modulo, multiply, subtract } from './arithmetic';
import { equal, eqvaluetype, greater, greaterequal, less, lessequal, notequal, noteqvaluetype } from './comparisons';
import './style.css'
import { addTo, assign, divideAssign, exponent, multiplyTo, remainder, subFrom } from './utils';


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
/* Note that for every arithmetic operator the result vill be a number */

// Create a variable that uses add and assign to with arguments for x and y and display result in terminal:
const at = addTo(5, 2);
console.log("By adding the value of y to the value of x, we get:", at);

// Create a variable that uses subtract from and assign to with arguments for x and y and display result in terminal:
const sf = subFrom(37, 20);
console.log("By removing the value of y from the value of x, we get:", sf);

// Create a variable that uses multiply and assign to with arguments for x and y and display result in terminal:
const mt = multiplyTo(5, 2);
console.log("By multiplying the value of y to the value of x, we get:", mt);

// Create a variable that uses an exponential function with arguments for x and y and display result in terminal:
const ex = exponent(10, 3);
console.log("By multiplying the value of the base: x to the value of the value of the exponent: y, we get:", ex);

// Create a variable that uses divide and assign to with arguments for x and y and display result in terminal:
const divAss = divideAssign(2, 8);
console.log("By dividing the value of x with the value of y, we get:", divAss);

// Create a variable that uses divide and assign remainder to with arguments for x and y and display result in terminal:
const rem = remainder(37, 2);
console.log("The remainder of x divided by y is:", rem);

// Create a variable that uses a simple assign to with arguments for x and y and display result in terminal:
const as = assign(2, 1);
console.log("Assign value of y to x:", as);

/*================================== String Assignment Operators ==================================*/

// Create a variable that uses simple assignment to assign a value to a string variable:

// Create a variable that uses addition assignment to concatenate a value to another string:

/*================================== Logical Operators ==================================*/