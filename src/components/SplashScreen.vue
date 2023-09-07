<template>
  <main>
    <h1>tile<span>swap</span></h1>
    <p> loading... </p>
  </main>
</template>

<style scoped>
  main {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #bbb2ea;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: var(--title-font-size);
    margin: 0;
  }
  span {
    color: var(--shadow-color)
  }
  p {
    font-size: var(--font-size-sm)
  }
</style>