<template>
  <div ref="card">
    <div
      ref="cardBody"
      class="px-8 py-12 opacity-0"
    >
      <div v-if="Object.keys(event).length !== 0 && event.constructor === Object">
        <img :src="$store.state.storage_url+event.banner" :alt="event.title" />
        <div class="mt-4">
          <h3 class="text-2xl playfair font-bold">{{ event.title }}</h3>
          <p class="text-xs">
            {{ event.sub_title }}
          </p>

          <!-- DATE AND LOCATION -->
          <div class="flex">
            <div class="w-1/2">
              <h6 class="text-sm font-bold mt-4">Date :</h6>
              <h4
                class="playfair font-bold text-xl tracking-widest text-red-600"
              >
                {{ event.date }}
              </h4>
            </div>
            <div class="w-1/2">
              <h6 class="text-sm font-bold mt-4">location :</h6>
              <h4
                class="playfair font-bold text-xl tracking-widest text-red-600"
              >
                {{ event.location }}
              </h4>
            </div>
          </div>

          <!-- TICKET AND LINKS -->
          <div class="flex mt-8 justify-end">
            <a
              href="#"
              class="bg-red-600 py-3 px-6 rounded-full text-white font-bold inline-block ml-auto"
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger);
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.card,
        start: "top center",
        end: "top 300px",
        scrub: true,
      },
    });
    tl.to(this.$refs.cardBody, {
      opacity: 1,
      duration: 1,
      ease: "none",
    });
  },
  computed: {
    event() {
      return this.$store.state.event.activeEvent;
    },
    ...mapGetters("event", ["status"]),
  },
};
</script>