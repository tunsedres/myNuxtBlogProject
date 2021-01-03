import Cookie from 'js-cookie'

export const state = () => ({
    loadedPosts: [],
    token: null
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
    },
    setToken(state, token) {
       state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    nuxtServerInit({ commit }, { dispatch }) {
         return this.$axios.$get('/posts.json')
            .then(res => {
                const postsArray = []
                for (const key in res) {
                    postsArray.push({ ...res[key], id:key })
                }
                commit('setPosts', postsArray)
            })
            .catch(e => console.log(e))
    },
    setPosts({commit}, posts) {
        commit('setPosts', posts)
    },
    addPost({commit}, post) {
        const createdPost = {
            ...post,
            updatedDate: new Date()
        }
        return this.$axios.$post('/posts.json?auth='+ this.state.token, createdPost)
        .then(res => {
            commit('addPost', { ...createdPost, id: res.name})
        })
        .catch(e => console.log(e)) 
        
    },
    editPost({commit}, editedPost) {
        console.log()
        return this.$axios.$put('/posts/' + 
            editedPost.id + '.json?auth='+ this.state.token, editedPost)
        .then(res => {
            commit('editPost', editedPost)
        })
    },
    deletePost({commit}, postId) {
        return this.$axios.$delete('/posts/' + postId + '.json')
        .then(res => {
            commit('deletePost', postId)
        })
    },
    authenticateUser({commit}, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
      
        if(!authData.isLogin) {
            authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
        }

        this.$axios.$post(authUrl, 
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }
        ).then(result => {
            commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)

            Cookie.set('jwt', result.idToken)
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
        })
        .catch(e =>console.log(e)) 
    },
    initAuth({commit}, req) {
        
        let token
        let expirationDate
        if(req) {
            if(!req.headers.cookie) {
                return
            }
            const jwtCookie = req.headers.cookie.split(';').find(c=> c.trim().startsWith('jwt='))
            if(!jwtCookie) {
                return
            }
            token = jwtCookie.split('=')[1]

            expirationDate = req.headers.cookie.split(';').find(c=> c.trim().startsWith('expirationDate=')).split('=')[1]
            
        }else {    
            token = localStorage.getItem('token')
            expirationDate = localStorage.getItem('tokenExpiration')
    
        }
        if(new Date().getTime() > +expirationDate || !token) {
            commit('clearToken')
            return
        }
        commit('setToken', token)
    }    
    
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    },
    isAuthenticated(state) {
        return state.token != null
    }
}
  
