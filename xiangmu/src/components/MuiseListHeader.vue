<template>
  <div class="box">
    <div>
      <div @click="backFn">
        <b>
          <i class="el-icon-back"></i>
        </b>
        <em>歌单</em>
      </div>
      <div>
        <b>
          <i class="iconfont icon-fangdajing1"></i>
        </b>
        <b>
          <i class="iconfont icon-gengduo4"></i>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MuiseListHeader",
  methods:{
    backFn(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.box {
  width: 3.75rem;
  height: 1.7rem;
  /* background: aquamarine; */
  display: flex;
  padding-top: .1rem;
}
.box > div {
  display: flex;
  height: 0.25rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
i{
  color: #fff;
  font-size: 25px;
}
em{
  color: #fff;
  font-size: 20px;
}
b{
  margin-right: .2rem;
}
b:nth-child(1){
  margin-left: .2rem;
}
</style>