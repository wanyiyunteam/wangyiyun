<template>
  <div class="box" >
   <audio src="../../static/img/jinianpin_lyj.mp3" ref="muisePlay"></audio>
   <router-link to="/playSong" tag="li"><div class="box-left">
       <span>
           <img src="/static/img/3.png">
       </span>
       <div class="left1">
           <p class="p1">有名无分</p>
           <p class="p2">李冠霖</p>
       </div>
   </div></router-link>
   <div class="box-right">
      <p @click="playFn" :class="playClass"></p>
       <p class="iconfont icon-zhedie1"></p>
   </div>
  </div>
</template>

<script>
export default {
    name:"MyFooter",
    data(){
        return{
            playFalg:true,
            playClass:"iconfont icon-bofang"
        }
    },
    methods:{
        playFn(){
             if(this.playFalg==true){
            this.playClass= "iconfont icon-zanting2";
            this.playFalg=false;
            this.$refs.muisePlay.play();
         }else if(this.playFalg==false){
             this.playClass="iconfont icon-bofang3";
             this.playFalg=true;
             this.$refs.muisePlay.pause();
             
         }
          
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 0.51rem;
    background-color: #1d1c21;
    position: fixed;
    bottom:0px; 
    padding-left: 0.06rem;  
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    border-top: 1.2px solid #f9f9f9;
}
.box-left{
    width: 100%;
    height: 0.51rem;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.left1{
    margin-left: 0.07rem;
}
.p1{
    color: #f9f9f9;
    font-size: 15px;
}
.p2{
    color: #757575;
    font-size: 12px;
}
.box-right{
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    margin-right: 0.2rem;
    flex: 1;
}
.iconfont{
    font-size: 22px;
    font-weight: 200;
    color: #4d4d4d;
}
.box-right >p:nth-child(1){
    margin-right: 0.25rem;
    font-size: 28px;
}
img{
    width: 0.38rem;
    height: 0.38rem;
    border-radius:50% ;
}
</style>