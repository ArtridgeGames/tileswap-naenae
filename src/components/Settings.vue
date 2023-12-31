<script setup>
import lockURL from "/images/svg/lock.svg";
</script>

<template>
  <div class="list">
    <div
      class="element"
      v-for="(setting, key) in settingsList"
      :key="key"
      :title="key"
    >
      <p>{{ setting.name }}</p>
      <div class="options">
        <div
          :style="`${
            value instanceof Array
              ? value[0] instanceof Object
                ? value
                    .map((e, i) => `--value-${i + 1}: ` + formatRgb(e) + ';')
                    .join(' ')
                : `--value: ${formatBR(value, 0.4)};`
              : `--value: ${value};`
          } 
          --selected: ${j === setting.selected ? '2px' : '0px'};
          ${setting.repr ? `--repr: ${setting.repr(j)};` : ''}
          `"
          :data-repr="setting.repr ? setting.repr(j) : ''"
          :data-value="value"
          :data-locked="j > setting.unlocked"
          :class="key"
          v-for="(value, j) in setting.options"
          :key="value + ' ' + j"
          @click="changeSetting(key, j)"
          :title="JSON.stringify(value)"
        >
          <img v-if="j > setting.unlocked" :src="lockURL" />

          <div v-else-if="key === 'tilesSVG'">
            <component :title="value" :is="value" :color="'#666'"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  text-align: left;
  font-size: 24px;
}
.list > .element {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--silver-color);
  border-radius: 10px;
  padding: 20px 0;
  margin: 20px 0;
}
.list > .element > p {
  margin: 0;
  margin-bottom: 10px;
}
.list > .element > .options > div {
  outline: var(--selected) solid black;
  position: relative;
}
.list > .element > .options {
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding: 10px 0;
  justify-content: center;
}
.backgroundColor {
  background-color: var(--value);
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.tilesColor {
  background-color: var(--value-2);
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.tilesColor::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 50px solid var(--value-1);
  border-right: 50px solid transparent;
  border-radius: 5px;
}
.colorBlind {
  background-color: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.colorBlind::after {
  content: attr(data-value);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hoverTiles {
  background-color: white;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.hoverTiles::after {
  content: attr(data-value);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tilesShape {
  border-radius: var(--value);
  width: 50px;
  height: 50px;
  margin-left: 5px;
  cursor: pointer;
  display: inline-block;
  background-color: #666;
}

img {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  position: absolute;
  background: white;
}
.tilesSVG {
  width: 50px;
  height: 50px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
}
.spread {
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.spread::after {
  content: attr(data-repr);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tileAnimation {
  width: 100px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%);
}
.tileAnimation::after {
  content: attr(data-repr);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import { useStore } from "../store/store";
import { SETTINGS_DATA } from "../assets/js/Settings.js";

import SpikeTile from "./tiles/Spike.vue";
import Round from "./tiles/Round.vue";
import Squircle from "./Tiles/Squircle.vue";
import Square from "./Tiles/Square.vue";

export default {
  components: {
    SpikeTile,
    Round,
    Squircle,
    Square,
  },
  methods: {
    changeSetting(key, index) {
      if (index > SETTINGS_DATA[key].unlocked) return;
      const store = useStore();
      store.settings[key] = index;
    },
    formatRgb(color) {
      return `rgb(${color.r},${color.g},${color.b})`;
    },
    formatBR(borderRadius, mul) {
      let border = "";
      for (let i = 0; i < borderRadius.length; i++) {
        border += `${borderRadius[i] * mul}px `;
      }
      return border;
    },
  },
  computed: {
    settingsList() {
      const { settings } = useStore();
      const obj = Object.fromEntries(
        Object.entries(SETTINGS_DATA).map(([key, value]) => {
          return [
            key,
            {
              ...value,
              selected: settings[key],
            },
          ];
        })
      );
      return obj;
    },
  },
};
</script>