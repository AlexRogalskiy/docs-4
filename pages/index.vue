<template>
  <div>
    <h2>Viewtube documentation</h2>
    <div v-for="page in pages" :key="page.slug">
      <NuxtLink :to="`/${page.slug}`">{{ page.title }}</NuxtLink>
      <h6>{{ page.description }}</h6>
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
