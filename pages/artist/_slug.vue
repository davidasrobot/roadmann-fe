<template>
  <div>
    <div class="loader fixed z-30 bg-red-600 w-full h-screen">
      <div class="absolute center">
        <div class="overflow-y-hidden">
          <h1 class="logo transform translate-y-full text-white tracking-tight font-bold text-2xl lg:text-4xl">ROADMANN</h1>
        </div>
      </div>
    </div>
    <social-media-button />
    <ArtistHero />
  </div>
</template>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SocialMediaButton from '../../components/SocialMediaButton.vue';
export default {
  async fetch({ params, $axios, store }) {
    try {
      const artist = await $axios.get(`artist/${params.slug}`).then(res => res.data)
      store.commit('artist/setActiveArtist', artist)
    } catch (error) {
      console.log(error);
    }
  },
  fetchOnServer:false,
  watch: {
    '$route.query': '$fetch'
  },
  // components: { SocialMediaButton },
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
}
</script>