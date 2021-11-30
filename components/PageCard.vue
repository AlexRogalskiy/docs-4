<template>
  <NuxtLink :to="`/${page.slug}`" class="page-card">
    <div class="card-inner">
      <p class="card-title">{{ page.title }}</p>
      <p class="card-description">{{ page.description }}</p>
    </div>
    <span class="blur" :style="{ transform: `translate3d(${x}px,${y}px,0)` }" />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    page: { type: Object, required: true },
  },
})
</script>

<style lang="scss" scoped>
.page-card {
  width: 100%;
  max-width: calc((700px / 2) - 20px);
  margin: 10px;
  box-sizing: border-box;
  border: solid 2px $theme-color-light;
  border-radius: 5px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  padding: 20px;
  transition: border-color 500ms $intro-easing;

  &:hover {
    border-color: $theme-color;
  }

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }

  .card-title {
    color: $title-color;
    font-weight: bold;
    pointer-events: none;
    margin: 0;
  }
  .card-description {
    color: $subtitle-color-light;
    font-size: 0.9rem;
    pointer-events: none;
  }
}
</style>