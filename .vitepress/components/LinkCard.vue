<template>
  <div :class="$style.container">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.description">{{ description }}</div>
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
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px 0 rgba(9, 30, 66, 0.31);
  overflow: hidden;
  background-color: #fff;
  min-height: 5rem;
}
.title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}
.description {
}
</style>
