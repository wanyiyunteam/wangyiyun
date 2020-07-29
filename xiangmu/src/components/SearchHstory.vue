<template>
  <div class="box">
      <div>
      <h2>历史记录</h2>
      <i class="el-icon-delete"></i>
      </div>
      <div>
    
    <van-button round type="info" size="small" color="#252525">官方回答</van-button>
    <van-button round type="info" size="small" color="#252525">南下</van-button>
    <van-button round type="info" size="small" color="#252525">当</van-button>
    <van-button round type="info" size="small" color="#252525">青花瓷</van-button>
    <van-button round type="info" size="small" color="#252525">素颜</van-button>
    <van-button round type="info" size="small" color="#252525">官方回答</van-button>
    <van-button round type="info" size="small" color="#252525">南下</van-button>
    <van-button round type="info" size="small" color="#252525">当</van-button>
          <!-- <el-button type="info" size="mini" round>官方回答</el-button>
          <el-button type="info" size="mini" round>南下</el-button>
          <el-button type="info" size="mini" round>当</el-button>
          <el-button type="info" size="mini" round>青花瓷</el-button>
          <el-button type="info"  size="mini" round>素颜</el-button>
          <el-button type="info"  size="mini" round>素颜</el-button> -->
      </div>
  </div>
</template>

<script>
export default {
name:"SearchHstory",

}
</script>

<style scoped>
.box{
    height: 1.15rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.box>div:nth-child(1){
    width: 3.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box>div:nth-child(2){
   width: 3.35rem;
    display: flex;
    /* justify-content: space-around;
    align-items: center; */
    flex-wrap:wrap;
}
h2{ 
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}
i{ 
    font-size: 18px;
    color: #ccc;
}
</style>