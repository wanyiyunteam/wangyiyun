<template>
<div class="box1">
  <div class="box">
    <div><b><i class="iconfont icon-6"></i></b><p>5</p></div>
    <div><b><i class="el-icon-share"></i></b><p>5</p></div>
    <div><b><i class="iconfont icon-xiazai"></i></b><p>下载</p></div>
    <div><b><i class="iconfont icon-duoxuanpt"></i></b><p>多选</p></div>
  </div>
  </div>
</template>

<script>
export default {
name:"MuiseListNav"
}
</script>

<style scoped>
.box1{
    width: 3.75rem;
    height: 0.7rem;
}
.box{
    width: 3.75rem;
    height: 0.45rem;
    /* background-color: pink; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.box>div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
i{
  color: #fff;
  font-size: 20px;
}
p{
   color: #fff;
  font-size: 15px;
}
</style>