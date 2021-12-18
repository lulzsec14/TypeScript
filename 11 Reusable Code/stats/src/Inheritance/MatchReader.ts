import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { matchResult } from './MatchResult';

type matchData = [Date, string, string, number, number, matchResult, string];

export class MatchReader extends CsvFileReader<matchData> {
  mapRow(row: string[]): matchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResult, // type assertion 'H' 'A' 'D'
      row[6],
    ];
  }
}
