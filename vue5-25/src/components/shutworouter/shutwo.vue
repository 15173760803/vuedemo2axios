<template>
    <div id="erlu">
        <router-link to="/shuyingyin/dianying">电影</router-link>
          <router-link to="/shuyingyin/dushu">读书</router-link>
            <router-link to="/shuyingyin/dianshi">电视剧</router-link>
              <router-link to="/shuyingyin/yinyue">音乐</router-link>
                <router-link to="/shuyingyin/tongcheng">同城</router-link>
   
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
  #erlu{
    width: 100%;
    border-color: aquamarine;
    height: 50px;
  }
  #erlu>a{
      width: 20%;
      text-decoration: none;
      color:blackl;
      float: left;
      line-height: 50px;
  }
</style>
