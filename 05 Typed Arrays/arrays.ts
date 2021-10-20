let carMaker: string[] = [];

carMaker = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corola'], ['comaro']];
let carsByMake1: string[][] = [];

// 1. Help with inference when extracting values
const car = carMaker[0];
const myCar = carsByMake[0];

// 2. Prevent incompatible values
// carMaker.push(10);

// Help with 'map'
carMaker.map((car: string): string => {
  return car.toUpperCase();
});

// Flecible types
const importantDates = [new Date(), '2015-09-14'];
const importantDates1: (string | Date)[] = [new Date()];
importantDates1.push('2030-10-10');
importantDates1.push(new Date());
