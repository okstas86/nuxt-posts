<template>
  <div class="container">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts, error } = await useFetch('http://localhost:3001/posts');

if (error.value) {
  console.error('Error fetching posts:', error.value);
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #656565;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}

li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
}
</style>
