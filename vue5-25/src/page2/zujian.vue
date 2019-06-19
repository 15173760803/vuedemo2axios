<template>
       <div>
   <div class="fudong" v-if="zi">{{zi2}}</div>
   <button @click="funzi()">点我</button>
       </div>
    
       
</template>
<script>
export default {
    data() {
        return {
            posdata:"123456"
        }
    },
    methods:{
        funzi(){
              this.$emit("zipao",this.posdata)
        }
    },
    computed:{
       zi(){
           return this.$store.state.toast.zi
           },
       zi2(){
           return this.$store.state.toast.zi2
       }
    }
}
</script>
<style>
     .fudong{
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(53, 46, 47, 0.4);
      font-size: 0.2rem;
      text-align: center;
      box-sizing: border-box;
      padding-top:2rem;
      color:white;
      z-index: 9;
  }
  button{
      width: 100%;
      height: 0.5rem;
      margin: 0px auto;
      margin-top:0.1rem;
      font-size:0.2rem;
        }
</style>