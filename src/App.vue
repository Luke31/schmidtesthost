<template>
  <div id="app">
    <RouterView data-cy="default-layout__main-content" />
  </div>
  <HelloWorld msg="Layout" />
</template>

<script setup lang="ts">
import HelloWorld from '@host/components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
