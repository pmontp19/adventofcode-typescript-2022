import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const tournament = this.input
      .split('\n')
      .map((round) => {
        let score = 0;
        score += this.getRoundWinerScore(round);
        score += this.getShapeScore(round[2]);
        return score;
      })
      .reduce((acc, score) => {
        return acc + score;
      }, 0);

    return tournament.toString();
  }

  private getShapeScore(shape: string): number {
    switch (shape) {
      case 'X':
        return 1;
      case 'Y':
        return 2;
      case 'Z':
        return 3;
    }
  }

  private getRoundWinerScore(round: string): number {
    // A for Rock, B for Paper, and C for Scissors
    const moves = round.split(' ');
    const player1 = moves[0];
    let player2 = moves[1];

    // to compare same moves name
    switch (player2) {
      case 'X':
        player2 = 'A';
        break;
      case 'Y':
        player2 = 'B';
        break;
      case 'Z':
        player2 = 'C';
        break;
    }

    if (player1 === player2) {
      return 3;
    }

    if (player1 === 'A' && player2 === 'B') {
      return 6;
    }

    if (player1 === 'A' && player2 === 'C') {
      return 0;
    }

    if (player1 === 'B' && player2 === 'A') {
      return 0;
    }

    if (player1 === 'B' && player2 === 'C') {
      return 6;
    }

    if (player1 === 'C' && player2 === 'A') {
      return 6;
    }

    if (player1 === 'C' && player2 === 'B') {
      return 0;
    }
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return '12645';
  }

  public solveSecond(): string {
    // X you need to lose, Y you need to end in a draw, Z you need to win
    const tournament = this.input
      .split('\n')
      .map((round) => {
        let score = 0;

        // score by result
        if (round[2] === 'X') {
          score = 0;
        } else if (round[2] === 'Y') {
          score = 3;
        } else if (round[2] === 'Z') {
          score = 6;
        }

        // score by shape
        score += this.computeShapeByResultandOppoenentMove(round[2], round[0]);
        return score;
      })
      .reduce((acc, score) => {
        return acc + score;
      }, 0);

    return tournament.toString();
  }

  private computeShapeByResultandOppoenentMove(
    result: string,
    opponentMove: string
  ): number {
    if (result === 'X') {
      if (opponentMove === 'A') {
        // you need to lose
        // opponent move is Rock
        // you need to play Scissors
        return 3;
      }
      if (opponentMove === 'B') {
        // you need to lose
        // opponent move is Paper
        // you need to play Rock
        return 1;
      }
      if (opponentMove === 'C') {
        // you need to lose
        // opponent move is Scissors
        // you need to play Paper
        return 2;
      }
    }
    if (result === 'Y') {
      if (opponentMove === 'A') {
        return 1;
      }
      if (opponentMove === 'B') {
        return 2;
      }
      if (opponentMove === 'C') {
        return 3;
      }
    }
    if (result === 'Z') {
      if (opponentMove === 'A') {
        return 2;
      }
      if (opponentMove === 'B') {
        return 3;
      }
      if (opponentMove === 'C') {
        return 1;
      }
    }
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return '11756';
  }
}
