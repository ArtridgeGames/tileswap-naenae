<script setup>
import lockURL from '/images/svg/lock.svg';
import SpikeTile from './SpikeTileSVG.vue';
import Round from './RoundSVG.vue';
// import Squircle from './SquircleSVG.vue';
</script>

<template>
  <ul>
    <li v-for="(setting, key) in settingsList" :key="key">
      {{ setting.name }} :
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
      >
        <!-- Refactor to <component :is="setting.options[j]"> -->
        <SpikeTile v-if="setting.options[j]==='SpikeTile'" :color="'#666'"></SpikeTile>
        <Round v-else-if="setting.options[j]==='Round'" :color="'#666'"></Round>
        <!-- <Squircle v-else-if="setting.options[j]==='Squircle'" :color="'#666'"></Squircle> -->
        <img v-if="j > setting.unlocked" :src="lockURL" />
    </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  text-align: left;
  font-size: 24px;
}
ul > li > div {
  outline: var(--selected) solid black;
  position: relative;
}
ul > li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
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


</style>

<script>
import { useStore } from "../store/store";
import { SETTINGS_DATA } from "../assets/js/Settings.js";

export default {
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