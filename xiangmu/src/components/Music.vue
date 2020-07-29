<template>
    <div class="box">
      <div class="box1">
        <h5>我的音乐</h5>
        <div class="box2">
          <i class="iconfont el-icon-s-management"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="box3">
        <div v-for="(img,index) in imgs" :key="index">
          <img :src="'/static/'+img" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      imgs: ["img/88_03.png", "img/8_05.png", "img/3.png"],
    };
  },
};
</script>

<style scoped>

.box {
  width: 100%;
  height: 1.54rem;
 background-color: #ffffff;
  border-radius: 4% 4% 0 0;
  position: relative;
  top: -0.105rem;
}
.box1 {
  width: 100%;
  height: 0.505rem;

  display: flex;

  justify-content: space-between;
  align-items: center;
}
h5 {
  margin-left: 0.1rem;
  font-size: 16px;
  font-weight: 600;
}
.box2 {
  margin-right: 0.11rem;
}
.box3 {
  width: 100%;
  height: 2.05rem;
  /* background-color: #ccc; */
  display: flex;
}
img {
  width: 1.09rem;
  height: 1.09rem;
  margin: 0 0.08rem;
}
i
{font-size: 14px;}
</style>