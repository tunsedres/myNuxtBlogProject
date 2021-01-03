<template>
    <div>
        <header>
            <div>
                Hoşgeldiniz {{user.email}}, 
                <a @click="signout" class="nav-link" style="cursor:pointer; color:red">Sign Out</a>
            </div>
        </header>
        <nuxt/>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    data() {
        return {
            user: ''
        }
    },
    compouted() {
        user = this.$store.state.getters.getUser
        this.user = user.user
        console.log(user.email)
    },
    methods: {
        signout() {
            this.$fire.auth.signOut()
            .then(result => {
                this.user = ''
                this.$router.push('/')
            })
            
        }
    }
    
}
</script>