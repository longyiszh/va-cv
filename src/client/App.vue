<template>
  <section id="app">
    <nav class="basicInfo">
      nav
    </nav>
    <md-app>
      <md-app-content>
        <main class="router">
          <router-view></router-view>
        </main>
      </md-app-content>
    </md-app>

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'app'
})
export default class App extends Vue {

}
</script>

<style lang="scss">

@import './assets/scss/theme';

#app {
  height: 100%;
  display: block;
}

nav.basicInfo {
  background-color: $primary;
}

@mixin normal() {
  #app {
    display: flex;
  }

  nav.basicInfo {

    width: 40em;
    max-width: 400px;
  }
}


@media only screen and (min-width: 576px) {
  @include normal();
}


@media print {
  @include normal();
}

</style>
