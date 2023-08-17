import { Layout } from './Layout.js';
import { useStore } from '../../store/store.js'
export class Challenge {
  static THRESHOLD = 60
  constructor({ timeLimit, moveLimit, totalClicks, patternRange, nPatterns, bigLayoutAdapt, moveLimitPer, modulo }) {
    this.timeLimit = timeLimit;
    this.moveLimit = moveLimit;
    this.totalClicks = totalClicks;
    this.rangeStart = patternRange[0];
    this.rangeEnd = patternRange[1];
    this.nPatterns = nPatterns;
    this.currentPattern = 0;
    this.moveLimitPer = moveLimitPer;
    this.bigLayoutAdapt = bigLayoutAdapt;
    this.challengeLayouts = this.generateLayouts();
    this.nMoves = 0;
    this.modulo =  modulo ?? 2;
  }

  generateLayouts() {
    const possibleLayouts = Layout.LAYOUTS.filter(e=>e.unlockCategory>=this.rangeStart && 
                                            e.unlockCategory<=this.rangeEnd)
    const challengeLayouts = []
    for(let i = 0; i<this.nPatterns;i++) {
      challengeLayouts.push(possibleLayouts[Math.floor(Math.random()*possibleLayouts.length)])
    }
    const nBigLay = challengeLayouts.reduce(
      (acc, cur) => acc + (cur.nTiles() >= Challenge.THRESHOLD ? 1 : 0), 0
    );

    const nMovesPer = Math.round(this.totalClicks/(this.nPatterns + (this.bigLayoutAdapt?nBigLay:0)));
    for (let i = 0; i<challengeLayouts.length; i++) {
      challengeLayouts[i] = challengeLayouts[i].generatePosition(
        this.bigLayoutAdapt ? (
          challengeLayouts[i].nTiles() >= Challenge.THRESHOLD ? nMovesPer * 2 : nMovesPer)
        : nMovesPer
      )
    }
    challengeLayouts.sort(()=>Math.random()-0.5);

    return challengeLayouts
  }

  getCurrentLayout() {
    return this.challengeLayouts[this.currentPattern];
  }

  nextLayout() {
    const store = useStore()
    this.currentPattern += 1
    store.setLayout(this.getCurrentLayout())
  }
  reset() {
    this.currentPattern = 0;
  }
} 