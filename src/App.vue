<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  width: 100%;
  height: 100%;
  min-width: 1350px;
  // background: url('assets/background_icon.png') no-repeat;
  // background-attachment: fixed;
  // /* 元素的最小宽度 */
  // -o-background-size: cover;
  // /* 把背景覆盖到足够大，使背景完全覆盖 */
  // -webkit-background-size: cover;
  // background-size: cover;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
