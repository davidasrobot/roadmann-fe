<template>
  <div class="container mx-auto p-4 lg:pt-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 lg:gap-4 grid-row-4 border-b-2 border-white">
      <div class="py-8 lg:py-16">
        <h1 class="text-red-600 text-3xl lg:text-5xl playfair font-bold uppercase">
          roadmann
        </h1>
      </div>
      <div class="lg:p-8">
        <h4 class="text-xl lg:text-2xl text-white playfair font-bold tracking-widest uppercase mb-4">Address</h4>
        <p class="text-sm poppins text-white tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat qui neque itaque tempore, ex quia voluptas harum eaque nemo?</p>
        <h6 class="text-sm poppins text-white mt-4"><a class="lining-nums " href="tel:+6281234567890">+62 812 3456 7890</a></h6>
        <h6 class="text-sm poppins text-white mt-4"><a href="mailto:halo@roadmann.com">halo@roadmann.com</a></h6>
      </div>
      <div class="pb-8 lg:p-8">
        <h4 class="text-xl lg:text-2xl text-white playfair font-bold tracking-widest uppercase mb-4">Subscribe</h4>
        <div class="block lg:flex mb-4">
          <input class="appearance-none focus:outline-none rounded-xl lg:rounded-none lg:rounded-l-xl py-3 px-4 block lg:inline-block w-full" type="email" v-model="subsEmail" placeholder="input your email">
          <button @click="subs" class="w-full block lg:inline-block bg-red-600 text-white rounded-xl lg:rounded-none lg:rounded-r-xl mt-4 lg:mt-0 py-3 px-4">subscribe</button>
        </div>
        <p class="text-white text-sm poppins tracking-widest">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, distinctio!</p>
      </div>
    </div>
    <div class="text-center py-8">
      <h6 class="text-white text-sm tracking-wider">copyright &copy; roadmann. All Rights Reserved</h6>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subsEmail:''
    }
  },
  methods:{
    subs(e){
      e.preventDefault();
      const data = {
        email: this.subsEmail,
      }
      this.$store.dispatch('contact/subs', data)
      this.subsEmail = ''
    }
  },
}
</script>
<style lang="scss" scoped>
  
</style>