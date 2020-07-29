<template>
<div>
  <h4>热搜榜</h4>
  <div class="box">
      <ul>
          <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
           <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
            <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
            <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
            <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
            <li>
              <div><em>1</em><div><span>爸爸妈妈</span><p>别忘了把爱给爸妈留一份</p></div></div>
               <p>33333333</p>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
name:"HotSearch"
}
</script>

<style scoped>
h4{
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-left:.2rem ;
}
.box{
    min-height: 1.15rem;
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
em{
    color: #b63325;
    font-size: 14px;
    margin: 0 0.1rem 0 0.05rem;
}
span{
    color: #fff;
    font-size: 18px;
}
p{
    color: #9d9d9d;
    font-size: 14px;
}
li{
    width: 3.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0;
}
li>div{
    width: 2.2rem;
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>