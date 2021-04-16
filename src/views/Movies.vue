<template>
  <div>
    <MoviesSection v-for="movieGender in moviesGender" :key="movieGender.gender" :movies="movieGender.list" class="mt-5" />
    <!-- <MoviesSection :movies="movies" section-title="Trending" class="mt-5" />
    <MoviesSection :movies="movies" section-title="Novidades" class="mt-5" /> -->

  </div>
</template>

<script>
import MoviesSection from "@/components/MoviesSection";
import MoviesServices from "@/services/MoviesService";

export default {
  name: "Movies",
  components: {
    MoviesSection,
  },

  data() {
    return {
     
      moviesGender: [],
      
      }
    
  },

  created() {
    MoviesServices.listar().then(res => {
      const movies = res.data
      const movieGender = {}

      movies.forEach(movie =>{        
        if(movieGender[movie.gender]) {
          movieGender[movie.gender].push(movie)
        }else {
          movieGender[movie.gender] = [movie]
        }

    this.moviesGender = Object.entries(movieGender).map(([key, value]) => {
      return{
        gender: key,
        list: value
      }
    })

      })
    })
    .catch(err => {
      console.erro(err)
    });
  },
};
</script>
