<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <Nav class="text-slate-700">
    <!-- router-link 經過編譯會變成 <a> -->
    <!-- 用 to 屬性來處理 URL -->
    <NavItem to="/" :isActive="true">Home</NavItem>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/contact">Contact</NavItem>
  </Nav>

  <!-- 根據 route 渲染相對的 .vue -->
  <router-view class="text-slate-700 text-lg"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
