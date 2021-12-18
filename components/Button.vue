<template>
  <component :is="to ? 'NuxtLink' : 'div'" class="button">
    {{ title }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: { type: String, default: null },
    title: { type: String, required: true }
  }
})
</script>

<style lang="scss" scoped>
.button {
  text-decoration: none;
  color: $bgcolor-main;
  background-color: $theme-color;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  width: fit-content;
}
</style>