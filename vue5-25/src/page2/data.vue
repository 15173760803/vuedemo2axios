<template>  
<div>
 <div class="page2-com">
        <div class="fudong" v-if="fun1number">{{tishi}}</div>
        <div id="top"><div class="top-div"></div><div class="tittle">注册</div></div>
        <ul>
            <li><input type="text" placeholder="请输入手机号···" v-model="inputtext"/></li>
            <li class="li2"><input type="text" id="chlide2" placeholder="验证码" v-model="yanzheng"/><span class="demospan" v-if="!xianshidata">再次验证{{time}}</span><span class="demospan2"  v-if="xianshidata" @click="fun1()">短信验证</span></li>
            <li><input :type="xianshidata2?'password':'text'" placeholder="请输入密码···" v-model="pwd" id="childe3"/><span class="yanjing1"><div class="spandiv1" v-if="!xianshidata2" @click="xfun2()"></div><div class="spandiv2" v-if="xianshidata2"  @click="xfun1()"></div></span></li>
           <li><input :type="xianshidata3?'password':'text'" placeholder="再次确认密码···" v-model="rpwd" id="childe4"/><span class="yanjing1"><div class="spandiv3" v-if="!xianshidata3" @click="xfun4()"></div><div class="spandiv4" v-if="xianshidata3"  @click="xfun3()"></div></span></li>
               
        </ul>
        <button id="btn" @click="fun2()">注册</button>
    </div>
</div>
   
</template>
<script>
export default {
    data(){
        return{
          inputtext:'',
          fun1number:false,
          tishi:'',
          yanzheng:'',
          xianshidata:true,
          xianshidata2:true,
          xianshidata3:true,
          pwd:'',
          rpwd:'',    
          time:60,
        }
    },
    methods: {
        fun1(){
            // this.fun1number=true;
            // setTimeout(()=>{
            //   this.fun1number=false;
            //   console.log( this.fun1number);
            // },3000)
        var phone=this.inputtext;
         if(this.inputtext==''){
            this.fun1number=true;
            this.tishi="手机号不能为空"
            console.log("aaaaa");
            setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
            },2000)
            return false;
         }else if(!(/^1[34578]\d{9}$/.test(phone))){
               this.fun1number=true;
                this.tishi="手机号格式不正确";
                console.log("qqqqq");
             setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
            },2000)
             return false;
         }else{
             var tel1=this.inputtext;
             this.xianshidata=false;
             var url="http://localhost:3000/getCkeckNum?tel="+tel1;
            // var url="http://localhost:3000/getCkeckNum?tel="+tel1+"&name="+name1;
             this.axios.get(url).then((data)=>{
                //  console.log(data.data.recommend_feeds[0].id);
                this.yanzheng=data.data.data
                console.log(data.data.data);

             })
            var timefade=setInterval(()=>{
                this.time--;
                if(this.time==0){
                   this.xianshidata=true;
                    clearInterval(timefade);
                     this.time=60;
                }
                console.log(this.time)
             },1000) 
            return true;
         }
            
    },
    fun2(){
        if(this.inputtext==''){
          this.fun1number=true;
            this.tishi="手机号不能为空"
            console.log("aaaaa");
            setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
            },2000)
        }else if(this.pwd==''){
             this.fun1number=true;
            this.tishi="密码不能为空"
            setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
            },2000) 
            }else if(this.pwd != this.rpwd){
              this.fun1number=true;
              this.tishi="两次密码不同"
              setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
            },2000) 
            
            }else{
                var c1=this.inputtext;
                var c2=this.pwd;
                 this.fun1number=true;
                this.tishi="注册成功"
               setTimeout(()=>{
                this.fun1number=false;
                 console.log( this.fun1number);
             },2000) 



    //             var tel = data.tel;
    // var pwd = data.pwd;
    // var check = data.check;
    // var checkPwd = data.checkPwd;
               var url="http://localhost:3000/register";
               var params =new URLSearchParams();
               params.append("tel",c1);
               params.append("pwd",c2);
               console.log(params);
              this.axios.post(url,params).then(()=>{console.log("")})
            }
                
    },
    xfun1(){
       this.xianshidata2=false;
    },
    xfun2(){
       this.xianshidata2=true;
    },
    xfun3(){
       this.xianshidata3=false;
    },
    xfun4(){
       this.xianshidata3=true;
    }

    }
 
}
</script>
<style>
  #top{
      width:100%;
      height:0.5rem;
      background-color: gainsboro;
      /* background-image:url("../assets/img/zuo.png"); */
      margin-top:0px;
      box-sizing: border-box;
      padding-top:0.1rem;
      box-shadow: 2px grey;
      position:fixed;
  } 
  .tittle{
      text-align: center;
      color:aliceblue;
      width: 0.4rem;
      height: 0.3rem;
      float:left;
      margin-left:1rem;
      font-size: 0.15rem;
      
  }
 .top-div{
      width: 0.3rem;
      height: 0.3rem;
      background-image: url("../assets/img/zuo.png");
      background-size: cover;
     float: left;
  } 
  ul{
    list-style-type: none;
    width:2rem;
    height: 2.5rem;
   box-sizing:border-box;
   padding-top:1rem;
    margin: 0px auto;
  }
  ul>li>input{
      width:2rem;
      height: 0.3rem;
     
      margin-top:0.05rem;
      margin-bottom:0.05rem;
      border:none;
      border:1px solid gainsboro;
      outline:none;
      box-sizing:border-box;
      padding-left: 0.2rem;
  }
  #chlide2{
      width: 0.9rem;
      height: 0.3rem;
       
      float: left;
    
  }
.demospan{
    text-align: center;
    display:inline-block;
    border:1px solid gray;
    width: 0.9rem;
    height: 0.3rem;
    float: right;
    margin-top:0.05rem;
    font-size: 0.1rem;
    line-height: 0.3rem;
 
}
.li2{
    position: relative;
}
.demospan2{
    text-align: center;
    display:inline-block;
    border:1px solid blue;
    width: 0.9rem;
    height: 0.3rem;
    position: absolute;
    top:0.05rem;
    right: 0px;
    font-size: 0.1rem;
    line-height: 0.3rem;
    color:blue;
 
}

  .page2-com{
      font-size:0px;
  }
  #btn{
      width: 2.5rem;
      height: 0.4rem;
      margin: 0px auto;
     background-color:gray;
     outline: none;
     border: none;
     font-size: 0.2rem;
     color:white; 
     margin-top:2rem;
  
  }
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
  #childe3{
   width:1.5rem;
   height: 0.3rem;
   float: left;
   border:none;
   border-top:1px solid  gainsboro;
    border-left:1px solid  gainsboro;
    border-bottom:1px solid  gainsboro;
   
  }
  .yanjing1{
      width: 0.49rem;
      height: 0.285rem;
      display:inline-block;
      float: left;
      /* background-color: aqua; */
      margin-top: 0.05rem;
      border-top:1px solid  gainsboro;
      border-right:1px solid  gainsboro;
      border-bottom:1px solid  gainsboro;
   
  }

    .spandiv1{
       width: 0.3rem;
       height: 0.25rem;
       background-image: url("../assets/img/eye1.png");
      background-size:cover;
      margin: 0 auto;
  }
    .spandiv2{
       width: 0.3rem;
       height: 0.25rem;
       background-image: url("../assets/img/eye2.png");
      background-size:cover;
      margin: 0 auto;
  }
    .spandiv3{
       width: 0.3rem;
       height: 0.25rem;
       background-image: url("../assets/img/eye1.png");
      background-size:cover;
      margin: 0 auto;
  }
    .spandiv4{
       width: 0.3rem;
       height: 0.25rem;
       background-image: url("../assets/img/eye2.png");
      background-size:cover;
      margin: 0 auto;
  }
  
  #childe4{
width:1.5rem;
   height: 0.3rem;
   float: left;
   border:none;
   border-top:1px solid  gainsboro;
    border-left:1px solid  gainsboro;
    border-bottom:1px solid  gainsboro;
  }
</style>