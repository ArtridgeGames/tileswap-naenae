<template>
    <div v-html="formattedChall">

    </div>
</template>

<script>
export default {
  props: ['challenge'],
  computed: {
    formattedChall() {
      const minutes = Math.floor(this.challenge.timeLimit/60).toString();
      const seconds = (this.challenge.timeLimit%60).toString();
      const maxMoves = this.challenge.moveLimit.toString();
      const nPatterns = this.challenge.nPatterns.toString();
      return  minutes + ":" + seconds + "<br>" + (maxMoves>0?(maxMoves + " moves<br>"):"no move limit<br>") + nPatterns + " layouts"
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