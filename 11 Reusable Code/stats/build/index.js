"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// const matches = fs
//   .readFileSync('./football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// console.log(reader.data);
var dateOfFirstMatch = reader.data[0][0];
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
var printMatchResult = function (match) {
    if (match[5] === 'H')
        return MatchResult_1.matchResult.HomeWin;
    if (match[5] === 'A')
        return MatchResult_1.matchResult.AwayWin;
    return MatchResult_1.matchResult.Draw;
};
var manUnitedWins = 0;
// for (let match of matches) {
//   if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
//     ++manUnitedWins;
//   } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
//     ++manUnitedWins;
//   }
//   // else if((match[2] === 'Man United' || match[2] === 'Man United') && match[5] == draw)
// }
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin) {
        ++manUnitedWins;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin) {
        ++manUnitedWins;
    }
}
console.log("Man United won " + manUnitedWins + " games");
