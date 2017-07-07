<template>
  <div id="app">
    <header class="header">
      <HeaderPages></HeaderPages>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <FooterPages></FooterPages>
    </footer>
  </div>
</template>

<script>

import HeaderPages from './components/HeaderPages.vue'
import FooterPages from './components/FooterPages.vue'
import Alert from './components/Alert.vue'


export default {
  components: {
    HeaderPages,
    FooterPages,
    Alert
  },
  name: 'app',
  data () {
    return {
      msg: 'VUE TESTE...'
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/app.scss'
</style>