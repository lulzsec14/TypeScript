import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';
// const matches = fs
//   .readFileSync('./football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });

const reader = new CsvFileReader('football.csv');
reader.read();
// console.log(reader.data);
const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// const matchResult = { // Javascript solution
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D',
// };

// Enum
// use when Small fixed set of values
// No such tsc usage but used for better understanding for other developers
// enum matchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D',
// }

const printMatchResult = (match: string[]): matchResult => {
  if (match[5] === 'H') return matchResult.HomeWin;
  if (match[5] === 'A') return matchResult.AwayWin;
  return matchResult.Draw;
};

let manUnitedWins = 0;

// for (let match of matches) {
//   if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
//     ++manUnitedWins;
//   } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
//     ++manUnitedWins;
//   }
//   // else if((match[2] === 'Man United' || match[2] === 'Man United') && match[5] == draw)
// }

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    ++manUnitedWins;
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
    ++manUnitedWins;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
