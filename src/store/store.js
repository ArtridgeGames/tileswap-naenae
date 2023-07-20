import { reactive } from 'vue'

export const store = reactive({
  currentLayout: {},
  setLayout(layout) {
    console.log(layout);
    this.currentLayout = layout;
  }
});