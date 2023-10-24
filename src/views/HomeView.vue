<template>
  <div class="home">
    <div class="posts">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>Loading...</div>
    </div>
    <div class="tags">
      <Tags />
    </div>
  </div>
</template>

<script>
import getPosts from '@/composable/getPosts'
import PostList from '@/components/PostList.vue'
import Tags from '@/components/Tags.vue'
export default {
  components: { PostList, Tags },
  name: 'HomeView',
  setup() {
    const { posts, error, load } = getPosts()
    load()

    

    return {
      posts, error
    }
  }
}
</script>
<style >
.home{
  display: flex;
  justify-content: center;
}
.tags{
  margin: 100px 200px 0 0;
  width: 150px;
}
</style>