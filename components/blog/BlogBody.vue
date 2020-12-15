<template>
  <div class="w-full px-4 lg:w-2/3 mx-auto my-16 border-t-2 border-black">
    <div class="my-6">
      <h5 class="text-lg poppins-semibold text-black tracking-widest text-right uppercase">{{publisher}}</h5>
      <h5 class="text-2xl poppins-semibold text-black tracking-widest text-right">{{date}}</h5>
    </div>
    <div v-html="text"></div>
  </div>
</template>
<script>
export default {
  props:{
    text:String,
    date:String,
    publisher:String
  }
}
</script>
<style lang="scss" scoped>
  img{
    width: 100%;
    object-fit: cover;
    padding: 2rem 0rem;
  }
</style>