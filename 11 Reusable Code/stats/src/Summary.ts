import { matchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: matchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWihtHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: matchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
