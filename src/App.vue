<script setup>
import Info from './components/Info.vue'
import Dropdown from './components/Dropdown.vue'
</script>

<template>
  <main>
    <div class="header-container">
      <header>
        <h1>Posts</h1>
      </header>
      <Dropdown />
    </div>
    <RouterView :key="$route.fullPath" />
    <Info />
  </main>
</template>

<script >
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
main {
  font-family: Lato;
  margin-left: 90px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

header {
  width: 772px;
  /* font-family: Lato; */
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
}
</style>
