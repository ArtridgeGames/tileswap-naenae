<script setup>
</script>

<template>
  <div class="main-container">
    <main class="carousell" @scroll="handleScroll">
      <div v-for="(view, i) in views" :key="i" :data-key="i" ref="viewsComponents">
        <component :is="view"></component>
      </div>
    </main>
  
    <div class="position">
      <div v-for="(view, i) in views" :class="{ selected: i === index }" :key="i"></div>
    </div>
  </div>
</template>

<style scoped>
div.main-container {
  height: 100%;
  padding: 0 10px;
}

main.carousell {
   /* snap mandatory on horizontal axis  */
  scroll-snap-type: x mandatory;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  align-items: center;

  height: 100%;
  
  /* Enable Safari touch scrolling physics which is needed for scroll snap */
  -webkit-overflow-scrolling: touch;
}

main.carousell > div {
  scroll-snap-align: center;
  position: relative;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow-y: scroll;
}

.position {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
}
.position > div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.position > div.selected {
  background-color: rgba(255, 255, 255, 1);
}
</style>

<script>
import { useStore } from '../store/store.js';
import FreeplaySelection from './freeplay/FreeplaySelection.vue';
import PuzzleSelection from './puzzles/PuzzleSelection.vue';
import ChallengeSelection from './challenges/ChallengeSelection.vue';
import AdditionalSelection from './AdditionalSelection.vue';

export default {
  components: {
    FreeplaySelection,
    PuzzleSelection,
    ChallengeSelection,
    AdditionalSelection
  },
  data() {
    return {
      views: ["FreeplaySelection", "PuzzleSelection", "ChallengeSelection", "AdditionalSelection"]
    };
  },
  computed: {
    index() {
      const store = useStore();
      return store.menuViewIndex;
    }
  },
  mounted() {
    const { menuViewIndex } = useStore();
    const el = this.$el.querySelector(`main.carousell > div:nth-child(${menuViewIndex + 1})`);
    el.scrollIntoView();
  },
  methods: {
    handleScroll() {
      const docViewLeft = window.scrollX;
      const docViewBottom = docViewLeft + window.innerWidth;

      let i = 0;
      for (const el of this.$refs.viewsComponents) {
        const rect = el.getBoundingClientRect()
        const elemLeft = rect.left;
        const elemRight = elemLeft + rect.width;
  
        if ((elemRight <= docViewBottom) && (elemLeft >= docViewLeft)) {
          useStore().menuViewIndex = parseInt(el.getAttribute("data-key"));
          break;
        }
        i++;
      }

    }
  }
}
</script>