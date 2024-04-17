import { ref, computed } from 'vue';
import { Layout } from './Layout.js';
import { SETTINGS_DATA } from './Settings.js';

export const tilesToFlip = ref(Layout.TILES_TO_FLIP);
if (globalThis.window && !window.hasOwnProperty('tilesToFlip')) {
  Object.defineProperty(window, 'tilesToFlip', {
    get: () => tilesToFlip.value,
    set: (value) => {
      tilesToFlip.value = value
    }
  });
}

export const modulo = ref(2);
if (globalThis.window && !window.hasOwnProperty('modulo')) {
  Object.defineProperty(window, 'modulo', {
    get: () => modulo.value,
    set: (value) => {
      if (typeof value !== 'number') throw new Error('Modulo must be a number');
      if (value < 2) throw new Error('Modulo must be greater than 1');
      modulo.value = value
    }
  });
}

export const setModulo = (value) => {
  if (value < 2) throw new Error('Modulo must be greater than 1');
  modulo.value = value
}

export const gradient = computed(() => {
  return getGradient(modulo.value);
})

export const getGradient = modulo => {
  const backColor = SETTINGS_DATA.tilesColor.value[0];
  const frontColor = SETTINGS_DATA.tilesColor.value[1];
  const difference = { r: frontColor.r - backColor.r, g: frontColor.g - backColor.g, b: frontColor.b - backColor.b }
  return new Array(modulo).fill().map((e, i) => {
    return `rgb(${difference.r * (i / (modulo - 1)) + backColor.r},${difference.g * (i / (modulo - 1)) + backColor.g},${difference.b * (i / (modulo - 1)) + backColor.b})`
  });
}

export const outlineGradient = computed(() => {
  const backColor = SETTINGS_DATA.tilesColor.value[0];
  const frontColor = SETTINGS_DATA.tilesColor.value[1];
  const difference = { r: frontColor.r - backColor.r, g: frontColor.g - backColor.g, b: frontColor.b - backColor.b }
  return new Array(modulo.value).fill().map((e, i) => {
    return `rgb(${difference.r * 0.4 * (i / (modulo.value - 1)) + backColor.r + 36},${difference.g * 0.4 * (i / (modulo.value - 1)) + backColor.g + 36},${difference.b * 0.4 * (i / (modulo.value - 1)) + backColor.b + 36})`
  });
})

export const highlightGradient = computed(() => {
  const backColor = SETTINGS_DATA.tilesColor.value[0];
  const frontColor = SETTINGS_DATA.tilesColor.value[1];
  const difference = { r: frontColor.r - backColor.r, g: frontColor.g - backColor.g, b: frontColor.b - backColor.b }
  return new Array(modulo.value).fill().map((e, i) => {
    return `rgb(${difference.r * 0.75 * (i / (modulo.value - 1)) + backColor.r + 50},${difference.g * 0.75 * (i / (modulo.value - 1)) + backColor.g + 50},${difference.b * 0.75 * (i / (modulo.value - 1)) + backColor.b + 50})`
  });
})