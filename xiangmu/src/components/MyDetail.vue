<template>
  <div class="box">
    <div class="box-left">
      <span>
        <img src="/static/img/3.png" />
      </span>
      <div class="left1">
        <p class="p1">林路西</p>
        <p class="p2">VIP</p>
      </div>
    </div>
    <div class="box-right">
      <p class="vip">开通黑胶VIP</p>
      <p class="el-icon-arrow-right"></p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDetail",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height:1rem;
  background-color: #14151a;
  /* padding-left: 0.06rem; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.box-left {
  width: 100%;
  height: 1.16rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.left1 {
  margin-left: 0.07rem;
}
.p1 {
  font-size: 14px;
  font-weight: 550;
  color: #ffffff;
}
.p2 {
  color: #757575;
  width: 0.35rem;
  height: 0.17rem;
  border-radius: 0.09rem;
  background-color: #515055;
  margin-top:0.04rem ;
  text-align: center;
  font-size: 12px;
}
img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.box-right{
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    /* margin-right: 0.2rem; */
}
.vip{
    width: 0.8rem;
    color: #717274;
    font-size: 13px;
}
.el-icon-arrow-right{
    margin-right: 0.05rem;
    /* font-size: 30px; */
    color: #717274;
}
</style>