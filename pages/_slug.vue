<template>
  <div>
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
      page,
    }
  },
})
</script>
