<template>
  <div class="box">
       <ul>
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
    name:"Nav",
    


}
</script>

<style scoped>
.box{
    width:100%;
    height: 0.7rem;
    background-color:#14151a;
}
.box ul{
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
li{
    width: 0.45rem;
    height: 0.45rem;
    background-color:#14151a;
    border-radius: 50%;
    color: #e7e7e7;
    font-size: 25px;
    font-weight: 300;
    line-height: 0.45rem;
    text-align: center;
}
p{
    margin-top: 0.005rem;
    text-align: center;
    color: #e7e7e7;
    font-size:12px ;
}

</style>