import { useStore } from '../../store/store.js';

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
    }
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
    }
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
    }
  },
  tilesShape: {
    name: 'Tiles Shape',
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
    }
  }
}

export const INITIAL_SETTINGS = Object.fromEntries(
  Object.keys(SETTINGS_DATA)
    .map(e => [e, SETTINGS_DATA[e].selected ?? 0])
);