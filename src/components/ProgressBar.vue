<script lang="ts" setup>
import { computed, type PropType } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator: (value: number) => value >= 0 && value <= 100, // Проверка на диапазон
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
    validator: (value: string) => ['in progress', 'success', 'error'].includes(value),
  },
  strokeWidth: {
    type: Number,
    default: 30,
  },
  gap: {
    type: Number,
    default: 20,
  },
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
  }
});
</script>

<template>
  <div class="progress-bar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="props.height"

      :width="props.width"
    >
      <circle
        fill="transparent"
        stroke="#b9cad1"
        :cx="cx"
        :cy="cy"
        :r="radius"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="0"
        :stroke-width="props.strokeWidth"
      />

      <circle
        fill="transparent"
        :cx="cx"
        :cy="cy"
        :r="radius"
        :stroke="backgroundColor"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashArray * (1 - props.progress / 100)"
        :stroke-width="props.strokeWidth"
        class="progress-circle"
      />

      <text
        :x="cx"
        :y="cy"
        text-anchor="middle"
        dominant-baseline="middle"
        class="progress-text"
      >
        {{ props.progress }}%
      </text>
    </svg>
  </div>
</template>

<style scoped>
.progress-bar {
  display: inline-block;
}

.progress-circle {
  transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;
}

.progress-text {
  font-size: 24px;
  font-weight: bold;
  fill: #fff;
  user-select: none;
}
</style>
