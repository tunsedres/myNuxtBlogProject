export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
}

export const actions = {
    nuxtServerInit({ commit }, { dispatch }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('setPosts', [
                    {id: "1", title:"first post", thumbnail: "https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg", previewText: "preview text"},
                    {id: "2", title:"second post", thumbnail: "https://dailyscrawl.com/wp-content/uploads/2018/05/Tech-sector.jpg", previewText: "second preview text"}
                ])                    
                resolve()
                }, 1500)
        }) 
    },
    setPosts({commit}, posts) {
        commit('setPosts', posts)
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
}
  
