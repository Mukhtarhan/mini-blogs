<template>
  <div class="post">
    <router-link class="links" :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    
    <p>{{ snippet }}</p>
    <div class="spans">
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })

        return{
            snippet
        }
    }
}
</script>

<style scoped>
.post{
  margin: auto;
  position: relative;
}
.post a{
  text-decoration: none;
}
.post p{
  padding: 0 40px;
  text-align: start;
}
.post .spans{
  position: absolute;
  left: 40px;
}
.post h3{
  margin-top: 80px;
  width: max-content;
  color: white;
  background-color: orange;
}
</style>