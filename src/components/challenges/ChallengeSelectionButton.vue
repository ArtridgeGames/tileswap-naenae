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
    width:210px;
    padding: 15px;
    border: none;
    border-radius: 7px;
    background-color:white;
    color: v-bind(color);
    font-size: 25px;
    cursor: pointer;
    margin: 10px;
    display: inline-block;
    color: black;
    text-align:center;
}


</style>