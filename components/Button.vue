<template>
  <NuxtLink :to="to" class="button">{{ title }}</NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: { type: String, required: true },
    title: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
.button {
  text-decoration: none;
  color: $bgcolor-main;
  background-color: $theme-color;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 8px;
}
</style>