import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const rucksacks = this.input.split('\n');
    const chars = rucksacks.map((rucksack) => {
      const firstHalf = rucksack.slice(0, rucksack.length / 2);
      const secondHalf = rucksack.slice(rucksack.length / 2);
      for (const char of firstHalf) {
        if (secondHalf.includes(char)) {
          return char;
        }
      }
    });
    const sum = chars.reduce(
      (acc, char) => acc + this.getPositionOfLetter(char),
      0
    );

    return sum.toString();
  }

  private getPositionOfLetter(letter: string): number {
    return (
      letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 96 : 64 - 26)
    );
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '157';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    return 'day 1 solution 2';
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
