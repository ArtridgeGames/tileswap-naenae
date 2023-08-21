<template>
    <div v-html="formattedChall" 
    :class = "{'is-task-target': isTaskTarget}" >
    </div>
</template>

<script>
import { Task } from '../../assets/js/Task';
export default {
  props: ['challenge'],
  computed: {
    formattedChall() {
      const minutes = Math.floor(this.challenge.timeLimit/60).toString();
      const seconds = (this.challenge.timeLimit%60).toString();
      const maxMoves = this.challenge.moveLimit.toString();
      const nPatterns = this.challenge.nPatterns.toString();
      if (this.challenge.name === "") {
        return  minutes + ":" + seconds + "<br>" + (maxMoves>0?(maxMoves + " moves<br>"):"no move limit<br>") + nPatterns + " layouts"
      }
      return this.challenge.name;
    },
    isTaskTarget() {
      return Task.isTaskTarget(this.challenge.id, Task.TASK_TYPES.CHALLENGE)
    }
  }
}
</script>

<style scoped>

div {
    width:var(--button-default-w);
    padding: var(--button-padding);
    border: none;
    border-radius: var(--button-border-radius);
    background-color:var(--hl-color);
    color: v-bind(color);
    font-size: var(--font-size-sm);
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    color: var(--shadow-text-color);
    text-align:center;
}


</style>