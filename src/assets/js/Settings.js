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
    unlocked: 2
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
    options: ['On', 'Off'],
    get value() {
      const { settings } = useStore();
      return this.options[settings.hoverTiles];
    },
    onChange(index) {
      return;
    },
    unlocked: 2
  },
  tilesShape: {
    name: 'Tiles Border Radius',
    options: [[30], [30, 60], [0], [100]],
    get value() {
      const { settings } = useStore();
      return this.options[settings.tilesShape]
    },
    onChange(index) {
      let border = '';
      for (let i = 0; i<this.options[index].length; i++) {
        border += `${this.options[index][i]}px `
      }
      document.documentElement.style.setProperty('--root-tile-border-radius', border);
    },
    unlocked: 2
  },
  tilesSVG: {
    name: 'Tiles Shape',
    options: ['Round', 'SpikeTile', 'Squircle'],
    selected: 0,
    get value() {
      const { settings } = useStore();
      return this.options[settings.tilesSVG];
    },
    onChange(index) {
      return;
    },
    unlocked: 2
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
    },
    onChange(index) {
      tilesToFlip.value = this.options[index];
    },
    unlocked: 3
  }
}

export const INITIAL_SETTINGS = Object.fromEntries(
  Object.keys(SETTINGS_DATA)
    .map(e => [e, SETTINGS_DATA[e].selected ?? 0])
);