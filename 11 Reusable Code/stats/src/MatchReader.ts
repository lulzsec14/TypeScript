import { CsvFileReader } from './CsvFileReader';
import { matchData } from './MatchData';
import { dateStringToDate } from './utils';
import { matchResult } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: matchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): matchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult, // type assertion 'H' 'A' 'D'
        row[6],
      ];
    });
  }
}
