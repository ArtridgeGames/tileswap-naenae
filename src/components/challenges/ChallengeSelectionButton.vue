<script setup>
import lockURL from "/images/svg/lock.svg";
</script>

<template>
  <div
    :class="{
      'is-task-target': isTaskTarget,
      'is-completed': challenge.maxPercent === 100,
    }"
    v-html="formattedChall"
    :title="`id: ${challenge.id}`"
    class="challenge-button"
    v-if="!locked"
  ></div>
  <div class="locked" v-else :title="`id: ${challenge.id}`">
    <img :src="lockURL" />
  </div>
</template>

<style scoped>
.locked {
  background: #ddd;
  cursor: default;
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
  width: 60%;
  border-radius: var(--button-border-radius);
  display: inline-block;
  position: relative;
  margin: 5px 10px;
}
</style>

<script>
import { Task } from "../../assets/js/Task";
import { formatTime } from "../../assets/js/Format";
export default {
  props: ["challenge", "locked"],
  computed: {
    formattedChall() {
      const maxMoves = this.challenge.settings.moveLimit.toString();
      const nPatterns = this.challenge.settings.patternCount.toString();

      const score = "0";
        // this.challenge.maxPercent !== 0
        //   ? this.challenge.maxPercent !== 100
        //     ? this.challenge.maxPercent + "%"
        //     : this.challenge.timeLimit !== -1
        //     ? formatTime(this.challenge.minTime)
        //     : this.challenge.moveLimit !== -1
        //     ? this.challenge.minMoves + " moves"
        //     : ""
        //   : "";

      return (
        (!this.challenge.title
          ? formatTime(this.challenge.settings.timeLimit) +
            "<br>" +
            (maxMoves > 0 ? maxMoves + " moves<br>" : "no move limit<br>") +
            nPatterns +
            " layouts"
          : this.challenge.title) +
        ` ${(score && "<br>(") + score + (score && ")")}`
      );
    },
    isTaskTarget() {
      return Task.isTaskTarget(this.challenge.id, Task.TASK_TYPES.CHALLENGE);
    },
  },
};
</script>

<style scoped>
div {
  width: 60%;
  padding: var(--button-padding);
  border: none;
  border-radius: var(--button-border-radius);
  background-color: var(--hl-color);
  color: v-bind(color);
  font-size: var(--font-size-sm);
  cursor: pointer;
  margin: 5px 10px;
  display: inline-block;
  color: var(--shadow-text-color);
  text-align: center;
}

.is-completed {
  background-color: var(--success-color);
}
</style>