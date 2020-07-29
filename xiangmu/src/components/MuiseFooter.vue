<template>

      <!-- <b><van-progress inactive pivot-text="1:45/3:00" percentage pivot-color="#000" stroke-width="1"/></b> -->
  <div class="box">
      <b @click="randomFn"><i :class="randomClass"></i></b>
      <b><i class="iconfont icon-houtui"></i></b>
      <b @click="playFn" ><i :class="playClass"></i></b>
      <b><i class="iconfont icon-kuaijin1"></i></b>
      <b><i class="iconfont icon-gengduo2"></i></b>
      <audio src="../../static/img/jinianpin_lyj.mp3" ref="muisePlay"></audio>

  </div>
</template>

<script>
import bus1 from "../eventBus/eventBus"
export default {
name:"MuiseFooter",
data:function(){
    return{
        playFalg:true,
        randomPlay:0,
        playClass:"iconfont icon-zanting2",
        randomClass:"iconfont icon-loop",
    }
},
methods:{
    playFn(){
         if(this.playFalg==true){
            this.playClass= "iconfont icon-zanting2";
            this.playFalg=false;
            this.$refs.muisePlay.play();
            bus1.$emit("PlaybarMover",!this.playFalg)
         }else if(this.playFalg==false){
             this.playClass="iconfont icon-bofang3";
             this.playFalg=true;
             this.$refs.muisePlay.pause();
             bus1.$emit("PlaybarMover",!this.playFalg)
         }
          
    },
    randomFn(){
        if(this.randomPlay==0){
            this.randomClass="iconfont icon-loop";
            this.randomPlay=1;
            this.$refs.muisePlay.loop()
        }else if(this.randomPlay==1){
            this.randomClass="iconfont icon-liebiaoxunhuan3";
            this.randomPlay=2;
        }else if(this.randomPlay==2){
            this.randomClass="iconfont icon-suijibofang";
            this.randomPlay=0;
        }
    }
}
}

</script>

<style scoped>
.box{
    width: 3.75rem;
    height: .95rem;
    background-color: #606159;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.box>b>i{
    font-size: 20px;
    color: #ccc;
}

.box>b:nth-child(3)>i{
    font-size: 55px;
}
</style>