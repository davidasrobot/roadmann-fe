<template>
  <div class="grid grid-cols-2 items-center h-screen">
    <div>
      <img class="object-cover" :src="$store.state.storage_url+getImage" alt="artist name">
    </div>
    <div class="px-8">
      <h1 class="text-6xl text-red-600 playfair font-bold leading-none">{{activeArtist.name}}</h1>
      <h5 class="text-2xl text-gray-500 poppins-semibold mb-16">{{activeArtist.title}}</h5>
      <p class="poppins text-black text-lg" v-html="activeArtist.text"></p>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    activeArtist(){
      return this.$store.state.artist.activeArtist
    },
    getImage(){
      return this.$store.getters['artist/getImage']
    }
  },
}
</script>
<style lang="scss" scoped>

</style>