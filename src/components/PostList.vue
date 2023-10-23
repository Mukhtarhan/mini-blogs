<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
    components:{ SinglePost },
    props: ['posts']
}
</script>

<style>
.post-list{
  position: relative;
  width: 1200px;
  margin: auto;

}
</style>