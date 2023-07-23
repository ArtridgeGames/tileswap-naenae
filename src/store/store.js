import { reactive, watch } from 'vue'

const initial = {
  currentLayout: {},
  difficulty: 2,
};

const savedStore = localStorage.getItem('tileswap-store');
const parsed = Object.assign(initial, JSON.parse(savedStore));

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