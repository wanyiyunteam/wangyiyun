<template>
  <div class="box">
      <div><b><i class="el-icon-back" @click="backFn"></i></b></div>
      <div><div><h1>飘渺醉</h1></div><div><h3>刘可义</h3><b><i class="el-icon-arrow-right"></i></b></div></div>
      <div><b><i class="el-icon-share"></i></b></div>
  </div>
</template>

<script>
export default {
name:"MuiseHeader",
methods:{
    backFn(){
        this.$router.go(-1);
    }
}
}
</script>

<style scoped>
div{
    display: flex;
}
.box{
    width:100%;
    height: .43rem;
    background-color: #606159;
    justify-content: space-between;
    align-items: center;
}
 .box>div:nth-child(1){
    
    justify-content: center;
    align-items: center;
    margin-left: 0.18rem;
}
.box>div:nth-child(1)>b{
    font-size: 19px;
    color: #9d9fa2;
}
.box>div:nth-child(2){
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
h1{
    font-size: 20px;
    color: #fff;
}
h3{
    font-size: 15px;
    color:#aaaaa8 ;

}
.box>div:nth-child(2)>div>b{
    font-size: 9px;
    color: #9d9fa2;

}
.el-icon-arrow-right{
    text-align: center;
    line-height: 20px;
}
.box>div:nth-child(3){
    margin-right: 0.18rem;
}
.box>div:nth-child(3)>b{
    font-size: 21px;
    color: #9d9fa2;
}
</style>