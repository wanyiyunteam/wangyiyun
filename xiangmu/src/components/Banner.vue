<template>
  <div class="box">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(img,index) in imgs" :key="index">
        <img :src="'/static/'+img">
      </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Banner",
  data() {
    return {
      imgs:['img/1_02.png','img/2_02.png'],
      swiperOptions: {
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.box {
  width:100%;
  height: 1.54rem;
  background: cyan;
}
.box img{
  width:100%;
  height: 1.54rem;
}
</style>