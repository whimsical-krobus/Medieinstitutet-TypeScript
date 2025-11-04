import './style.css'
import { add, divide, greater, less, modulo, multiply, subtract } from './utils';

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

// Create a variable that uses greater than with arguments for x and y and display result in terminal, note that the result vill be a boolean expression:
const g = greater(5, 48);
console.log(g);

// Create a variable that uses less than with arguments for x and y and display result in terminal, note that the result vill be a boolean expression:
const l = less(10, 12);
console.log(l);