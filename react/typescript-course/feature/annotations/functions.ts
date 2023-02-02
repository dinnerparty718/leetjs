const add = (a: number, b: number) => {
  return a - b;
}

const subtract = (a: number, b: number): number => {
  //  a - b mistake
  return a - b;
}


function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string) => {
  console.log(message)
}

// never reach to end of the function
const throwError = (message: string): never => {
  throw new Error(message)
}


const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// ES2015 
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather)