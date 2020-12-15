<template>
  <div>
    <div class="loader fixed z-30 bg-red-600 w-full h-screen">
      <div class="absolute center">
        <div class="overflow-y-hidden">
          <h1 class="logo transform translate-y-full text-white tracking-tight font-bold text-2xl lg:text-4xl">ROADMANN</h1>
        </div>
      </div>
    </div>
    <Hero />
    <About />
    <Events />
    <section class="bg-red-600">
      <Artist />
    </section>
    <section>
      <Blog />
    </section>
    <section class="w-full bg-gray-100">
      <Contact />
    </section>

    <section class="footer bg-black h-auto w-full relative">
      <Footer />
    </section>

    <Modal v-if="status" />
    


    <!-- <Extrapages />
    <Video />
    <Extrapages1 />
    <Organized /> -->
    
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted(){
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger);
    }
    gsap.to('.logo', {
      y: '0%',
      duration: .75,
      delay:.75,
    });
    gsap.to('.loader', {
      y: '-100%',
      duration: 1.75,
      delay:1.75,
    });

    
  },
  computed:{
    status(){
      return this.$store.state.contact.data
    }
  }
}
</script>
<style lang="scss" scoped>
  .h-afterpanel{
    height: 300vh;
  }
</style>