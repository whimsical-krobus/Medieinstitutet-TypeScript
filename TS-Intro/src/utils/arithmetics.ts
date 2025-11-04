/*================================== Arithmetic Operators ==================================*/

// Arrow function to perform Addition (+) calculation:
export const add = (x: number, y: number): number => {
    return x + y;
}

// Regular function to perform Subtraction (-) calculation:
export function subtract(x: number, y: number): number {
  return x - y;
}

// Arrow function to perform Multiplication (*) calculation:
export const multiply = (x: number, y: number): number => {
  return x * y;
}

// Arrow function to perform Division (/) calculation:
export const divide = (x: number, y: number): number => {
  return x / y;
}

// Arrow function to perform Modulus (%) calculation:
export const modulo = (x: number, y: number): number => {
  return x % y;
}

// Arrow function to perform Increment (++) calculation:
export const increment = (x: number): number => {
  return ++x;
}

// Arrow function to perform Decrement (--) calculation:
export const decrement = (x: number): number => {
  return --x;
}