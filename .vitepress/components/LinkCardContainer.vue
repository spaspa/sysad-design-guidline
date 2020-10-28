<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
    description: String
  }
})

</script>

<style module lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 1rem;
    flex-basis: calc(50% - 2rem);
    @media (max-width: 600px) {
    flex-basis: 100%;
    }
  }
}
</style>
