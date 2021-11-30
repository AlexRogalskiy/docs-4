<template>
  <div class="main">
    <div class="header">
      <nuxt-link class="logo-link" to="/">
        <h1 class="logo">
          <span>View</span>
          <span class="logo-colored">Tube</span>
          <span class="wiki-text">.wiki</span>
        </h1>
        <img class="logo-small" src="@/assets/icon.min.svg" alt="ViewTube" />
      </nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  background-color: $bgcolor-main;
}

.header {
  height: $header-height;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 800;
  box-shadow: 0;
  background-color: $header-bgcolor;
  font-family: $header-font;
  box-shadow: $medium-shadow;

  .logo-link {
    text-decoration: none;
    margin: auto 10px auto 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    z-index: +1;

    .logo {
      font-size: 1.5rem;
      color: #fff;
      width: auto;
      overflow: hidden;
      white-space: nowrap;
      transition: width 300ms linear;
      display: flex;
      margin: 4px 0 0 0;

      span {
        display: block;
      }

      .logo-colored {
        color: transparent;
        background-image: linear-gradient(
          53deg,
          rgba(241, 87, 10, 1) 0%,
          rgba(224, 140, 112, 1) 33%,
          rgba(89, 193, 186, 1) 78%,
          rgba(0, 212, 255, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
      }

      .wiki-text {
        color: $subtitle-color-light;
      }
    }

    .logo-small {
      margin: auto;
      height: 35px;
      margin: 0 5px 0 0;
      transform: scale(0.8) translateY(-2px);
    }
  }
}
</style>
