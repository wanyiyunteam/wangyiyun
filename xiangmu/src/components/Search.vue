<template>
    <div class="box">
        <ul>
        <i class="el-icon-s-fold"></i>
        <span><router-link to="/My" tag="li">我的</router-link></span>
        <span class="span"><router-link to="/" tag="li">发现</router-link></span>
        <span>云村</span>
        <span>视频</span>
         <i class="el-icon-search" @click="serchFn" ></i>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Search",
    methods:{
        serchFn(){
            this.$router.push({ path: '/Search' })
        }
    }
}
</script>

<style scoped>
.box{
    background-color: red;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    width:100%;
    height: 0.5rem;
}
.span{
    color: black;
    font-size: 22px;
    font-weight: bold;
}
.box ul{
   width:100%;
   height: .5rem;
   /* background-color: pink; */
   display: flex;
   justify-content: center;
   align-items: center;
}

span{
    list-style: none;
    float: left;
    margin:0 0.125rem;
    font-size:17px;
    color: #797979;
}
.el-icon-s-fold{
    margin-right: 0.3rem;
    font-size: 17px;
    color: #797979;
}
.el-icon-search{
    margin-left: 0.3rem;
    font-size: 17px;
    color: #797979;
}



</style>