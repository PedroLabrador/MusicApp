<template lang="pug">
  #app
    img(src='dist/logo.png')
    h1 {{ title }}
    form(v-on:submit.prevent="filterCountry")
      input(type="text" v-model="country")
      input(type="submit" value="Submit")
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import getArtists from "./api";
import Spinner from "./components/Spinner.vue";
import Artist from "./components/Artist.vue";

export default {
  name: 'app',
  data () {
    return {
      title: 'MusicApp',
      artists: [],
      country: 'Venezuela',
      loading: true
    }
  },
  components: {
    Artist: Artist,
    Spinner: Spinner
  },
  mounted: function() {
    this.filterCountry()
  },
  methods: {
    filterCountry: function() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.country)
        .then(function(artists) {
          self.loading = false
          self.artists = artists
        })
        .catch(function(error) { 
          self.loading = false
          self.artists = [{ name: 'Country Not Found', 
                            image: [{ '': '' },
                                    { '': '' },
                                    { '#text': 'http://2.bp.blogspot.com/_Ze5Xm5fW-4o/TUnUBt6ADUI/AAAAAAAABJA/2WGSLTNK1K4/s1600/broken-link-image-gif.jpg' }], 
                            url: '#' }]
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2a2a2a
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li, img
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
