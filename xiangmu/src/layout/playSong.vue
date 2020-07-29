<template>
  <div class="box1">
    <MuiseHeader />
    <MuiseBody />
    <MuiseConent />
    <MuiseFooter />
  </div>
</template>

<script>
import MuiseHeader from "../components/MuiseHeader";
import MuiseBody from "../components/MuiseBody";
import MuiseConent from "../components/MuiseConent";
import MuiseFooter from "../components/MuiseFooter";
export default {
  name: "playSong",
  components: {
    MuiseHeader,
    MuiseBody,
    MuiseConent,
    MuiseFooter
  }
};
</script>

<style scoped>
.box1 {
  background-color: #606159;
}
</style>