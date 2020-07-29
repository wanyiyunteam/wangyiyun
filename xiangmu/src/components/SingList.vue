<template><div>
    <div class="box1">
      <h5>懂你的精选歌单</h5>
      <el-button size="mini" round>查看更多</el-button>
    </div>
  <div class="box">
    <div class="boxa">
      <dl v-for="list in lists" :key="list.id">
        <dd>
          <img :src="'/static/'+list.img" />
        </dd>
       <dt>{{list.name}}</dt> 
      </dl>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingList",
  data() {
    return {
      //    imgs:['img/5.png','img/4.png','img/3.png']
      lists: [],
    };
  },
  created() {
    axios({
      url: "singlist",
    }).then((res) => (this.lists = res.data));
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  min-height: 1.5rem;
  margin-bottom: 0.02rem;
  overflow: hidden;
  overflow-x:auto;  
}
.box1 {
  /* width: 100%; */
  height: 0.43rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.12rem;
}
h5 {
  font-size: 16px;
  color: #292929;
  font-weight: 600;
  margin-left:0.12rem ;
}
dd {

  border-radius: 0.02rem;
  margin: 0 0.04rem;
  margin-bottom: 0.025rem;
}
dt {

  line-height: 0.18rem;  
  display: flex; 
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  white-space: pre-wrap;
}
img {
  width: 1.03rem;
  height: 1.03rem;
  border-radius: 0.02rem;
}
.boxa{
  /* width: 200%; */
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  overflow-x:auto; 
}
dl {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.05rem 0.06rem;
}
.boxa::-webkit-scrollbar {
        display: none;
}    
</style>