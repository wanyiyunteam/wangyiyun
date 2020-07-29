<template>
  <div class="box">
    <b @click="shoucangFn">
      <i :class="isRed?classB:classA" ref="like"></i>
    </b>
    <b >
      <i class="iconfont icon-xiazai" ></i>
    </b>
    <b>
      <i class="iconfont icon-maikefeng"></i>
    </b>
    <b>
      <van-icon name="chat-o" size="20" color="#ccc"  badge="999+" />
    </b>
    <b>
      <i class="iconfont icon-gengduo"></i>
    </b>
  </div>
</template>

<script>
export default {
  name: "MuiseConent",
  data(){
      return{
      isRed:false,
      classA:"iconfont icon-shoucang4",
      classB:"iconfont icon-favorite-copy"
      }
  },
  methods:{
      shoucangFn(){
         this.isRed=!this.isRed;  
      }
  }
};
</script>

<style scoped>
.box {
  width: 3.75rem;
  height: 0.75rem;
  background-color:#606159 ;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
b>i{
    font-size: 25px;
    color: #ccc;
}
.icon-favorite-copy{
  color:red;
    font-size: 25px;

}
</style>b:nt