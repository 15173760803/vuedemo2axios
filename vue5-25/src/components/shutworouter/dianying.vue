<template>
    <div>
        <p>电影页面</p>
       
        <DianYingTwo :dianyingdata="dianyingarr"></DianYingTwo>
    </div>
</template>
<script>
import DianYingTwo from './dianyingtwo'
export default {
    data() {
        return {
           dianyingarr:[] 
        }
    },
    created() {
       this.axios.get("/api/someApi").then(
        (data)=>{
            console.log(data.data.recommend_feeds);
            this.dianyingarr=data.data.recommend_feeds
        }
    )  
    },
    components:{
        DianYingTwo
    }
   
}
</script>