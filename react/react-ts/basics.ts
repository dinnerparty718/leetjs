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



// Type inference: ts try to infer without deveoper instruction
let course = 'Ract - the complte guild';


// union types
let course2: string | number = 'hey';
course2 = 2;

let course3: string | string[];



// type alis

type Person = {
  name: string,
  age: number
}

let person3: Person;


// function & type
// inferred return value type
function add(a: number, b: number): number | string {
  return a + b;
}

//  void 
function myPrint(value: any) {
  console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

console.log(updatedArray)