<template>
  <ul>
    <li v-for="(setting, key) in settingsList" :key="key">
      {{ setting.name }} :
      <div
        :style="`${(value instanceof Array) ? 
          value.map((e, i) => `--value-${i + 1}: ` + formatRgb(e) + ';').join(' ') :
          `--value: ${value};` 
        } 
        --selected: ${
          j === setting.selected ? '2px' : '0px'
        }`"
        :data-value="value"
        :class="key"
        v-for="(value, j) in setting.options"
        :key="value + ' ' + j"
        @click="changeSetting(key, j)"
      ></div>
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
  transform: translateY(10%)
}
.tilesColor {
  background-color: var(--value-2);
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  margin-left: 5px;
  transform: translateY(10%)
}
.tilesColor::after {
  content: '';
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
  transform: translateY(10%)
}
.colorBlind::after {
  content: attr(data-value);
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import { useStore } from "../store/store";
import { SETTINGS_DATA } from "../assets/js/Settings.js";

export default {
  methods: {
    changeSetting(key, index) {
      const store = useStore();
      store.settings[key] = index;
    },
    formatRgb(color) {
      return `rgb(${color.r},${color.g},${color.b})`
    }
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