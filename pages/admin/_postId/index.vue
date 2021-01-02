<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onsubmitted"/>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    async asyncData({ $axios, params }) {
    return $axios.$get('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts/' + params.postId+ '.json')
      .then(res => {
        return {
          loadedPost: { ...res, id: params.postId }
        }
      })
    },
    methods: {
        onsubmitted(editedPost) {
            this.$store.dispatch('editPost', editedPost).then(() => {
              this.$router.push('/admin')
            })
        }
    }
}
</script>