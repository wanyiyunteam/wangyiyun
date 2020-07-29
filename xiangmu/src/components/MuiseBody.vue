<template>
  <div class="box">
    <div>
      <div>
        <img src="../../static/img/Playbar.png" :class="playFalg?classA:classB" />
      </div>
    </div>
    <div>
      <div :style="!playFalg?stop:start">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import bus1 from "../eventBus/eventBus";
export default {
  name: "MuiseBody",
  data() {
    return {
      playFalg: true,
      classA: "img1",
      classB: "img",
    //   styleA: "animation: lunzi 5s linear infinite reverse;",
      stop:"animation-play-state:paused;",
      start:"animation-play-state:running;" 
    };
  },
  methods: {},
  mounted() {
    var that = this;
    bus1.$on("PlaybarMover", function(str) {
    //   console.log(str);
      that.playFalg = str;
    });
  }
};
</script>

<style scoped>
.box {
  width: 3.75rem;
  height: 4.53rem;
  background-color: #606159;
}
.box > div:nth-child(1) {
  width: 100%;
  height: 0.82rem;
  position: relative;
}
.box > div:nth-child(1) > div {
  position: absolute;
  z-index: 1000;
  padding-left: 1.6rem;
  padding-top: 0.01rem;
}
.box > div:nth-child(2) {
  width: 100%;
  height: 2.75rem;
  background-color: #606159;
  position: relative;
}
.box > div:nth-child(2) > div {
  position: absolute;
  width: 2.75rem;
  height: 2.75rem;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  border-radius: 50%;
  animation: lunzi 10s linear infinite;
}
@keyframes lunzi {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.box > div:nth-child(2) > div > div {
  position: absolute;
  width: 1.85rem;
  height: 1.85rem;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url(../../static/img/aaaa.jpg) no-repeat center;
  border-radius: 50%;
}
.img1 {
  width: 20;
  transform-origin: 18px 13px;
  transform: rotate(20deg);
  transition: 1.5s;
}
.img {
  width: 20;
  transform-origin: 18px 13px;
  transform: rotate(-15deg);
  transition: 1.5s;
}
</style>
