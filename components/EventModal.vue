<template>
  <div>
    <div v-if="Object.keys(event).length !== 0 && event.constructor === Object">
      <div class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 px-4 py-16 z-50" @click="remove">
        <div class="bg-white px-4 py-12 border-4 border-black relative">
          <button class="absolute top-0 right-0">
            <svg
              class="text-black fill-current w-8 lg:w-16 h-8 lg:h-16"
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="menu 2">
            <g id="close">
            <rect class="fill-current" id="line-close-1" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 0.702226 -0.711954 0.702226 5.82275 5)" fill="black"/>
            <rect class="fill-current" id="line-close-2" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 -0.702226 0.711954 0.702226 5.0127 18.1885)" fill="black"/>
            </g>
            </g>
            </svg>
          </button>
          <img :src="event.image" :alt="event.heading">
          <div class="mt-4">
            <h3 class="text-2xl playfair font-bold">{{ event.heading }}</h3>
            <p class="text-xs">
              {{ event.caption }}
            </p>
          </div>
          <div class="mt-4">
            <h6 class="text-sm font-bold mt-4">Date :</h6>
            <h4
              class="playfair font-bold text-xl tracking-widest text-red-600"
            >
              {{ event.date }}
            </h4>
          </div>
          <div class="mt-4">
            <h6 class="text-sm font-bold mt-4">location :</h6>
            <h4
              class="playfair font-bold text-xl tracking-widest text-red-600"
            >
              {{ event.location }}
            </h4>
          </div>
          <div class="mt-16">
            <a
              href="#"
              class="bg-red-600 py-3 px-6 rounded-full text-white text-center font-bold block ml-auto"
              >{{ status }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods:{
    remove(){
      this.$store.commit('event/remove')
    }
  },
  computed: {
    event() {
      return this.$store.state.event.activeEvent;
    },
    ...mapGetters("event", ["status"]),
  },
}
</script>