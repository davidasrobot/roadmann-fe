<template>
  <div ref="events" class="w-full bg-gray-100">
    <div class="container mx-auto py-16 lg:pt-24 pb-64">
      <div class="overflow-hidden px-4 mb-12 lg:mb-24">
        <h1 class="text-3xl lg:text-4xl text-black font-bold heading">Roadmann Events</h1>
      </div>
      <div class="flex">
        <div class="w-full lg:w-1/2 h-full px-4">
          <div class="w-full lg:w-3/4 mx-auto flex items-center justify-center mb-6 lg:mb-0">
            <li
              class="list-none transition-all duration-300 rounded-full"
              :class="{ 'hover:bg-red-600 hover:bg-opacity-25': activeTab === 1, 'bg-red-600': activeTab === 0 }"
            >
              <button
                @click="activeTab = 0"
                class="inline-block py-2 px-4 justify-center text-black rounded-full mx-4 focus:outline-none"
                :class="{ 'text-white': activeTab === 0 }"
              >
                this month
              </button>
            </li>
            <li
              class="list-none transition-all duration-300 rounded-full"
              :class="{ 'hover:bg-red-600 hover:bg-opacity-25': activeTab === 0, 'bg-red-600': activeTab === 1 }"
            >
              <button
                @click="activeTab = 1"
                class="inline-block py-2 px-4 justify-center text-black rounded-full mx-4 focus:outline-none"
                :class="{ 'text-white': activeTab === 1 }"
              >
                upcoming
              </button>
            </li>
          </div>
          <EventsTab ref="activeEvent" v-if="activeTab === 0" :data-events="dataEvents" />
          <EventsTab ref="upcomingEvent" v-if="activeTab === 1" :data-events="dataUpcoming" />
        </div>
        <div class="hidden lg:block w-1/2 px-16 relative">
          <div ref="card" class="border-4 border-black h-card sticky top-0">
            <EventCard />
          </div>
        </div>
				<div class="block lg:hidden">
					<EventModal />
				</div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
	// props:{
	// 	dataEvents:Array,
	// 	dataUpcoming:Array,
  // },
  computed:{
    dataEvents(){
      return this.$store.state.event.currentMonthEvent
    },
    dataUpcoming(){
      return this.$store.state.event.upcomingEvent
    }
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  mounted() {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger);
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.events,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
    tl.to(".heading", {
      x: "0%",
      duration: 1,
      ease: "none",
		});
		
		const tl_two = gsap.timeline({
			scrollTrigger:{
    		trigger:this.$refs.events,
    		start:"top 200px",
    		end:"top top",
				scrub:true,
    	},
		})
    tl_two.to(this.$refs.card, {
    	height:'600px',
    	duration:2,
    	ease:"none"
		})
		tl_two.to(this.$refs.activeEvent, {
			
		})
	},
};
</script>
<style lang="scss" scoped>
.heading {
  transform: translate(-51%);
}
.h-container {
  height: 10vh;
}
.h-card {
  height: 0; // set to 0
}
</style>