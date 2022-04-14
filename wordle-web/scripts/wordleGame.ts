import { Word } from './word'

export enum GameState {
  Active = 0,
  Won = 1,
  Lost = 2,
  DualWin = 3
}

export class WordleGame {
  constructor(word: string) {
    this.words.push(new Word())
    this.word = word
  }

  private word: string
  words: Word[] = []
  state: GameState = GameState.Active

  get firstWord(): Word {
    return this.words[this.words.length - 1]
  }

  get secondWord(): Word {
    return this.words[this.words.length - 1]
  }

  submitWord() {
    if (this.firstWord.evaluateWord(this.word) || this.secondWord.evaluateWord(this.word)) {
      this.state = GameState.Won
    } else if (this.words.length === 5) {
      this.state = GameState.Lost
    } else {
      this.words.push(new Word())
    }
  }
}
