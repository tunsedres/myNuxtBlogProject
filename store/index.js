export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    },
    addPost(state, post) {
        state.loadedPosts.push(post)
    },
    editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
            post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
    },
    deletePost(state, postId) {
        const postIndex = state.loadedPosts.findIndex(
            post => post.id === postId
        )
        state.loadedPosts.splice(postIndex)
    }
}

export const actions = {
    nuxtServerInit({ commit }, { dispatch }) {
         return this.$axios.$get('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts.json')
            .then(res => {
                const postsArray = []
                for (const key in res) {
                    postsArray.push({ ...res[key], id:key })
                }
                commit('setPosts', postsArray)
            })
            .catch(e => context.error(e))
    },
    setPosts({commit}, posts) {
        commit('setPosts', posts)
    },
    addPost({commit}, post) {
        const createdPost = {
            ...post,
            updatedDate: new Date()
        }
        return this.$axios.$post('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts.json', createdPost)
        .then(res => {
            commit('addPost', { ...createdPost, id: res.name})
        })
        .catch(e => console.log(e)) 
        
    },
    editPost({commit}, editedPost) {
        return this.$axios.$put('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts/' + 
            editedPost.id + '.json', editedPost)
        .then(res => {
            commit('editPost', editedPost)
        })
    },
    deletePost({commit}, postId) {
        return this.$axios.$delete('https://nuxt-blog-db822-default-rtdb.firebaseio.com/posts/' + postId + '.json')
        .then(res => {
            commit('deletePost', postId)
        })
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
}
  
