import { reactive, watch } from 'vue'

const savedStore = localStorage.getItem('tileswap-store');
const parsed = savedStore ? JSON.parse(savedStore) : {
  currentLayout: {}
};

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