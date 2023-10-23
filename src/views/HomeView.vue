<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
    
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import PostList from '@/components/PostList.vue'
export default {
  components: { PostList },
  name: 'HomeView',
  setup() {
    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('no data avaiable')
        }

        posts.value = await data.json()
      }
      catch(err){
        error.value = err.message
      }
    }
    load()
    return {
      posts, error
    }
  }
}
</script>