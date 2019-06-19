<template>
    <div class="demodiv" >
       <Button url="/shouye" tittle="首页" mark="1" @zigave="fu" :marktwo="fudata"> 
            <img slot="slot1" src="../assets/img/1.png">
            <img slot="slot2" src="../assets/img/6.png">
       </Button>
       <Button url="/guangbo" tittle="广播1"  mark="2" @zigave="fu" :marktwo="fudata"> 
           <img slot="slot1" src="../assets/img/2.png">
            <img slot="slot2" src="../assets/img/7.png">   
       </Button>
       <Button url="/shuyingyin" tittle="书影音1"  mark="3" @zigave="fu" :marktwo="fudata"> 
           <img slot="slot1" src="../assets/img/3.png">
             <img slot="slot2" src="../assets/img/8.png">   
       </Button>
       <Button url="/haha" tittle="购物车"  mark="4" @zigave="fu" :marktwo="fudata">
           <img slot="slot1" src="../assets/img/4.png">
           <img slot="slot2" src="../assets/img/9.png">  
        </Button>
       <Button url="/xiaozu" tittle="我的"  mark="5" @zigave="fu" :marktwo="fudata"> 
          <img slot="slot1" src="../assets/img/5.png">
          <img slot="slot2" src="../assets/img/10.png">
       </Button>
         
    </div>
</template>
<script>
import Button from './button'
export default {
    components:{
        Button
    },
    data(){
         return{
            fudata:""
         }
    },
    methods: {
     fu(val){
         this.fudata=val
     }   
    }
}
</script>
<style>
    .demodiv{
        width: 100%;
        height: 100px;
        border-top:1px solid red;
        
           position: absolute;
           bottom:0px;
    }
  
</style>