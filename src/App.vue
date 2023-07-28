<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { RouterView } from 'vue-router';
import { useStore } from "./store/store.js";
export default {
  components: {
    RouterView,
  },
  setup() {
    useStore();
  }
};
</script>