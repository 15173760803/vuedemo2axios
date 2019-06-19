<template>
    <div class="shuyingyin">
     <p>{{tittle}}</p>
     <ShuTwo></ShuTwo>
      <router-view></router-view>
    </div>
</template>
<script>
import ShuTwo from '../components/shutworouter/shutwo'
export default {
  data() {
    return {
      tittle:"书影音"
    }
  },
  components:{
    ShuTwo
  },
  created() {
    this.$router.push("/shuyingyin/dianying")
  }
}
</script>