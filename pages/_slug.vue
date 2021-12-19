<template>
  <div class="content">
    <h2>{{ page.title }}</h2>
    <h6>{{ page.description }}</h6>
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  }
})
</script>

<style lang="scss">
.content {
  font-family: sans-serif;
  color: $title-color;
  width: 100%;
  max-width: 700px;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;

  .nuxt-content-container {
  }

  @media screen and (max-width: 700px) {
    margin: 0 20px;
    width: calc(100% - 40px);
  }
}
</style>