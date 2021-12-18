import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// const matches = fs
//   .readFileSync('./football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });

// const reader = new CsvFileReader('football.csv');
// reader.read();
// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data);
// console.log(dateOfFirstMatch);

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

// const printMatchResult = (match: string[]): matchResult => {
//   if (match[5] === 'H') return matchResult.HomeWin;
//   if (match[5] === 'A') return matchResult.AwayWin;
//   return matchResult.Draw;
// };

// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
//     ++manUnitedWins;
//   } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
//     ++manUnitedWins;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary.winsAnalysisWihtHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
