import { Layout } from './Layout.js';
import { useStore } from '../../store/store.js';

export class Challenge {
  static CHALLENGES = [
    {
      name: "Think Fast",
      id: 0,
      challenges: [
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 90,
          patterns: [0],
          nPatterns: 30,
          bigLayoutAdapt: false,
          moveLimitPer: 3,
          timeLimitPer: -1,
          hasSpecificPatterns: true,
          randomPatterns: true,
          name: "Expert"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 45,
          patterns: [0],
          nPatterns: 15,
          bigLayoutAdapt: false,
          moveLimitPer: 5,
          timeLimitPer: -1,
          hasSpecificPatterns: true,
          randomPatterns: true,
          name: "Hard"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 33,
          patterns: [0],
          nPatterns: 11,
          bigLayoutAdapt: false,
          moveLimitPer: 7,
          timeLimitPer: -1,
          hasSpecificPatterns: true,
          randomPatterns: true,
          name: "Medium"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 21,
          patterns: [0],
          nPatterns: 7,
          bigLayoutAdapt: false,
          moveLimitPer: 7,
          timeLimitPer: -1,
          hasSpecificPatterns: true,
          randomPatterns: true,
          name: "Easy"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 90,
          patterns: [2],
          nPatterns: 30,
          bigLayoutAdapt: false,
          moveLimitPer: -1,
          timeLimitPer: -1,
          hasSpecificPatterns: true,
          randomPatterns: true,
          name: "Think a bit less fast but still fast enough to be fast enough, you know?"
        })
      ]
    },
    {
      name: "Think Slow",
      id: 1,
      challenges: [
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 17,
          patterns: [1,1],
          nPatterns: 5,
          bigLayoutAdapt: false,
          moveLimitPer: -1,
          timeLimitPer: -1,
          hasSpecificPatterns: false,
          randomPatterns: true,
          name: "Easy"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 30,
          patterns: [1,1],
          nPatterns: 10,
          bigLayoutAdapt: false,
          moveLimitPer: -1,
          timeLimitPer: -1,
          hasSpecificPatterns: false,
          randomPatterns: true,
          name: "Medium"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 55,
          patterns: [1,1],
          nPatterns: 14,
          bigLayoutAdapt: false,
          moveLimitPer: -1,
          timeLimitPer: -1,
          hasSpecificPatterns: false,
          randomPatterns: true,
          name: "Hard"
        }),
        new Challenge({
          timeLimit: 60,
          moveLimit: -1,
          totalClicks: 92,
          patterns: [1,1],
          nPatterns: 22,
          bigLayoutAdapt: false,
          moveLimitPer: -1,
          timeLimitPer: -1,
          hasSpecificPatterns: false,
          randomPatterns: true,
          name: "Expert"
        }),
      ]
    },
    new Challenge({
      timeLimit: 60,
      moveLimit: -1,
      totalClicks: 90,
      patterns: [11],
      nPatterns: 30,
      bigLayoutAdapt: false,
      moveLimitPer: -1,
      timeLimitPer: -1,
      hasSpecificPatterns: true,
      randomPatterns: true,
      name: "OG"
    }),
    new Challenge({
      timeLimit: -1, //should be no limit
      moveLimit: 45,
      totalClicks: 35,
      patterns: [156,157,158,159,160,161,162,163,164,165],
      nPatterns: 10,
      bigLayoutAdapt: false,
      moveLimitPer: -1,
      timeLimitPer: 10,
      hasSpecificPatterns: true,
      randomPatterns: false,
      name: "Count"
    })
    ,
    new Challenge({
      timeLimit: -1,//should be no limit
      //TODO should have a 10s limit per 
      moveLimit: -1,
      totalClicks: 78,
      patterns: [119, 109, 110, 111, 142, 
        143, 144, 145, 131, 166, 146, 130, 
        132, 133, 156, 167, 168, 169, 161, 
        170, 171, 172, 173, 174, 175, 176],
      nPatterns: 26,
      bigLayoutAdapt: false,
      moveLimitPer: -1,
      timeLimitPer: 10,
      hasSpecificPatterns: true,
      randomPatterns: false,
      name: "Read"
    })
  ].map((e, id) => {
    if (e instanceof Challenge) {
      e.id = id * 100;
      return e;
    }
    e.challenges = e.challenges.map((e, index) => {
      e.id = id * 100 + index;
      return e;
    });
    return e;
  });

  static THRESHOLD = 60;

  constructor({ timeLimit, moveLimit, totalClicks, patterns, nPatterns,
                bigLayoutAdapt,timeLimitPer, moveLimitPer, hasSpecificPatterns, modulo, 
                randomPatterns, name }) {
    this.timeLimit = timeLimit;
    this.moveLimit = moveLimit;
    this.totalClicks = totalClicks;
    if (!hasSpecificPatterns) {
      this.rangeStart = patterns[0];
      this.rangeEnd = patterns[1];
    } else {
      this.patterns = patterns;
    }
    
    this.nPatterns = nPatterns;
    this.currentPattern = 0;
    this.timeLimitPer = timeLimitPer;
    this.randomPatterns = randomPatterns;
    this.moveLimitPer = moveLimitPer;
    this.bigLayoutAdapt = bigLayoutAdapt;
    this.hasSpecificPatterns = hasSpecificPatterns;
    this.nMoves = 0;
    this.modulo = modulo ?? 2;
    this.name = name;
    this.id = -1;
    this.generateLayouts();
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
    store.stats.challengesCompleted.push({ id: this.id, maxPercent: val, minTime: this.timeLimit, minMoves: this.moveLimit });
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
    store.stats.challengesCompleted.push({ id: this.id, maxPercent: 0, minTime: val, minMoves: -1 });
  }

  set minMoves(val) {
    if (this.timeLimit === -1){
      const store = useStore();
      for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
        const data = store.stats.challengesCompleted[i];
        if (data.id === this.id) {
          data.minMoves = Math.min(data.minMoves, val);
          return;
        }
      }
      store.stats.challengesCompleted.push({ id: this.id, maxPercent: 0, minTime: -1, minMoves: val });
    }
  }

  get minMoves() {
    const store = useStore();
    for (let i = 0; i < store.stats.challengesCompleted.length; i++) {
      const data = store.stats.challengesCompleted[i];
      if (data.id === this.id) {
        return data.minMoves;
      }
    }
    return this.timeLimit;
  }

  generateLayouts() {
    let possibleLayouts;
    if (!this.hasSpecificPatterns) {
      possibleLayouts = Layout.LAYOUTS.filter(e => e.unlockCategory >= this.rangeStart &&
        e.unlockCategory <= this.rangeEnd)
    } else {
      possibleLayouts = Layout.LAYOUTS.filter(e => this.patterns.includes(e.id))
    }
    const challengeLayouts = []
    if (this.randomPatterns){
      for (let i = 0; i < this.nPatterns; i++) {
        challengeLayouts.push(possibleLayouts[Math.floor(Math.random() * possibleLayouts.length)])
      }
    } else {
      for (let j = 0; j < this.patterns.length; j++){
        let pattern = this.patterns[j];
        for (let i = 0; i < Layout.LAYOUTS.length; i++) {
          if (pattern === Layout.LAYOUTS[i].id) challengeLayouts.push(Layout.LAYOUTS[i]);
        }
      }
    }
    const nBigLay = challengeLayouts.reduce(
      (acc, cur) => acc + (cur.nTiles() >= Challenge.THRESHOLD ? 1 : 0), 0
    );

    const nMovesPer = Math.round(this.totalClicks / (this.nPatterns + (this.bigLayoutAdapt ? nBigLay : 0)));
    for (let i = 0; i < challengeLayouts.length; i++) {
      challengeLayouts[i] = challengeLayouts[i].generatePosition(
        this.bigLayoutAdapt ? (
          challengeLayouts[i].nTiles() >= Challenge.THRESHOLD ? nMovesPer * 2 : nMovesPer)
          : nMovesPer
      )
    }
    if (this.randomPatterns) challengeLayouts.sort(() => Math.random() - 0.5);

    this.challengeLayouts = challengeLayouts;
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
