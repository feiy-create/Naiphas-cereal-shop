<script setup>
import Navbar from "./components/Navbar.vue"

</script>

<template> 
<v-app>
<Navbar/> add this
<v-main>
  <router-view></router-view>
</v-main>
</v-app>
</template>