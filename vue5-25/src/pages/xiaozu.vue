<template>
    <div id="con">
      <div class="fuyuan"><div class="yuan"></div></div>
     <div class="inputdemo">
       <span class="demospan1"></span><input type="text" placeholder="请输入手机号······" class="demoinput1" /><br/>
       <span class="demospan2"></span><input type="text" placeholder="请输入密码······" class="demoinput2"/>
    </div>
    
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
#con{
  position:relative;
}
.yuan{
  width:150px;
  height:150px;
  background-color: cadetblue;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
}
.fuyuan{
  width:170px;
  height:170px;
  border:1px solid black;
  position: absolute;
  left:44%;
  top: 100px;
  text-align: center;
   border-radius: 50%;
}
  .demoinput1{
    width: 80%;
    height:40px;
    padding-left:10px;
    position: absolute;
    top:2px;
    left:10%;
    border:none;
    outline:none;
     border-top:1px solid black;
    border-bottom:1px solid black;
    border-right:1px solid black;
  }
 .demoinput2{
   width: 80%;
    height:40px;
     padding-left:10px;
     position: absolute;
     top:50px;
     left:10%;
    border:none;
    border-top:1px solid black;
    border-bottom:1px solid black;
    border-right:1px solid black;
    outline:none;
  }
  .demospan1{
    display: inline-block;
    width:10%;
    height: 40px;
    /* background-color: pink; */
    position: absolute;
    top:2px;
    left: 0px;
    border-top:1px solid black;
    border-bottom:1px solid black;
    border-left:1px solid black;
    background-image: url("../assets/img/yonghu1.png");
    border-right: 1px solid gray;
    background-size: cover;
  }
  .demospan2{
    display: inline-block;
    width:10%;
     height:40px;
     /* background-color: pink; */
     position: absolute;
     top:50px;
     left:0;
    border-top:1px solid black;
    border-bottom:1px solid black;
    border-left:1px solid black;
    background-image: url("../assets/img/mima2.png");
    background-size: cover;
  }
  .inputdemo{
      width:30%;
      height:100px;
      position: absolute;
      top: 400px;
      left:37%;
    
  }
  
</style>