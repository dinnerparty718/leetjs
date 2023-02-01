// Primitives: number, string, boolean, null and undefined
// More complex types: arrays, objects
// Fucntion types, parameter


// Primitives (number and string with lowercase, primitive types)

let age: number = 9;
age = 12.1;

let userName: string = 'abc';

let isLoading: boolean;
isLoading = true;


// More complex types 

let hobbies: string[];
hobbies = ['1', '2'];

// Object Types
let person: {
  name: string,
  age: number
}; // fallback type is any, but not recommended

person = {
  name: 'max',
  age: 10,
}


// array can object types can combine

let people: {
  name: string,
  age: number
}[]
