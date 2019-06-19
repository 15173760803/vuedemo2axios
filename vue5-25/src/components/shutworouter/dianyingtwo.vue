<template>
    <div>
        <div class="item" v-for="(v,i) in dianyingdata">
            <p>{{v.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        dianyingdata:Array
    }
}
</script>
<style>
.item{
    color:green;
}
    
</style>