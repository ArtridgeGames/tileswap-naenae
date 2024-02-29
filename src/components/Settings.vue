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
          v-for="(value, j) in setting.options"
          :style="`--selected: ${j === setting.selected ? '2px' : '0px'};
          ${setting.css ? setting.css(j) : ''}`"
          :data-text="setting.text ? setting.text(j) : ''"
          :class="key"
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
  background-color: white;
  overflow: hidden;
  outline: var(--selected) solid black;
  position: relative;
  width: 75px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
}
.list > .element > .options > div::after {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>

<script>
import { useStore } from "../store/store";
import { SETTINGS_DATA } from "../assets/js/Settings.js";

import SpikeTile from "./tiles/Spike.vue";
import Round from "./tiles/Round.vue";
import Squircle from "./tiles/Squircle.vue";
import Square from "./tiles/Square.vue";

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