<template>
  <div>
    <div v-if="status">
      <div class="h-screen bg-white relative">
        <div class="center">
          <h3 class="text-2xl text-black poppins">Whoops...</h3>
          <h3 class="text-4xl text-black poppins-semibold">404</h3>
        </div>
      </div>
    </div>
    <section v-else>
      <BlogHeader :heading="activeBlog.title" :sub-heading="activeBlog.sub_title" />
      <BlogImage :image="getImage" />
      <BlogBody :text="activeBlog.text" :publisher="activeBlog.source" :date="activeBlog.date" />
      <BlogFooter />
      <section class="footer bg-black h-auto w-full relative">
        <Footer />
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      failure:false
    }
  },
  async fetch({ params, $axios, store }) {
    try {
      const blog = await $axios.get(`blog/${params.slug}`).then(res => res.data)
      store.commit('blog/setActiveBlog', blog)
    } catch (error) {
      console.log(error);
    }
  },
  fetchOnServer:false,
  computed:{
    activeBlog(){
      return this.$store.state.blog.activeBlog
    },
    getImage(){
      return this.$store.getters['blog/getImage']
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
}
</script>
<style lang="scss" scoped>

</style>