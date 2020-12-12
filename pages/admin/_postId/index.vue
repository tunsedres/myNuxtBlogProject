<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            loadedPost: {
                author: 'bla bla',
                title: 'fdsafa',
                content: 'fds',
                thumbnailLink: 'https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg'
            }
        }
    }
}
</script>