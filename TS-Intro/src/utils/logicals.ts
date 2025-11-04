/*================================== Logical Operators ==================================*/

// Arrow function to perform Logical AND (&&) operation:
export const logicalAnd = (x: number, y: number, a: number, b: number): boolean => {
    return x < y && a > b;
} 

// Arrow function to perform Logical OR (||) operation:
export const logicalOr = (x: number, y: number, a: number, b: number): boolean => {
    return x < y || a > b;
} 

// Arrow function to perform Logical NOT (!) operation:
export const logicalNot = (x: number, y: number): boolean => {
    return !(x === y);
} 