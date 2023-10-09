import { useStore } from '../../store/store.js';
import { tilesToFlip } from './Layout.js';

export const SETTINGS_DATA = {
  backgroundColor: {
    name: 'Background Color',
    options: ['#bbb2ea', '#adad85', '#666', '#FF9D81', '#83769C', '#7be3ad'],
    get value() {
      const { settings } = useStore();
      return this.options[settings.backgroundColor];
    },
    onChange(index) {
      document.documentElement.style.setProperty('--root-bg-color', this.options[index]);
    },
    unlocked: 5
  },
  tilesColor: {
    name: 'Tiles Color',
    options: [
      [{ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 }],
      [{ r: 50, g: 50, b: 90 }, { r: 200, g: 100, b: 100 }],
      [{ r: 8, g: 33, b: 59 }, { r: 88, g: 131, b: 173 }]
    ],
    get value() {
      const { settings } = useStore();
      return this.options[settings.tilesColor];
    },
    onChange(index) {
      return;
    },
    unlocked: 2
  },
  colorBlind: {
    name: 'Color Blind',
    options: ['Off', 'On'],
    get value() {
      const { settings } = useStore();
      return this.options[settings.colorBlind];
    },
    onChange(index) {
      return;
    },
    unlocked: 2
  },
  hoverTiles: {
    name: 'Hover on Tiles',
    options: ['Off', 'On'],
    get value() {
      const { settings } = useStore();
      return this.options[settings.hoverTiles];
    },
    onChange(index) {
      return;
    },
    unlocked: 2
  },
  tilesSVG: {
    name: 'Tiles Shape',
    options: ['Squircle', 'Square', 'Round', 'SpikeTile'],
    selected: 0,
    get value() {
      const { settings } = useStore();
      return this.options[settings.tilesSVG];
    },
    onChange(index) {
      return;
    },
    unlocked: 3
  },
  spread: {
    name: 'Spread',
    options: [[
        [-1, -1], [0, -1], [1, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ],
      [
        [-1,-1], [0,0], [-1,1],
        [1,-1], [1,1],
      ],
      [
        [-1,0], [0,-1],[1,0],[0,0],[0,1]
      ],
      [[0,0]],
      [
        [0,0],[0,-1],[0,-2],[1,-2],[2,-2],
        [1,0],[2,0],[2,1],[2,2],[0,1],[0,2],[-1,2],[-2,2],
        [-1,0],[-2,0],[-2,-1],[-2,-2]
      ]
    ],
    get value() {
      const { settings } = useStore();
      return this.options[settings.spread];
    },
    repr(index) {
      if (index === 0) return '□';
      if (index === 1) return '✖';
      if (index === 2) return '+';
      if (index === 3) return 'alexei';
      if (index === 4) return 'aaaaa';
    },
    onChange(index) {
      tilesToFlip.value = this.options[index];
    },
    unlocked: 4
  },
  tileAnimation: {
    name: 'Tile Animation',
    options: [{
      name: 'flip',
      mode: 'out-in'
     },
     {
      name: 'fade',
      mode: 'default'
     },
     {
      name: 'bounce',
      mode: 'out-in'
     },
     {
      name: 'spin',
      mode: 'out-in'
     },
     {
      name: 'none',
      mode: 'out-in'
     }
    ],
    get value() {
      const { settings } = useStore();
      return this.options[settings.tileAnimation];
    },
    onChange(index) {
      return;
    },
    repr(index) {
      return this.options[index].name;
    },
    unlocked: 4
  },
}

export const INITIAL_SETTINGS = Object.fromEntries(
  Object.keys(SETTINGS_DATA)
    .map(e => [e, SETTINGS_DATA[e].selected ?? 0])
);