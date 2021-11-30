<template>
  <div class="container">
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
      pages,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100%;

  .pages {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 200px auto 0 auto;

    @media screen and (max-width: 700px) {
      margin: $header-height auto 0 auto;
    }
  }
}
</style>
