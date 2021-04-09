<template>
  <div>

    <header class="nav">
      <NavBar :site="json.site" :profile="json.profile" />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <!-- no footer content in assignment -->
    </footer>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    name: 'App',
    components: {
      NavBar
    },
    data() {
      return {
        json: this.$parent.$data,
        sortCol: 'time',
        sortDir: 'desc'
      }
    },
    methods() {
    },
    
  }
</script>

<style lang="scss">
  @import "./assets/scss/_site.scss";
</style>
