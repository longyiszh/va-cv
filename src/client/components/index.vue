<template>
  <section class="index">
    <section class="box workExp">
      <md-toolbar md-elevation="0" class="md-primary">
        <h1 class="md-title">work</h1>
      </md-toolbar>
      <main>
        <article>
          <h2>A sc</h2> <time> 2017/08/09 - 2018/01/01 </time>
          <p>descr: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        </article> 
        <div class="devider"></div>
        <article>
          <h2>cbiu dexdr college</h2> <time> 2016/02/03 - 2016/05/03 </time>
          <p>descr: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        </article> 

      </main>
    </section>

  </section>
</template>

<style lang="scss" scoped>
  .devider {
    height: 1px;
    background-color: rgba(238, 238, 238, 0.9);
  }
  .box {
    border: 1px solid #f0f0f0;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  }

  section.workExp {
    > main {
      padding: 1em 3em;
    }
    h2 {
      display: inline-block;
      margin: 0.5em;
    }
    p {
      margin: 0.5em;
    }
    time {
      padding-left: 1em;
    }
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';


  @Component({
    name: 'index'
  })
  export default class Index extends Vue {
    data () {
      return {

      }
    };

  }
</script>