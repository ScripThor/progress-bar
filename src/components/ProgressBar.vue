<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0 && value <= 100,
  },

  width: {
    type: Number,
    default: 256,
  },

  height: {
    type: Number,
    default: 256,
  },

  status: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'in progress', 'success', 'error'].includes(value),
  },

  strokeWidth: {
    type: Number,
    default: 30,
  }
  });

const cx = computed<number>(() => props.width / 2);
const cy = computed<number>(() => props.height / 2);
const radius = computed<number>(() => props.width / 2 - props.strokeWidth / 2);
const dashArray = computed<number>(() => 2 * Math.PI * radius.value);

const backgroundColor = computed(() => {
  switch (props.status) {
    case 'in progress':
      return '#20a0ff';
    case 'success':
      return '#4CAF50';
    case 'warning':
      return '#FFC107';
    case 'error':
      return '#F44336';
    default:
      return '#E0E0E0';
  }
})


</script>

<template>
  <div class="progress-bar">
    <svg xmlns="http://www.w3.org/2000/svg" :height="props.height" :width="props.width">
      <circle :cx="cx" :cy="cy" :r="radius" fill="none" :stroke="backgroundColor" :stroke-width="strokeWidth"/>
      <circle
        cx="cx"
        cy="cy"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke-dasharray="dashArray"
        stroke-linecap="round"
        class="progress-circle"
      />
    </svg>
  </div>
</template>

<style scoped>
.progress-bar {
  display: inline-block;
}
</style>
