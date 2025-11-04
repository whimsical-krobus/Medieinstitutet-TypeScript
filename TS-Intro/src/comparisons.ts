/*================================== Comparison Operators ==================================*/

// Arrow function to perform equal to (==) calculation:
export const equal = (x:number, y:number): boolean => {
  return x == y;
}

// Arrow function to perform equal value and equal type (===) calculation: 
export const eqvaluetype = (x: number, y: number): boolean => {
  return x === y;
}

// Arrow function to perform not equal to (!=) calculation: 
export const notequal = (x:number, y:number): boolean => {
  return x != y;
}

// Arrow function to perform not equal value or not equal type (!==) calculation: 
export const noteqvaluetype = (x: number, y: number): boolean => {
  return x !== y;
}

// Arrow function to perform greater than (>) calculation:
export const greater = (x: number, y: number): boolean => {
  return x > y;
}

// Arrow function to perform less than (<) calculation:
export const less = (x: number, y: number): boolean => {
  return x < y;
}

// Arrow function to perform greater than or equal to (>=) calculation:
export const greaterequal = (x: number, y: number): boolean => {
  return x >= y;
}

// Arrow function to perform less than or equal to (<=) calculation:
export const lessequal = (x: number, y: number): boolean => {
  return x <= y;
}