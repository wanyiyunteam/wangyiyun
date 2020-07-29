<template>
  <div>
    <Search1 class="search1" />
    <div class="boxa">
      <div class="boxb">
        <MyDetail class="detail" />
        <MyNav class="nav" />
      </div>
      <div class="boxc">
        <Music />
        <Collection />
        <Collection1 />
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import Search1 from "../components/Search1";
import MyDetail from "../components/MyDetail";
import MyNav from "../components/MyNav";
import Music from "../components/Music";
import Collection from "../components/Collection";
import Collection1 from "../components/Collection1";

import MyFooter from "../components/MyFooter";
export default {
  nama: "My",
  components: {
    Search1,
    MyDetail,
    MyFooter,
    MyNav,
    Music,
    Collection,
    Collection1,
  },
};
</script>

<style scoped>
/* .search{
  background-color:#14151a;
  color: #8d8c91;
} */
/* .detail{
   margin:  1rem 0 0 0;
} */
/* .nav{
   background-color:#14151a;
} */
.boxa {
  margin: 0.5rem 0 0.51rem 0;
}
.boxb {
  background-color: #000;
  padding-bottom: 0.2rem;
}
.boxc {
  background-color: #fff;
}
</style>