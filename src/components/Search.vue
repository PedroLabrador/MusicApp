<template>
  <main>
    <transition name="move">
      <ma-notification v-show="showNotification">
        <p slot="body">No se encontraron resultados.</p>
      </ma-notification>
    </transition>

    <transition name="move">
      <ma-loader v-show="isLoading"></ma-loader>
    </transition>
    <section  v-show="!isLoading" class="section">
      <nav class="nav">
        <div class="container">
          <input class="input is-large" type="text" placeholder="Buscar canciones" v-model="searchQuery" @keyup.enter="search">
          <a @click="search" class="button is-info is-large">Buscar</a>
          <a class="button is-danger is-large">&times;</a>
        </div>
        <div class="container">
          <p>
            <small>{{ searchMessage }}</small>
          </p>
        </div>
      </nav>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t.id">
            <ma-track
              :class="{ 'is-active' : t.id == selectedTrack }"
              :track="t"
              @select="setSelectedTrack"
              v-blur="t.preview_url"></ma-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'
import maTrack from '@/components/Track'
import maLoader from '@/components/shared/Loader'
import maNotification from '@/components/shared/Notification'

export default {
  name: 'app',
  components: {
    maTrack,
    maLoader,
    maNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
        .catch((err) => {
          console.log('Error =>', err)
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
