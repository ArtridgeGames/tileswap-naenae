import { reactive, watch } from 'vue'
import { Layout } from '../assets/js/Layout.js';

const initial = {
  currentLayout: {},
  difficulty: 2,
};

const savedStore = localStorage.getItem('tileswap-store');
const parsed = Object.assign(initial, JSON.parse(savedStore));

if (Object.keys(parsed.currentLayout).length !== 0) {
  const { width, height, exclude, unlockCategory } = parsed.currentLayout;

  parsed.currentLayout = new Layout({
    width, height, exclude, unlockCategory
  });
  parsed.currentLayout.setMatrix(parsed.currentLayout.matrix);
}

const store = reactive({
  ...parsed,
  setLayout(layout) {
    this.currentLayout = layout;
  }
});

watch(store, (state) => {
  localStorage.setItem('tileswap-store', JSON.stringify(state));
}, { deep: true });

export default store;