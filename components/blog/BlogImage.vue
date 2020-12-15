<template>
  <div class="container mx-auto">
    <div class="w-full square bg-image-cover" :style="{backgroundImage:'url('+$store.state.storage_url+image+')'}"></div>
  </div>
</template>
<script>
export default {
  props:{
    image:String
  }
}
</script>
<style lang="scss" scoped>
.square{
  padding-top: 100%;
}
.bg-image-cover{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>