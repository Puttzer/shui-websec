<template>
  <div id="app">
    <img class="s-logo" alt="Vue logo" src="./assets/redlog.png" />
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #19274a;
}

.s-logo {
  width: 42px;
  height: 60px;
  position: fixed;
  margin-left: 32px;
}
</style>
