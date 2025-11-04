/*================================== Assignment Operators ==================================*/

// Arrow function to perform Addition Assignment (+=) calculation:
export const addTo = (x: number, y: number): number => {
  return x += y;
}

// Arrow function to perform Subtraction Assignment (-=) calculation:
export const subFrom = (x: number, y: number): number => {
  return x -= y;
}

// Arrow function to perform Multiplication Assignment (*=) calculation:
export const multiplyTo = (x: number, y: number): number => {
  return x *= y;
}

// Arrow function to perform Exponentiation Assignment (**=) calculation:
export const exponent = (x: number, y: number): number => {
  return x **= y;
}

// Arrow function to perform Division Assignment (/=) calculation:
export const divideAssign = (x: number, y: number): number => {
  return x /= y;
}

// Arrow function to perform Remainder Assignment (%=) calculation:
export const remainder = (x: number, y: number): number => {
  return x %= y;
}
/*
// Arrow function to perform Simple Assignment (=) calculation:
export const assign = (x: number, y: number): number => {
  return x = y;
}
  */