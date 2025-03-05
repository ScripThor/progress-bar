<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from "@/components/ProgressBar.vue";

const progress = ref(0);
const status = ref('in progress');
</script>

<template>
  <div>
    <h1>Круговой прогресс-бар</h1>
    <ProgressBar :progress="progress" :status="status" />

    <div class="options">
      <label for="progress">Прогресс:</label>
      <input
        id="progress"
        type="range"
        min="0"
        max="100"
        v-model.number="progress"
      />
      <span>{{ progress }}%</span>
    </div>

    <div class="options">
      <label for="status">Статус:</label>
      <select id="status" v-model="status">
        <option value="in progress">In Progress</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.options {
  display: flex;
  gap: 30px;
}
</style>
