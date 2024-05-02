<script setup>
import LayoutVue from '../../components/Layout.vue';
import Modal from '../../components/Modal.vue';
import Button from '../../components/buttons/Button.vue';
import LayoutAnimation from '../../components/LayoutAnimation.vue';
</script>

<template>
  <main>
    <Modal v-model="showModal">

      <h1 v-for="(line, index) in currentModalText" :key="index">
        <div v-html="line"></div>
      </h1>

      <div v-if="modalPage === 0">
        <LayoutVue class="example-layout" small disabled v-model="exampleLayout" :highlightedTiles="[[2,2]]" />
      </div>
      <div v-else-if="modalPage === 1">
      </div>
      <div v-else-if="modalPage === 2">
      </div>
      <div v-else-if="modalPage === 3">
      </div>
      <div v-else-if="modalPage === 4">
        <h1>[INSERT ANIMATION]</h1>
      </div>
      <div v-else-if="modalPage === 5">
        <h1>[INSERT ANIMATION]</h1>
        <Transition name="fade">
          <div
          v-if="currentModalText.length === modalTexts[modalPage].length
              && currentModalText[currentModalText.length - 1] === modalTexts[modalPage][modalTexts[modalPage].length - 1]"
          >
            <Button 
            black text="ok!" class="bottom center" @pressed="modalPage++; startTypewriter();" />
          </div>
        </Transition>

      </div>
      <div v-else-if="modalPage === 6">
        <h1>[INSERT ANIMATION]</h1>
        <Transition name="fade">
          <div
          v-if="currentModalText.length === modalTexts[modalPage].length
              && currentModalText[currentModalText.length - 1] === modalTexts[modalPage][modalTexts[modalPage].length - 1]"
          >
            <Button 
            black text="ok!" class="bottom center" @pressed="modalPage++; startTypewriter();" />
          </div>
        </Transition>
      </div>
      <div v-else-if="modalPage === 7">
        <h1>[INSERT ANIMATION]</h1>
        <Transition name="fade">
          <div
          v-if="currentModalText.length === modalTexts[modalPage].length
              && currentModalText[currentModalText.length - 1] === modalTexts[modalPage][modalTexts[modalPage].length - 1]"
          >
            <Button black text="ok!" class="bottom center" @pressed="showModal = false; retry = true;" />
          </div>
        </Transition>
      </div>
      <div v-else-if="modalPage === 8">
      </div>
      <div v-else-if="modalPage === 9">
      </div>
      <div v-else-if="modalPage === 10">
      </div>
      <div v-else-if="modalPage === 11">
        <h1>[INSERT ANIMATION]</h1>
        <Transition name="fade">
          <div
          v-if="currentModalText.length === modalTexts[modalPage].length
              && currentModalText[currentModalText.length - 1] === modalTexts[modalPage][modalTexts[modalPage].length - 1]"
          >
            <Button 
            black text="go to freeplay" class="bottom center" @pressed="end" />
          </div>
        </Transition>
      </div>

      <Transition name="fade">
        <div
        v-if="currentModalText.length === modalTexts[modalPage].length
            && currentModalText[currentModalText.length - 1] === modalTexts[modalPage][modalTexts[modalPage].length - 1]
            && ![5,6,7,11].includes(modalPage)"
        >
          <Button
            black
            text="ok!"
            class="bottom center"
            @pressed="showModal = false"
          />
        </div>
      </Transition>
    </Modal>

    <!-- <LayoutVue 
      class="center middle"
      v-model="stage.layout"
    /> -->

    
    <Transition appear name="fade" mode="out-in">
      <div class="center middle" :key="stageIndex">
        <LayoutVue
          :highlightedTiles="highlightedTiles"
          :class="{ shake }"
          v-model="stage.layout"
          :disabled="disabled"
          @swap="handleClick"
        />
      </div>
    </Transition>
    
    <div class="top center text-center" style="width: max-content; max-width: 100%;">
      <h1>{{ text }}</h1>
      <h1 v-if="showWrong">Wrong tile!</h1>
      <Button v-if="retry" text="reset" @pressed="reset" />
      <h1 v-if="showMoves">this takes minimum {{ stage.moves }} clicks</h1>
    </div>


    <Button
      v-if="enableNext"
      :class="{ 'highlight': highlightNext }"
      class="bottom center"
      text="Next"
      @pressed="next" />
  </main>
</template>

<style scoped>
.example-layout {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background: var(--root-bg-color);
}
</style>

<script>
import { Layout } from '../../assets/js/Layout.js';
import { useStore } from '../../store/store.js';

export default {
  data() {

    const stages = [
        {
          matrix: [[1,1,1,1,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,1,1,1,1]],
          solution: [12],
          title: 'Basics 1 / 5'
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,0,1,1],
                   [1,1,1,1,1],
                   [1,1,1,1,1]],
          solution: [6],
          title: 'Basics - 2 / 5'
        },
        {
          matrix: [[0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0]],
          solution: [7,28],
          title: 'Basics - 3 / 5'
        },
        {
          matrix: [[0,0,0,1,1,1,1],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [1,1,1,1,0,0,0],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1]],
          solution: [8,19,37],
          title: 'Basics - 4 / 5'
        },
        {
          matrix: [[0,0,0],
                   [0,0,0],
                   [0,0,0]],
          solution: [4],
          title: 'Basics - 5 / 5',
          showModal: true
        },
        {
          matrix: [[-1,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 1,1,1,1,1],
                   [ 1,1,1,1,1]],
          solution: [6],
          title: 'Missing tiles - 1 / 5'
        },
        {
          matrix: [[1,1,1, 1,1],
                   [1,1,1, 1,1],
                   [1,1,0, 0,0],
                   [1,1,0, 0,0],
                   [1,1,0,-1,0]],
          solution: [18],
          title: 'Missing tiles - 2 / 5'
        },
        {
          matrix: [[1, 1, 1, 1,1],
                   [1, 0,-1, 0,1],
                   [1,-1, 0,-1,1],
                   [1, 0,-1, 0,1],
                   [1, 1, 1, 1,1]],
          solution: [12],
          title: 'Missing tiles - 3 / 5'
        },
        {
          matrix: [[ 1, 1,1,1,1],
                   [ 1, 1,1,1,1],
                   [ 0, 0,0,1,1],
                   [-1, 0,0,1,1],
                   [-1,-1,0,1,1]],
          solution: [16],
          title: 'Missing tiles - 4 / 5'
        },
        {
          matrix: [[ 1, 1, 1,1,1],
                   [ 1, 1, 1,1,1],
                   [-1, 0, 0,1,1],
                   [-1, 0, 0,1,1],
                   [-1,-1,-1,1,1]],
          solution: [16],
          title: 'Missing tiles - 5 / 5',
          showModal: true
        },
        {
          matrix: [[1,1,0,0],
                   [1,1,0,0],
                   [0,0,0,0],
                   [0,0,1,1]],
          solution: [7, 12],
          title: 'Corners - 1 / 3'
        },
        {
          matrix: [[1, 1,1],
                   [0,-1,1],
                   [0, 0,1]],
          solution: [6],
          title: 'Corners - 2 / 3'
        },
        {
          matrix: [[1, 1,1],
                   [1,-1,0],
                   [1,-1,0]],
          solution: [8],
          title: 'Corners - 3 / 3',
          showModal: true
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,0,0,0]],
          solution: [6,18],
          title: 'Overlapping clicks - 1 / 5'
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,1,0,0],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,1,1,1]],
          solution: [6,13],
          title: 'Overlapping clicks - 2 / 5'
        },
        // {
        //   matrix: [[0,0,1,0,0],
        //            [0,0,1,0,0],
        //            [0,0,1,0,0],
        //            [1,1,1,1,1],
        //            [1,1,1,1,1]],
        //   solution: [6, 8],
        //   title: 'Overlapping clicks - 3 / 6'
        // },
        {
          matrix: [[0,0,0],
                   [1,1,1],
                   [0,0,0],
                   [0,0,0]],
          solution: [1,7],
          title: 'Overlapping clicks - 3 / 5'
        },
        {
          matrix: [[0,1,0],
                   [0,1,0],
                   [1,1,1]],
          solution: [0,2],
          title: 'Overlapping clicks - 4 / 5'
        },
        {
          matrix: [[1,0,0],
                   [0,1,0],
                   [0,0,1]],
          solution: [2, 6],
          title: 'Overlapping clicks - 5 / 5',
          showModal: true
        },
        {
          matrix: [[1,0,1]],
          title: 'On your own - 1 / 4',
          moves: 3
        },
        {
          matrix: [[ 1,1, 1],
                   [-1,0,-1],
                   [-1,1,-1],],
          title: 'On your own - 2 / 4',
          moves: 3
        },
        {
          matrix: [[-1, 0,-1],
                   [ 1, 0, 0],
                   [-1, 1,-1],],
          title: 'On your own - 3 / 4',
          moves: 3
        },
        {
          matrix: [[ 1, 0, 0],
                   [ 0,-1,-1],
                   [ 0, 1, 0],
                   [-1,-1, 1],
                   [ 0, 0, 0]],
          title: 'On your own - 4 / 4',
          moves: 4,
          showModal: true
        },
        {
          matrix: [[1, 0,1],
                   [1,-1,1],
                   [1, 1,1]],
          title: 'Step-by-step 1/3',
          moves: 3
        },
        {
          matrix: [[1, 0,1],
                   [1,-1,1],
                   [1, 0,1]],
          title: 'Step-by-step 2/3',
          moves: 6
        },
        {
          matrix: [[1, 0,1],
                   [1,-1,0],
                   [1, 0,1]],
          title: 'Step-by-step 3/3',
          moves: 5,
          showModal: true
        },
        {
          matrix: [[0, -1,0],
                   [-1,0,-1],
                   [0,-1,1]],
          title: 'Others 1/3',
          moves: 3
        },
        {
          matrix: [[1, 0,-1],
                   [0,-1,1],
                   [-1,1,1]],
          title: 'Others 2/3',
          moves: 2
        },
        {
          matrix: [[1, 1,-1],
                   [0,-1,1],
                   [-1,0,0]],
          title: 'Others 3/3',
          moves: 3,
          showModal: true,
        },
        {
          matrix: [[0,0,1,0],
                   [0,0,1,0],
                   [1,1,0,1],
                   [1,1,0,1]],
          title: 'Final steps - 1 / 5',
          moves: 4
        },
        {
          matrix: [[0,0,1,1,1],
                   [1,1,1,1,1],
                   [1,1,0,0,0],
                   [1,1,1,1,1],
                   [0,0,1,1,1]],
          title: 'Final steps - 2 / 5',
          moves: 5
        },
        {
          matrix: [[0,1,1],
                   [1,0,0],
                   [0,1,1]],
          title: 'Final steps - 3 / 5',
          moves: 3,
        },
        {
          matrix: [[1, 0,1],
                   [1, 1,0],
                   [0, 1,1]],
          title: 'Final steps - 4 / 5',
          moves: 4,
        },
        {
          matrix: [[1, 1,1],
                   [1, 0,1],
                   [0, 1,0]],
          title: 'Final steps - 5 / 5',
          moves: 5,
          showModal: true
        },
      ].map(stage => {
        const res = new Layout({
          width: stage.matrix[0].length,
          height: stage.matrix.length,
          exclude: Layout.getExcludeFromMatrix(stage.matrix),
        });
        res.setMatrix(stage.matrix);
        return {
          layout: res,
          matrix: stage.matrix,
          showModal: stage.showModal,
          solution: stage.solution,
          modulo: stage.modulo,
          title: stage.title,
          moves: stage.moves
        }
      });

    return {
      mistakes: 0,
      highlightedTiles: [],
      showModal: true,
      text: 'Try it here!',
      modalPage: 0,
      stageIndex: 0,
      stages,
      shake: false,
      showWrong: false,
      disabled: undefined,
      enableNext: false,
      highlightNext: false,
      nextTimer: undefined,
      retry: false,
      currentModalText: [''],
      modalTexts: [
        [
          'Welcome to TileSwap',
          'To win the game, turn all the tiles white',
          'Clicking on a tile swaps the color of <span style="color: var(--success-color);">this tile</span> and all its neighbors'
        ],
        [
          'You\'ve won!',
          'You\'re free to continue experimenting. Continue when you\'re ready.'
        ],
        [
          'Now see what happens when tiles are missing.'
        ],
        [
          'You should be getting the hang of it',
          'Let\'s make this a bit interesting'
        ],
        [
          'Everything so far could be solved in a single click',
          'However as you might have seen when experimenting, things get complicated very fast',
          'For example when 2 clicks overlap'
        ],
        [
          'As you might have noticed, clicking twice on the same tile is the same as not clicking on it at all.',
        ],
        [
          'Also notice that the order on which you click the tiles does not matter.'
        ],
        [
          'From now on we won\'t tell you when you\'re getting further away from the solution.',
          'You can go back to the initial state anytime by pressing the reset button'
        ],
        [
          'Now let\'s progressively make a pattern harder'
        ],
        [
          'Try a few different patterns'
        ],
        [
          'Same concept as before, but things get harder if you mess up'
        ],
        [
          'You seem to have mastered the basics',
          'How about we now let you choose how difficult you want it to be?',
          'Move the slider to adjust the difficulty of the initial state'
        ]
      ],
      exampleLayout: (() => {
        const layout =  new Layout({
          width: 5,
          height: 5,
          id: 'tutorial'
        });
        layout.setAllTiles(0);
        return layout;
      })()
    }
  },
  mounted() {
    window.setInterval(() => {
      this.exampleLayout.swapTiles(2, 2, 1, 2, tilesToFlip.value);
    }, 2e3);
    this.startTypewriter();
  },
  computed: {
    stage() {
      return this.stages[this.stageIndex];
    },
    showMoves() {
      return this.stage.layout.matrix.every(
        (row, r) => row.every((tile, t) => tile === this.stage.matrix[r][t])
      ) && !this.stage.solution;
    }
  },
  methods: {
    handleClick(tileIndex, row, tile) {
      if (this.stage.solution && !this.disabled && !this.enableNext) {
        if (!this.stage.solution.includes(tileIndex)) {
          this.mistakes++;
          if (this.mistakes >= 4) {
            this.highlightedTiles.push(
              [
                this.stage.solution[0] % this.stage.layout.width,
                Math.floor(this.stage.solution[0] / this.stage.layout.width)
              ]
            );
          }
          this.disabled = true;
          setTimeout(() => {
            this.stage.layout.swapTiles(row, tile, -1, this.stage.modulo ?? 2);
            this.shake = true
            this.showWrong = true;
            this.disabled = undefined;
            setTimeout(() => {
              this.showWrong = false;
            }, 2e3);
            setTimeout(() => {
              this.shake = false
            }, 900);
          }, 500);
          return;
        } else {
          this.stages[this.stageIndex].solution.splice(this.stages[this.stageIndex].solution.indexOf(tileIndex), 1);
          
          this.highlightedTiles = [];
          this.mistakes = 0;
        }
      }

      if (this.stage.layout.isSolved(this.stage.modulo ?? 2) && !this.enableNext) {
        if (this.modalPage === 0) {
          this.showModal = true;
          this.modalPage++;
          this.startTypewriter();
          
        }
        this.mistakes = 0;
        this.highlightedTiles = [];
        this.enableNext = true;
        this.highlightNext = false;
        this.nextTimer = setTimeout(() => {
          this.highlightNext = true;
        }, 15e3);
        this.text = "Click next when finished experimenting"
      }
    },
    next() {
      if (this.stage.showModal) {
        this.showModal = true;
        this.modalPage++;
        this.startTypewriter();
      }
      this.enableNext = false;
      this.highlightNext = false;
      clearTimeout(this.nextTimer);
      if (this.stageIndex === this.stages.length - 1) {
        return;
      }
      this.stageIndex++;
      this.text = this.stage.title;
    },
    reset() {
      this.stage.layout.setMatrix(this.stage.matrix);
    },
    end() {
      const store = useStore();
      store.setLayout(Layout.fromId(0));
      this.$router.push('/tutorialFreeplayGame');
    },
    startTypewriter() {
      this.currentModalText = [''];
      const text = this.modalTexts[this.modalPage];
      let i = 0; // index of the current line
      let j = 0; // index of the current character
      
      const writeChar = () => {
        if (i === text.length) { // if we reached the end of the text
          return;
        }
        if (j === text[i].length) { // if we reached the end of the line
          this.currentModalText[i] = text[i];
          i++;
          j = 0;
          writeChar();
          return;
        }
        if (text[i][j] === '<') { // if we reached a tag
          const tagEnd = text[i].indexOf('>', j);
          this.currentModalText[i] = text[i].slice(0, tagEnd + 1);
          j = tagEnd + 1;
          writeChar();
          return;
        }
        this.currentModalText[i] = text[i].slice(0, j);
        const time = text[i][j] === '.' ? 70 : 40;
        j++;
        setTimeout(writeChar, time);
      }
      
      writeChar();
    }
  }
}
</script>