<template>
  <div class="container">
  <div class="header">
    <h1>THe Web Blog</h1>
    <div class="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
    </div>
  </div>
</div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  display: block;
  margin: auto;
  width: 1200px;
  
}
.header{
  display: flex;
  position: relative;
  height: 100px;
}
.header h1{
  position: absolute;
  left: 0;
  top: 30px;
  color: rgb(203, 203, 203);
}
.nav {
  position: absolute;
  padding: 30px;
  top: 30px;
  right: 0;
}

.nav a {
  font-weight: bold;
  color: rgb(203, 203, 203);
  text-decoration: none;
  padding: 5px;
}

.nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
