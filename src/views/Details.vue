<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="poste">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '@/composable/getPost';

export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id)
        load()

        return{ post, error }
    }
}
</script>

<style scoped>
.poste{
    max-width: 1200px;
    margin: 0 auto;
    
}
.poste h3{
    width: max-content;
    padding: 5px 8px;
    background: orange;
    color: white;
}
.poste p{
    line-height: 1.5em;
    
}
.pre{
    white-space: pre-wrap;
}
</style>