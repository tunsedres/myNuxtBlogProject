<template>
    <div class="single-post-page">
        <section>
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
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1", 
          title:"First Post (ID: " + context.params.id + ")", 
          thumbnail: "https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg", 
          previewText: "preview text",
          author: "test author",
          updatedDate: new Date(),
          content: "bla bla some dummy text which is definetly not the preview"
          }
      })
    }, 1000)
  },
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