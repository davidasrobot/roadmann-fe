<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-999">
    <div class="content-center w-full md:w-1/3 bg-white p-4 lg:p-8 text-center">
      <h3 class="text-black text-center text-2xl poppins-semibold mb-8">Success</h3>
      <button @click="close" class="inline-block w-1/2 text-white bg-black py-3 px-4 rounded-full hover:bg-red-600">close</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    close(){
      this.$store.commit('contact/emptyData')
    }
  }
}
</script>
<style lang="scss" scoped>
.z-999{
  z-index: 999;
}
.content-center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>