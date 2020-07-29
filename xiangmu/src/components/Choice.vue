<template>
  <div class="box">
    <div class="box1">
      <h5>一秒沦陷 &nbsp; 华语歌坛</h5>
      <el-button size="mini" round>播放全部</el-button>
    </div>
    <div class="box2">
      <li class="box2-li">
        <span>
          <img src="/static/img/4.png" />
        </span>
      </li>
      <li class="box3">
        <p class="p1">成全</p>
        <p class="p2">-林宥嘉</p>
      </li>
      <p class="iconfont icon-bofang"></p>
    </div>
    <div class="box2">
      <li class="box2-li">
        <span>
          <img src="/static/img/6_03.png" />
        </span>
      </li>
      <li class="box3">
        <p class="p1">入海</p>
        <p class="p2">-毛不易</p>
      </li>
      <p class="iconfont icon-bofang"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choice"
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 1.94rem;
  /* background-color: yellowgreen; */
}
.box1 {
  width: 100%;
  height: 0.43rem;
  /* background-color: hotpink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 0.12rem; */
}
.box2 {
  width: 100%;
  height: 0.43rem;
  /* background-color: hotpink; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 0.1rem;
}
.box2-li {
  margin-right: 0.05rem;
  margin-left: 0.1rem;
}
.box3 {
  margin-right: 1.5rem;
}
.p1 {
  float: left;
  font-size: 16px;
  font-weight: 500;
}
.p2 {
  float: right;
  color: #757575;
  margin-top: 0.05rem;
  margin-left: 0.03rem;
  font-size: 12px;
}
h5 {
  font-size: 16px;
  color: #292929;
  font-weight:600 ;
}
.box2 {
  width: 100%;
  height: 0.7rem;
  /* background-color: #ccc; */
  display: flex;
}
img {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.9rem;
}
</style>