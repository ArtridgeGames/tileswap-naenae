<template>
  <div
    :class="{ 'is-task-target': isTaskTarget,
              'is-completed': challenge.maxPercent === 100}"
    v-html="formattedChall"
  ></div>
</template>

<script>
import { Task } from "../../assets/js/Task";
import { formatTime } from "../../assets/js/Format";
export default {
  props: ["challenge"],
  computed: {
    formattedChall() {
      const maxMoves = this.challenge.moveLimit.toString();
      const nPatterns = this.challenge.nPatterns.toString();

      const score = this.challenge.maxPercent !== 0
          ? this.challenge.maxPercent !== 100
            ? this.challenge.maxPercent + "%"
            : formatTime(this.challenge.minTime)
          : "";

      return (!this.challenge.name ? (
        formatTime(challenge.timeLimit) +
          "<br>" +
          (maxMoves > 0 ? maxMoves + " moves<br>" : "no move limit<br>") +
          nPatterns +
          " layouts"
      ) : (
        this.challenge.name
      )) + ` ${(score && '<br>(') + score + (score && ')')}`;


    },
    isTaskTarget() {
      return Task.isTaskTarget(this.challenge.id, Task.TASK_TYPES.CHALLENGE);
    },
  },
};
</script>

<style scoped>
div {
  width: var(--button-default-w);
  padding: var(--button-padding);
  border: none;
  border-radius: var(--button-border-radius);
  background-color: var(--hl-color);
  color: v-bind(color);
  font-size: var(--font-size-sm);
  cursor: pointer;
  margin: 10px;
  display: inline-block;
  color: var(--shadow-text-color);
  text-align: center;
}

.is-completed {
  background-color: var(--success-color);
}
</style>