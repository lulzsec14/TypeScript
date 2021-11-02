import fs from 'fs';
import { matchResult } from './MatchResult';

type matchData = [Date, string, string, number, number, matchResult, string];

export abstract class CsvFileReader {
  data: matchData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): matchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
