<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  #app{
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
  }
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
  }
</style>
