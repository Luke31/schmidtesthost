<template>
  <div class="one-page">
    One page
    queryStringParam: {{ queryStringParam }}
  </div>
</template>

Template

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const queryStringParam = computed(() => {
  return route.query.param;
});


</script>

<style lang="scss" scoped></style>
