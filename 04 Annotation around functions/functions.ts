// Basic annotation of a function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 5));
const subt = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrors = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(
    `Date today is: ${forecast.date}, and the weather is ${forecast.weather}`
  );
};

logWeather(todaysWeather);

// ES 2015
const logWeather1 = ({ date, weather }) => {
  console.log(date, weather);
};

const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(`Date today is: ${date}, and the weather is ${weather}`);
};
