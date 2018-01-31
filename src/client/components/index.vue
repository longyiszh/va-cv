<template>
  <section>
    index works

      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'index'
  })
  export default class Index extends Vue {

  }
</script>