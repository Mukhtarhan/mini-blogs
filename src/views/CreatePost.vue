<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title">

    <label>Content:</label>
    <textarea  cols="30" rows="10" v-model="body" required></textarea>

    <label>Tags (hit enter to add a tag)</label>
    <input type="text" v-model="tempTag" @keyup.enter="addTags">
    
    <button class="submit">Add Post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      tags: [],
      tempTag: ''
    }
  },
  methods: {
    addTags() {
      this.tags.push(this.tempTag)
      this.tempTag = ''
    },
    handleSubmit() {}
  }
}
</script>

<style>
form {
  max-width: 520px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: white;
  padding: 0 15px;
  background: orange;
  display: inline-block;
  margin: 45px 0 15px;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input,
textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  background: orange;
  border: 0;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
}</style>