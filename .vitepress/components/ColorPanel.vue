<template>
  <div :class="$style.container">
    <div :class="$style.colorArea" :style="colorAreaStyle"></div>
    <div :class="$style.text">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.noteContainer">
        <div>
          <div :class="$style.noteTitle">HEX</div>
          <div :class="$style.note">#{{ hex }}</div>
        </div>
        <div>
          <div :class="$style.noteTitle">RGB</div>
          <div :class="$style.note">{{ rgb }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup="props" lang="ts">
import { computed, ref } from "vue";

declare const props: {
  hex: string;
  title: string;
};

export const colorAreaStyle = computed(() => ({
  background: `#${props.hex}`,
}));

export const rgb = computed(() => {
  const r = parseInt(props.hex.substring(0, 2), 16);
  const g = parseInt(props.hex.substring(2, 4), 16);
  const b = parseInt(props.hex.substring(4, 6), 16);
  return [r, g, b].join(",");
});
</script>

<style module lang="scss">
.container {
  border-radius: 4px;
  overflow: hidden;
  background-color: #f4f5f7;
  height: 20rem;
  max-width: 24rem;
  color: #3a3b3b;
}
.colorArea {
  width: 100%;
  height: 12rem;
}
.text {
  padding: 1.5rem;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.noteContainer {
  display: flex;
  justify-content: space-between;
  max-width: 75%;
}
.noteTitle {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: bold;
}
.note {
  font-size: 1rem;
}
</style>
