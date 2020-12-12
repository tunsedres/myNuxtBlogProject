<template>
    <section class="post-list">
            <PostPreview 
            id="1"
            :is-admin="isAdmin"
            thumbnail="https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg"
            title="First post title"
            previewText="This is my first post !"/>
            <PostPreview 
            id="2"
            :is-admin="isAdmin"
            thumbnail="https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg"
            title="First post title 2"
            previewText="This is my first post 2!"/>
            <PostPreview 
            id="3"
            :is-admin="isAdmin"
            thumbnail="https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg"
            title="First post title 3"
            previewText="This is my first post 3!"/>
    </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>