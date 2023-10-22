<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search">
    <div v-for="name in filter" :key="name">{{ name }}</div>
    
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'shin', 'aruzhan', 'shaun', 'lisa'])
  
    const filter = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {
      names, search, filter
    }
  }
}
</script>
