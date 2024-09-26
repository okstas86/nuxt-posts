<template>
  <div class="container">
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.description }}</p>
    <div>
      <h2>Comments</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useFetch, useRoute } from 'nuxt/app';

const route = useRoute();


const { data: post, error: postError } = await useFetch(`http://localhost:3001/posts/${route.params.id}`);

if (postError.value) {
  console.error('Error fetching post:', postError.value);
}


const { data: comments, error: commentsError } = await useFetch(`http://localhost:3001/comments?postId=${post?.value?.id}`);

if (commentsError.value) {
  console.error('Error fetching comments:', commentsError.value);
}
</script>

<style scoped>
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
}

h2 {
  font-size: 1.5em;
  margin-bottom: 15px;
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
</style>
