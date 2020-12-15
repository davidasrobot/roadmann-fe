<template>
  <div class="container mx-auto px-4 py-16">
    <div class="text-center mb-16">
      <h1 class="text-3xl lg:text-5xl text-black playfair font-bold mb-4 lg:mb-4">
        Blogs
      </h1>
      <!-- <p class="poppins-semibold text-sm lg:text-xl text-black w-full">
        News & Article about Roadmann
      </p> -->
    </div>
    <div class="cards">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div v-for="(b,i) in blogs" :key="i">
        <nuxt-link @click.native="setActiveBlog(b)" :to="'/blog/'+b.slug" class="block bg-white cursor-pointer w-full rounded-lg hover:shadow-xl transition-all duration-300">
          <div class="body p-8">
            <h4 class="text-2xl playfair font-bold text-black mb-4">{{b.title}}</h4>
            <div v-html="b.text.substring(0,100)+`...`" class="text-base text-black poppins">
            </div>
          </div>
          <div class="border-t-2 border-gray-400 px-8 py-4">
            <h6 class="text-gray-700 poppins-semibold text-base">
              {{b.date}}
            </h6>
          </div>
        </nuxt-link>
        </div>
      </div>
      <div class="my-16 text-center">
        <nuxt-link to="/blog" class="inline-block text-white bg-black py-2 px-8 rounded-full hover:bg-red-600">
          show more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    blogs(){
      return this.$store.state.blog.blogs
    }
  },
  methods:{
    setActiveBlog(e){
      this.$store.commit('blog/setActiveBlog', e)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>