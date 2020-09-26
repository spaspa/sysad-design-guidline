<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script setup="props" lang="ts">
import { ref } from "vue";

declare const props: {
  title: string;
  description: string;
};
</script>

<style module lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 1rem;
    flex-basis: calc(50% - 2rem);
  }
}
</style>
