<template>
  <div class="box">
    <div class="box1">
      <h5>最近播放</h5>
      <div class="box2">
        <p>更多</p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="box3">
      <div class="left">
        <img src="/static/img/4.png" alt />
        <div>
          <li class="li">全部已播歌曲</li>
          <li>300首</li>
        </div>
      </div>
      <div class="right">
        <img src="/static/img/5.png" alt />
        <div>
          <li class="li">全部已播歌曲</li>
          <li>300首</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collectin",
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 1rem;
  /* background-color: pink; */
}
.box1 {
  width: 100%;
  height: 0.4rem;
  /* background-color: yellow; */
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
  display: flex;
  margin-right: 0.05rem;
}
li {
  margin: 0 0.03rem;
  font-size: 14px;
}
.box3 {
  width: 100%;
  height: 0.512rem;
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.1rem;
}
.right{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.1rem;
}

img{
  width: 0.59rem;
  height: 0.59rem;
  border-radius: 0.05rem;
}
.li{
   font-size: 18px;
   font-weight: 550;
}
p,i{
  font-size: 14px;
}

</style>