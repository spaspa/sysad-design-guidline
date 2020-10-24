<template>
  <div :class="$style.container" :style="containerStyle">
    <span :class="$style.inner" :style="innerStyle">{{space}}px</span>
    <span :class="$style.inner" :style="innerStyle">{{space}}px</span>
    <span :class="$style.inner" :style="innerStyle">{{space}}px</span>
    <span :class="$style.inner" :style="innerStyle">{{space}}px</span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'MarginSample',
  props: {
      space: {
          type: Number,
          required: true
      }
  },
  setup(props) {
    const innerStyle = computed(() => ({ padding: `${props.space}px` }))
    const containerStyle = computed(() => ({ gap: `${props.space}px`, padding: `${props.space}px` }))
    return { innerStyle, containerStyle }
  }
})
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: min-content;
  max-width: 300px;
  max-height: 300px;
  border: 2px solid #CED6DB;
  border-radius: 4px;
  overflow: hidden;
}
.inner {
  background: #6B7D8A;
  color: white;
  border-radius: 4px;
  max-width: 100px;
}
</style>
