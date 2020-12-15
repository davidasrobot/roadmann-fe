<template>
  <div class="container mx-auto px-4 py-16 lg:h-screen">
    <div>
      <h1 class="text-3xl lg:text-5xl text-black playfair font-bold mb-4 lg:mb-8">
        {{header.heading}}
      </h1>
      <p class="poppins-semibold text-sm lg:text-xl text-black w-full lg:w-2/3">
        {{header.text}}
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 mt-16">
      <div class="flex flex-wrap items-center mb-12" v-for="(a, i) in items" :key="i">
        <div class="text-center w-full lg:w-1/4">
          <img class="mx-auto lg:ml-0 lg:mr-0 w-16 h-16 lg:w-24 lg:h-24" :src="$store.state.storage_url+JSON.parse(a.image)[0].download_link">
        </div>
        <div class="w-full lg:w-3/4 px-4">
          <h5 class="text-2xl text-black font-bold playfair text-center lg:text-left">
            {{a.heading}}
          </h5>
          <p class="poppins text-base text-black text-center lg:text-left">
            {{a.text}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    header(){
      return this.$store.state.about.header
    },
    items(){
      return this.$store.state.about.items
    }
  },
}
</script>
<style lang="scss" scoped>

</style>