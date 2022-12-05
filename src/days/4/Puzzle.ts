import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const assignments = this.input.split('\n');

    const unfoldedSequences = assignments.map((assignment) => {
      return assignment.split(',');
    });

    let matches = 0;
    for (const sequence of unfoldedSequences) {
      if (this.sequenceOverlaps(sequence[0], sequence[1])) {
        matches++;
      }
    }

    return matches.toString();
  }

  private sequenceOverlaps(seq1: string, seq2: string): boolean {
    const [min1, max1] = seq1.split('-').map(Number);
    const [min2, max2] = seq2.split('-').map(Number);

    return (min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1);
  }

  private unfoldSequence(sequence: string): number[] {
    // input looks like this 2-6,2-9
    // output should be [23456, 23456789]
    const unfoldedSequences = [];
    const ranges = sequence.split(',');
    for (const range of ranges) {
      const [start, end] = range.split('-');
      let unfoldedSequence = 0;
      for (let i = Number(start); i <= Number(end); i++) {
        unfoldedSequence = i;
        unfoldedSequences.push(unfoldedSequence);
      }
    }
    return unfoldedSequences;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '582';
  }

  public solveSecond(): string {
    const assignments = this.input.split('\n');

    const unfoldedSequences = assignments.map((assignment) => {
      return this.unfoldSequence(assignment);
    });

    // the number of pairs that overlap at all.
    let matches = 0;
    for (const sequence of unfoldedSequences) {
      if (sequence.length !== new Set(sequence).size) {
        matches++;
      }
    }

    //

    return matches.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return '893';
  }
}
