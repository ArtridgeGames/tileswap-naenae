<script setup>
import { useStore } from '@/store/store.js'
import Layout from '../../components/Layout.vue';
import Button from "../../components/Button.vue";
import Slider from "../../components/Slider.vue";
import Modal from "../../components/Modal.vue";
import LinkButton from "../../components/LinkButton.vue";
import { useWindow } from "@/assets/js/window.js"
</script>

<template>
  <div>
    <div class="top-menu">
      <Button text="randomize" @click="randomize" />
      <Slider v-model="difficulty" />
    </div>

    <p v-show="moves > 0" class="move-counter top" :class="{
      left: windowWidth < 600,
      center: windowWidth >= 600
    }">{{ moves }} move{{ moves > 1 ? 's' : '' }}</p>

    <LinkButton class="top right" text="back" to="/freeplaySelection" />
    
    <main>

      <Layout v-model="layout" @swap="handleClick" />
  
    </main>

    <Modal v-model="showModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? 's' : '' }}!</h1>
      <Button black text="yay!" @click="showModal = false" />
    </Modal>
  </div>

</template>

<style scoped>
.top-menu{
  width: 240px;
  margin-left: 20px;
}
main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.move-counter {
  font-size: 30px;
}

@media screen and (max-width: 600px) {
  .top-menu{
    position: absolute;
    bottom: 0;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    margin-bottom: 10px;
  }
  .move-counter {
    margin-left: 20px;
  }
}
</style>
<script>
export default {
  data() {
    const store = useStore();
    const layout = store.currentLayout;
    
    const { width: windowWidth } = useWindow();

    return {
      windowWidth,
      store,
      layout,
      difficulty: store.difficulty,
      showModal: false,
      moves: 0
    };
  },
  watch: {
    difficulty() {
      this.store.difficulty = this.difficulty;
    },
    showModal() {
      if (!this.showModal) {
        this.randomize();
      }
    }
  },
  methods: {
    handleClick() {
      this.moves++;
      if (this.layout.isSolved()) {
        this.store.stats.layoutsSolved++;
        this.showModal = true;
      }
    },
    randomize() {
      this.moves = 0;
      this.layout = this.layout.generatePosition(this.difficulty);
    }
  },
  mounted() {
    this.randomize();
  }
}
</script>