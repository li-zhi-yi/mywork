<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  width: 375px;
  height: 667px;
  position:relative;
  left:50%;
  transform:translateX(-50%);
}
</style>
