/* 
all types can be ignored in this file

init and declaration, typescript can infer

*/

const apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object;
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'white', 'black'];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];


// Classes
class Car {

}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use annotations
// 1) when a function returns the 'any' type and we need to clarify the value
// ! JSON.parse() always return any type
const json = '{"x":10, "y":20}';

const coordinates: { x: number; y: number; } = JSON.parse(json);
console.log(coordinates);


// 2) when we declare a variable on the line when initialize it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (const word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3) when we want a varaible to have a type that can't be inferred
let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }

}



