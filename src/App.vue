<script setup lang="ts">
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Прогресс-бар</router-link> |
        <router-link to="/diagram">Диаграмма</router-link>
      </nav>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {

}
</style>
