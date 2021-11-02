import fs from 'fs';
import { matchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type matchData = [Date, string, string, number, number, matchResult, string];

export class CsvFileReader {
  data: matchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): matchData => {
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
