<template>
  <div id="app">
      <Regirter></Regirter>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Regirter from './page2/register'
export default {
  name: 'app',
  components:{
   Regirter
  }
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>


