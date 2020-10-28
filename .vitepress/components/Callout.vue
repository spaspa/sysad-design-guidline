<template>
  <div :class="$style.container" :data-callout-type="type">
      <span :class="$style.title" v-if="title">{{ title }}</span>
      <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export type CalloutType = "info" | 'warning' | 'danger'

export default defineComponent({
  name: 'Callout',
  props: {
      type: {
          type: String as PropType<CalloutType>,
          default: 'info'
      },
      title: String
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" module>
.container {
    background: #F0F2F5;
    padding: 24px;
    border-radius: 4px;
    border-left: 4px solid;
    margin: 0.5rem 0;
    &[data-callout-type="info"] {
        border-color: #14A39E;
    }
    &[data-callout-type="warning"] {
        border-color: #EDAB4A;
    }
    &[data-callout-type="danger"] {
        border-color: #E14A40;
    }
}
.title {
    font-weight: bold;
    display: block;
    margin-bottom: 0.25rem;
}
</style>
