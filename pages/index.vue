<template>
  <div class="container">
    <div class="title">
      <h2>ViewTube</h2>
      <p>An alternative Youtube frontend</p>
    </div>
    <div class="pages">
      <PageCard v-for="page in pages" :key="page.slug" :page="page" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const pages = await $content().fetch()

    return {
      pages
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media screen and (max-width: 700px) {
    margin: 0 0 0 20px;
  }

  .pages {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
</style>
