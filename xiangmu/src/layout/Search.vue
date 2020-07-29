<template>
<div>
<div>
<searchHeader/>
</div>
<div class="box">
  <Banner/>
  <SearchHstory/>
  <HotSearch/>
  <MyFooter/>
</div>
</div>
</template>

<script>
import  searchHeader from "../components/searchHeader"
import Banner from  "../components/Banner"
import SearchHstory from "../components/SearchHstory"
import HotSearch from "../components/HotSearch"
import MyFooter from "../components/MyFooter"
export default {
name:"Search",
components:{
    searchHeader,Banner,SearchHstory,HotSearch,MyFooter
}
}
</script>

<style scoped>
.box{
  background-color: #151515;
}
</style>