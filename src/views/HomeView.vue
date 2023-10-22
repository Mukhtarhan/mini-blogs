<template>
  <div class="home">
    <h1>home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const p = ref(null)
    console.log(p);
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'Aruzhan'
      age.value = 19
    }
    return {
      name, age, p, handleClick
    }
  }
}
</script>
