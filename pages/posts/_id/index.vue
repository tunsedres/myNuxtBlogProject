<template>
    <div class="single-post-page">
        <section>
            <button class="btn btn-danger" @click="deletePost">DELETE</button>
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div>{{ loadedPost.updatedDate }}</div>
                <div>Written by {{ loadedPost.author }}</div>
                <p class="post-content">{{ loadedPost.content }}</p>
            </div>
        </section>
        <section class="post-feedback">
            <p>let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feed@my.com</a></p>
        </section>
    </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return $axios.$get('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts/' + params.id + '.json')
      .then(res => {
        return {
          loadedPost: res
        }
      })
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.$route.params.id).then(() => {
        this.$router.push('/posts')
      })
    }
  },
  head: {
    title: 'Tuncay ın site',
    meta: [
      { hid: 'description', name: 'description', content: 'heyu heyt' }
    ]
  } 
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>