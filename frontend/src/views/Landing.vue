<template>
  <div>
    <img class="s-logo" alt="Vue logo" src="../assets/redlog.png" />
    <router-link :to="{ name: 'Login' }"
      ><img class="shui-logo" alt="Vue logo" src="../assets/SHUILogo.png"
    /></router-link>
    <img class="waterbottom" alt="Vue logo" src="../assets/waterbottom.png" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.s-logo {
  width: 42px;
  height: 60px;
  position: fixed;
  margin-left: 32px;
}

.shui-logo {
  width: 150px;
  height: 120px;
  margin-left: 100px;
  margin-top: 200px;
}

.waterbottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
</style>