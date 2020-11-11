<template>
  <div id="app">
    <img class="s-logo" alt="Vue logo" src="./assets/redlog.png" />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #19274a;
  font-family: "PT Sans", sans-serif;
}
button {
  font-family: "PT Sans";
}

.s-logo {
  width: 42px;
  height: 60px;
  position: fixed;
  margin-left: 32px;
  z-index: 99999;
}
</style>
