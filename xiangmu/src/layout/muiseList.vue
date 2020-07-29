<template>
<div>
<div class="boxa">
  <MuiseListHeader/>
  <MuiseListNav/>
</div>
  <MuiseListContent/>
  <MyFooter/>
 </div>
</template>

<script>
import MuiseListHeader from '../components/MuiseListHeader'
import MuiseListNav from "../components/MuiseListNav"
import MuiseListContent from "../components/MuiseListContent"
import MyFooter from "../components/MyFooter"
export default {
name:"muiseList",
components:{
    MuiseListHeader,MuiseListNav,MuiseListContent,MyFooter
}
}
</script>

<style scoped>
.boxa{
    background-image: url(../../static/img/bbbb.jpg);
    background-size: 100%;
}
</style>