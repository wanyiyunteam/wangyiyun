<template>
    <div class="box">
        <ul>
        <i class="el-icon-s-fold"></i>
        <span class="span"><router-link to="/My" tag="li">我的</router-link></span>
        <span><router-link to="/" tag="li">发现</router-link></span>
        <span>云村</span>
        <span>视频</span>
         <i class="el-icon-search"></i>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Search",
    
}
</script>

<style scoped>
.box{
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color:#14151a;
    color: #8d8c91;
    width:100%;
    height: .5rem;
}
.span{
    color: #ffffff;
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