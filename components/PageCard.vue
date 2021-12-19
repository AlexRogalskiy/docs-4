<template>
  <NuxtLink :to="`/${page.slug}`" class="page-card">
    <div class="card-inner">
      <p class="card-title">{{ page.title }}</p>
      <p class="card-description">{{ page.description }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    page: { type: Object, required: true }
  }
})
</script>

<style lang="scss" scoped>
.page-card {
  width: 100%;
  max-width: calc((700px / 2) - 20px);
  margin: 10px 20px 10px 0;
  box-sizing: border-box;
  border-radius: 8px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  background-color: $bgcolor-alt;
  padding: 20px 20px 30px 20px;

  &::after {
    z-index: 10;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      140deg,
      $bgcolor-alt 79.7%,
      $theme-color-light 80%
    );
    transform: translate(20%, 20%);
    transition: opacity 300ms $intro-easing, transform 600ms $intro-easing;
  }

  &:hover {
    &::after {
      transform: translate(0, 0);
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }

  .card-inner {
    position: relative;
    z-index: 11;

    .card-title {
      color: $title-color;
      font-weight: bold;
      margin: 0;
      font-size: 1.4rem;
    }
    .card-description {
      color: $subtitle-color;
      font-size: 0.9rem;
      margin: 10px 0 20px 0;
      min-height: 70px;
      font-size: 1rem;
    }
  }
}
</style>