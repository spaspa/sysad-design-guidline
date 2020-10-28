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

<script  lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    hex: String,
    title: String
  },
  setup(props) {
    const colorAreaStyle = computed(() => ({
      background: `#${props.hex}`,
    }));

    const rgb = computed(() => {
      const r = parseInt(props.hex.substring(0, 2), 16);
      const g = parseInt(props.hex.substring(2, 4), 16);
      const b = parseInt(props.hex.substring(4, 6), 16);
      return [r, g, b].join(", ");
    });
    return { colorAreaStyle, rgb }
  }
})

</script>

<style module lang="scss">
.container {
  border-radius: 4px;
  overflow: hidden;
  background-color: #f4f5f7;
  max-height: 16rem;
  max-width: 16rem;
  color: #3a3b3b;
}
.colorArea {
  width: 100%;
  height: 8rem;
}
.text {
  padding: 1.5rem;
}
.title {
  font-size: 1rem ;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.noteContainer {
  display: flex;
  justify-content: space-between;
}
.noteTitle {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #49535B;
}
.note {
  font-size: 1rem;
  font-family: 'Menlo', 'Source Code Pro', monospace;
  color: #49535B;
  font-size: 0.875rem;
}
</style>
