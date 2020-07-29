<template>
  <div class="box">
    <ul>
      <div @click="toRecommendFn">
        <li class="el-icon-date"></li>
        <p>每日推荐</p>
      </div>
      <div @click="toSongsListFn">
        <li class="iconfont icon-diantai"></li>
        <p>歌单</p>
      </div>
      <div @click="toRankingFn"> 
        <li class="iconfont icon-paihang1"></li>
        <p>排行榜</p>
      </div>
      <div>
        <li class="iconfont icon-dianyin"></li>
        <p>电台</p>
      </div>
      <div>
        <li class="iconfont icon-aggre"></li>
        <p>直播</p>
      </div>
      <div>
        <li class="el-icon-date"></li>
        <p>每日推荐</p>
      </div>
      <div>
        <li class="iconfont icon-diantai"></li>
        <p>歌单</p>
      </div>
      <div>
        <li class="iconfont icon-paihang1"></li>
        <p>排行榜</p>
      </div>
      <div>
        <li class="iconfont icon-dianyin"></li>
        <p>电台</p>
      </div>
      <div>
        <li class="iconfont icon-aggre"></li>
        <p>直播</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods:{
    toRecommendFn(){
     this.$router.push({ path: '/muiseList' })
    },
    toSongsListFn(){
     this.$router.push({ path: '/' })
    },
    toRankingFn(){
     this.$router.push({ path: '/' })
    }
  }
};
</script>

<style scoped>
.box {
  /* width: 100%; */
  height: 0.8rem;
  background-color: #ffffff;
  overflow: hidden;
  overflow-x:auto;  
    white-space: nowrap;
}
.box ul {
  width: 200%;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box::-webkit-scrollbar {
    display: none;
} 
ul>div{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

} 
li {
  width: 0.45rem;
  height: 0.45rem;
  background-color: #fe332d;
  border-radius: 50%;
  color: #ffffff;
  font-size: 23px;
  font-weight: 560;
  line-height: 0.45rem;
   text-align: center; 
}
p {
  /* margin-top: 0.03rem;
  text-align: center; */
  font-size: 15px;
}
</style>