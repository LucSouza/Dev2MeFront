<template>
  <div>
    <h2 class="SectionTittle">Tendencia no Brasil</h2>
    <Carousel :per-page="6" :paginationEnabled="false" :navigationEnabled="true" loop>
      <slide v-for="movie in movies" :key="movie.id">
        <div class="px-1">
        <router-link :to="'/watch/' + movie.id">
        <b-img :src="movie.banner" height="180" width='230' rounded  />
          </router-link>
        </div>
      </slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
      movies: {
      type: Array,
    },
 
    
  },


};
</script>
<style>
.SectionTittle{color:antiquewhite}

/* .VueCarousel-navigation-prev {
  background-color: white !important;
  color: white  !important
}
.VueCarousel-navigation-next{
 background-color: white !important;
  color: white  !important
} */
</style>
