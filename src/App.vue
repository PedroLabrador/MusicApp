<template>
  <div id="app">
    <ma-header></ma-header>
    <router-view></router-view>
    <ma-footer></ma-footer>
  </div>
</template>

<script>
import maFooter from '@/components/layouts/Footer.vue'
import maHeader from '@/components/layouts/Header.vue'

export default {
  name: 'app',
  components: {
    maFooter,
    maHeader
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .results {
    margin-top: 50px
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
