import { Layout } from './Layout.js';
import { useStore } from '../../store/store.js'

export class Challenge {

  static CHALLENGES = [
    new Challenge({
      timeLimit: 60,
      moveLimit: -1,
      totalClicks: 90,
      patternRange: [1, 1],
      nPatterns: 30,
      bigLayoutAdapt: false, 
      moveLimitPer: 3,
      name: "Think Fast"
    }),
    new Challenge({
      timeLimit: 60,
      moveLimit: -1,
      totalClicks: 2,
      patternRange: [1, 1],
      nPatterns: 1,
      bigLayoutAdapt: false, 
      moveLimitPer: 2,
      name: "EZ"
    })
  ].map((e, id) => {
    e.id = id;
    return e;
  });
  
  static THRESHOLD = 60;

  constructor({ timeLimit, moveLimit, totalClicks, patternRange, nPatterns, bigLayoutAdapt, moveLimitPer, modulo, name}) {
    this.timeLimit = timeLimit;
    this.moveLimit = moveLimit;
    this.totalClicks = totalClicks;
    this.rangeStart = patternRange[0];
    this.rangeEnd = patternRange[1];
    this.nPatterns = nPatterns;
    this.currentPattern = 0;
    this.moveLimitPer = moveLimitPer;
    this.bigLayoutAdapt = bigLayoutAdapt;
    this.generateLayouts();
    this.nMoves = 0;
    this.modulo =  modulo ?? 2;
    this.name = name;
    this.id = -1;
  }

  get maxPercent() {
    const store = useStore();
    for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
      const data = store.stats.challengesCompleted[i];
      if (data.id === this.id) {
        return data.maxPercent;
      }
    }
    return 0;
  }

  get minTime() {
    const store = useStore();
    for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
      const data = store.stats.challengesCompleted[i];
      if (data.id === this.id) {
        return data.minTime;
      }
    }
    return this.timeLimit;
  }

  set maxPercent(val) {
    const store = useStore();
    for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
      const data = store.stats.challengesCompleted[i];
      if (data.id === this.id) {
        data.maxPercent = Math.max(data.maxPercent, val);
        return
      }
    }
    store.stats.challengesCompleted.push({id: this.id, maxPercent: val, minTime: this.timeLimit});
  }

  set minTime(val) {
    const store = useStore();
    for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
      const data = store.stats.challengesCompleted[i];
      if (data.id === this.id) {
        data.minTime = Math.min(data.minTime, val);
        return;
      }
    }
    store.stats.challengesCompleted.push({id: this.id, maxPercent: 0, minTime: val });
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

    this.challengeLayouts = challengeLayouts
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
    this.generateLayouts();
    this.currentPattern = 0;
  }
} 