const carMakers = ['ford', 'Toyota', 'chevy'];

const carMakers2: string[] = ['ford', 'Toyota', 'chevy'];

// initialize with empty, can add annotation
const carMaker3: string[] = [];

const dates = [new Date(), new Date()];

// string[][]=> array of string[]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const car1 = carMakers[0];

const mycar = carMakers.pop(); // string | undefined

carMakers.push('2');
// help with 'map'

carMakers.map((car): string => car)


// flexibale types:  (string | Date)[]
const importantDate = [new Date(), '2030-10-10']

const importantDate2: (string | Date)[] = [new Date()]
importantDate2.push('2024-01-01')
