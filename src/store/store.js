import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    currentLayout: {},
    currentPuzzle: {},
    difficulty: 2,
  }),
  actions: {
    setLayout(layout) {
      this.currentLayout = layout;
    },
    setPuzzle(puzzle) {
      this.currentPuzzle = puzzle;
    }
  },
  // persist: {
  //   debug: true,
  //   afterRestore(ctx) {
  //     if (Object.keys(ctx.store.$state.currentLayout).length > 0) {
  //       ctx.store.$state.currentLayout = Layout.hydrate(ctx.store.$state.currentLayout);
  //     }
  //   }
  // }
});