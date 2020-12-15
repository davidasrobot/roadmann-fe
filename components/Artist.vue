<template>
  <div class="w-full h-screen bg-image relative">
    <div class="container mx-auto px-4">
      <!-- start slider -->
      <client-only>
      <swiper class="swiper" :options="slickOption">
        <swiper-slide
          v-for="(artis, index) in artists"
          :key="index"
          class="relative block"
        >
          <div class="grid lg:grid-cols-2 items-center h-screen">
            <div class="h-full z-20">
              <div class="my-4 lg:my-32">
                <div class="mt-4 lg:mt-16 ml-4 lg:ml-16 lg:w-1/2">
                  
                  <h1
                    class="text-center lg:text-left py-24 lg:py-8 text-4xl lg:text-6xl text-white font-bold leading-tight hover:tracking-widest transition-all duration-300"
                  >
                    {{artis.name}}
                  </h1>
                  <nuxt-link :to="'/artist/'+artis.slug" class="hidden lg:block">
                    <div class="flex mt-4 items-center justify-end group">
                      <h6 class="poppins text-white text-xl">show profile</h6>
                      <span
                        class="h-px w-16 border-b-2 border-white ml-4 transition-all duration-300 group-hover:w-24 animate-bouncing-x"
                      ></span>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="h-full text-white">
              <img
                class="absolute bottom-0 right-0 lg:mr-32 lg:h-screen"
                :src="$store.state.storage_url+JSON.parse(artis.image)[0].download_link"
                alt="artist"
              />
              <nuxt-link
                :to="'/artist/'+artis.slug"
                class="text-sm inline-block lg:hidden bg-black py-3 w-auto whitespace-no-wrap px-8 rounded-full capitalize mb-8 hover:bg-red-800 bottom-center animate-bouncing transition-all duration-300"
              >
                show profile
              </nuxt-link>
            </div>
          </div>
        </swiper-slide>
              <button class="swiper-button-prev" slot="button-prev"></button>
              <button class="swiper-button-next" slot="button-next"></button>
        
      </swiper>
  </client-only>
      <!-- end slider -->
    </div>
  </div>
</template>
<script>

import ArtistNav from './ArtistNav.vue';

export default {
  name: "ArtistComponent",
  components: {
    ArtistNav,
  },
  computed:{
    artists(){
      return this.$store.state.artist.artists
    }
  },
  data() {
    return {
      slickOption: {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },
      // artists: [
      //   {
      //     name: "John Angelz",
      //     link: "john-angelz",
      //     image: "/dummy/artist.png",
      //   },
      //   {
      //     name: "John Angelz",
      //     link: "john-angelz",
      //     image: "/dummy/artist.png",
      //   },
      //   {
      //     name: "John Angelz",
      //     link: "john-angelz",
      //     image: "/dummy/artist.png",
      //   },
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>
.bottom-center {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.animate-bouncing {
  animation: bouncing 1.5s ease-out infinite alternate;
}
.animate-bouncing-x {
  animation: bouncingx 1.5s ease-out infinite alternate;
}
@keyframes bouncing {
  from {
    margin-bottom: 20px;
  }
  to {
    margin-bottom: 32px;
  }
}
@keyframes bouncingx {
  from {
    margin-left: 20px;
  }
  to {
    margin-left: 32px;
  }
}
.swiper-button-prev, .swiper-button-next{
  top: 85%;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 999px;
  border: white solid 1px;
}
.swiper-button-prev:focus, .swiper-button-next:focus{
  outline: none;
}
.swiper-button-next{
  right: auto;
  left: 100px;
}
</style>