<template>
  <div class="box">
      <b><i class="el-icon-back" @click="backFn"></i></b>
      <div><input type="text" placeholder="Love Is Gone"></div>
      <b><i class="iconfont icon-kehu4"></i></b>
  </div>
</template>

<script>
export default {
name:"searchHeader",
methods:{
    backFn(){
        this.$router.go(-1);
    }
}
}
</script>

<style scoped>
.box{
    padding: 0 .2rem;
    height: 0.55rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c2c2c;
}
input{
    width: 2.5rem;
    height: 0.35rem;
    border: none;
    border-bottom: 1px solid #666666;
    background-color: #2c2c2c;
    color: #fff;
}
i{
    font-size: 20px;
    color: #fff;
}
</style>