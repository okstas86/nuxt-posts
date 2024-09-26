export default defineNuxtConfig({
  modules: [
    'nuxt-simple-sitemap',
  ],
  sitemap: {
    siteUrl: 'http://localhost:3000',
    urls: async () => {
      try {
        const response = await fetch('http://localhost:3001/'); 
        const posts = await response.json(); 
        return posts.map((post) => `/${post.id}`);
      } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
      }
    },
  }
});
