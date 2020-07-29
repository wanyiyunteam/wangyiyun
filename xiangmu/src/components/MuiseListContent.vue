<template>
  <div class="box">
       <ul>
           <li>
               <div class="header"><b><i class="iconfont icon-bofang4"></i></b>
               <em>播放全部(共30首)</em></div>
               <van-button round type="info" color="#e63434">+   收藏(600)</van-button>
           </li>
           <li v-for="(Song,index) in Songs " :key="index">
               <div><div><em>{{index}}</em></div><div><em>{{Song.name}}</em><em class="auther">{{Song.auther}}</em></div></div>
               <div><b><i class="iconfont icon-bofang4"></i></b>
               <b><i class=" iconfont icon-gengduo4"></i></b></div>
           </li>
       </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
name:"MuiseListContent",
data(){
    return{
      Songs:[]
    }
},
created(){
    axios({
        url:"songsList"
    })
    .then(res=>this.Songs=res.data)
}
}
</script>

<style scoped>
    .box{
        width: 100%;
        min-height: 4.75rem;
        background-color: #151515;
        /* padding: 0 .15rem; */
        border-radius: 30px 30px 0 0;
        position: relative;
        top: -20px;
    }
    ul{
        padding: 0 .15rem;
    }
    .box>ul>li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.6rem;
    }
    em{
        color: #fff;
        font-size: 18px;
    }
    em>em{
        color: #ccc;
    }
    i{
        color: #fff;
        font-size: 18px;

    }
   .header{
        width: 1.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li>div:nth-child(1){
        width: 1.75rem;
        display: flex;
        align-items: center;
    }
    li>div:nth-child(1)>div:nth-child(1){
        width: 0.38rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
    }
        li>div:nth-child(1)>div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
    }
       li>div:nth-child(2){
        height: 100%;
        width: 0.6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 15px;
    }
    .auther{
        width: 1.2rem;
        font-size: 12px;
        color: #ccc;
        white-space: nowrap;
        overflow: hidden;
    }
</style>