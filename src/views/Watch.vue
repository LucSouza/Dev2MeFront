<template>
  <div v-if="movie.trailer">

    <iframe class ="player" :src="movie.trailer+ '?autoplay=1&modestbranding=1'"/>
   
  </div>
</template>
<script>
import MoviesServices from "@/services/MoviesService";

export default{
  props:{
    id: {
      type: Number
    }
  },

  created(){
      MoviesServices.pegarFilme(this.id).then(res => {
      this.movie = res.data
      
  })
  .catch(err => {
      console.erro(err)
    })
    },

    data(){
      return{
        movie: {}
      }
    }

}
</script>

<style scoped>
.player {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: 0;

}
</style>