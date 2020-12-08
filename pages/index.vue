<template lang="">
  <section class="container"> 
    <Header/>
    <div>
        <input type="text" v-model="userId">
        <button @click="onLoadUser">Load User</button>
    </div>
  </section>
    
</template>
<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId)
    }
  },
  layout: 'users'
}
</script>
<style lang="">
  
</style>