<script setup>
  import Button from '../../components/buttons/Button.vue';
  import lockURL from '/images/svg/lock.svg'
</script>

<template>
  <Button class="category-button" :text="category.title" v-if="!locked" :class="{ finished }"></Button>
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

  .category-button {
    width: 60%;
  }

  .category-button.finished {
    background-color: var(--success-color);
  }

  div.locked {
    height: 55px;
    width: 60%;
    border-radius: var(--button-border-radius);
    display: inline-block;
    position: relative;
    margin: 5px 10px;
  }
</style>

<script>
import { useStore } from '../../store/store.js';
export default {
  props: ['category', 'locked'],
  computed: {
    finished() {
      const store = useStore();
      return this.category.challenges.every(challenge => {
        return store.stats.challengesCompleted[challenge.id] !== undefined
            && store.stats.challengesCompleted[challenge.id].completed;
      })
    }
  }
}
</script>
