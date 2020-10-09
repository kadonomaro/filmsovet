<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/want">Хочу посмотреть</router-link> |
      <router-link to="/already">Уже посмотрел</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Jost, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
