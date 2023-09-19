<script setup>
  import Button from '../../components/buttons/Button.vue';
  import lockURL from '/images/svg/lock.svg'
</script>

<template>
  <Button :text="category.name" v-if="!locked"></Button>
  <div class="locked" v-else>
    <img :src="lockURL"/>
  </div>
</template>

<style scoped>
  .locked {
    background: #ddd;
  }
  img {
    height: 60%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  div.locked {
    height: 55px;
    width: var(--button-default-w);
    border-radius: var(--button-border-radius);
    display: inline-block;
    position: relative;
  }
</style>

<script>
import { useStore } from '../../store/store.js';
export default {
  props: ['category', 'locked']
}
</script>
