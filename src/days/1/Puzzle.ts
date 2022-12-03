import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const elfs: Array<number> = this.input.split('\n\n').map((elf) => {
      return elf.split('\n').reduce((acc, line) => {
        return acc + +line;
      }, 0);
    });
    const mostCalories: number = Math.max(...elfs);

    return mostCalories.toString();
  }
  public solveSecond(): string {
    const elfs: Array<number> = this.input.split('\n\n').map((elf) => {
      return elf.split('\n').reduce((acc, line) => {
        return acc + +line;
      }, 0);
    });
    const topThree = elfs
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, line) => {
        return acc + +line;
      }, 0);

    return topThree.toString();
  }

  public getFirstExpectedResult(): string {
    return '66616';
  }
  public getSecondExpectedResult(): string {
    return '199172';
  }
}
