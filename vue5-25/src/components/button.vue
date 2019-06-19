<template>
<div>
  <div class="demobutton" @click="fun1()" >
      <router-link :to="url">
            <span class="img"  v-if="bool"><slot name="slot1"></slot> </span>
            <span class="img" v-else>  <slot name="slot2"></slot> </span>
           <span id="tittlea" :class="bool?'':'active'">{{tittle}}</span>
     </router-link>
            
    </div>
    

</div>
  
</template>
<script>
export default {
    data() {
        return {
            // arr:[
            //     {tittle:"首页1",url:"/shouye"},
            //     {tittle:"广播1",url:"/guangbo"},
            //     {tittle:"书影音1",url:"/shuyingyin"},
            //     {tittle:"讨论1",url:"/haha"},
            //     {tittle:"小组1",url:"/xiaozu"}
            // ]
        }
    },


    props:{
        tittle:String,
        url:String,
        mark:String,
        marktwo:String
    },
    methods: {
        fun1(){
          console.log(this.mark+"------"+this.marktwo);
          this.$emit("zigave",this.mark)
        }
    },
    computed: {
        bool(){
            if(this.mark==this.marktwo){
                return false
            }else{
                return true
            }
        }
    },
}
</script>
<style>
.demobutton{
    width:20%;
    height: 100px;
    text-align: center;
    float: left;
    line-height: 100px;
   overflow:hidden;
   position:relative;
}
.demobutton>a{
    text-decoration:none;
    color:green;
}

.img{
    width:20%;
    height:50px;
    position:absolute;
    left:55px;
   
}
#tittlea{
    display:block;
    width:20%;
    position:absolute;
    top:30px;
    height:50px;
    left:65px;
}
.active{
    color:red;
}
</style>


