import { matchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { matchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: matchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === matchResult.HomeWin) {
        ++wins;
      } else if (match[2] === this.team && match[5] === matchResult.AwayWin) {
        ++wins;
      }
      // else if((match[2] === 'Man United' || match[2] === 'Man United') && match[5] == draw)
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
