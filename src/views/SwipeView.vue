<script setup>
import BottomBar from '../components/BottomBar.vue';
</script>

<template>
  <div class="main-container">
    <main class="carousell" @scroll="handleScroll">
      <div
        v-for="(view, i) in views"
        :key="i"
        :data-key="i"
        ref="viewsComponents"
      >
        <component @scroll="handleVerticalScroll" :is="view"></component>
      </div>
    </main>
  
    <BottomBar @swipe="handleSwipe" :views="views" />
  </div>
</template>

<style scoped>
div.main-container {
  height: 100%;
  /* padding: 0 10px; */
}

main.carousell {
   /* snap mandatory on horizontal axis  */
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  align-items: center;

  height: 100%;
  
  /* Enable Safari touch scrolling physics which is needed for scroll snap */
  -webkit-overflow-scrolling: touch;
}

main.carousell > div {
  scroll-snap-stop: always;
  scroll-snap-align: center;
  position: relative;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow-y: hidden;
}
main.carousell > div > * {
  padding-bottom: 150px;
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
  mounted() {
    const { menuViewIndex, savedMenuScroll } = useStore();
    const el = this.$el.querySelector(`main.carousell > div:nth-child(${menuViewIndex + 1})`);
    el.scrollIntoView();
    el.firstChild.scrollTop = savedMenuScroll;
  },
  methods: {
    handleScroll() {
      const docViewLeft = window.scrollX;
      const docViewRight = docViewLeft + window.innerWidth;

      let i = 0;
      for (const el of this.$refs.viewsComponents) {
        const rect = el.getBoundingClientRect()
        const elemLeft = rect.left;
        const elemRight = elemLeft + rect.width;
  
        if ((elemLeft >= docViewLeft - window.innerWidth / 2) && (elemRight <= docViewRight + window.innerWidth / 2)) {
          useStore().menuViewIndex = parseInt(el.getAttribute("data-key"));
          break;
        }
        i++;
      }
    },
    handleVerticalScroll(e) {
      const store = useStore();
      store.savedMenuScroll = e.target.scrollTop;
    },
    handleSwipe(e) {
      const { menuViewIndex } = useStore();
      const next = Math.min(Math.max(e.delta ? menuViewIndex + e.delta : e.page, 0), this.views.length - 1);
      const el = this.$el.querySelector(`main.carousell > div:nth-child(${next + 1})`);
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}
</script>