<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="nav-item">
              <strong>
                MusicApp 🙈❤️
              </strong>
            </div>
          </div>
          <div class="navbar-menu navbar-end">
            <router-link class="navbar-item" :to="{ name: 'search' }">Buscar</router-link>
            <router-link class="navbar-item" :to="{ name: 'about' }">Nosotros</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          MusicApp
          <ma-player></ma-player>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import maPlayer from '@/components/Player'

export default {
  components: {
    maPlayer
  }
}
</script>
