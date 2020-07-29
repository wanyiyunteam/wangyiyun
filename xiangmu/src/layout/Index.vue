<template>
  <div class="box1">
    <Search />
    <div class="box">
      <Banner />
      <Nav />
      <SingList />
      <Choice />
    </div>
    <MyFooter />
  </div>
</template>

<script>
import Search from "../components/Search";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import SingList from "../components/SingList";
import Choice from "../components/Choice";
import MyFooter from "../components/MyFooter";

export default {
  name: "Index",
   components: {
    Search,
    Banner,
    Nav,
    SingList,
    Choice,
    MyFooter
  },
};
</script>

<style scoped>
.box1{
  margin:  0.5rem 0  ;
}
</style>