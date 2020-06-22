<template>
  <div>
    Home Page
    <do-button types="orange" @click="pageTo">To Page Three</do-button>
  </div>
</template>
 
<script>
export default {
  data () {
    return {};
  },
  methods: {
    pageTo () {
      console.log('link to start')
      this.$router.push({ path: '/three' })
      console.log('link to end')
    }
  },
}
</script>
 
<style lang="scss" scoped>
</style>