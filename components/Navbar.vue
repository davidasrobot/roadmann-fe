<template>
  <div>
    <nav
      class="fixed w-full h-16 lg:h-auto z-50 navbar" :class="{'bg-red-600':lastScroll > 300, 'nav-hide':!showNavbar}"
    >
			<div class="container mx-auto flex items-center justify-between p-4 ">
			<!-- logo -->
      <div class="flex items-center text-white lg:w-1/3">
      <nuxt-link to="/">
        <h1 class="tracking-tight font-bold text-2xl lg:text-4xl" :class="{'text-white':lastScroll > 300, 'text-red-600':lastScroll < 300}">
          ROADMANN
        </h1>
      </nuxt-link>
      </div>
      <div class="flex lg:w-2/3">
				<div class="hidden lg:flex items-center ml-auto justify-between overflow-hidden">
					<ul class="flex items-center ml-auto transform transition-all duration-300" :class="{'translate-x-0':show, 'translate-x-full':!show}">
						<li class="list-none" @click="activeClass = 0"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 0}">about</nuxt-link></li>
						<li class="list-none" @click="activeClass = 1"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 1}">event</nuxt-link></li>
						<li class="list-none" @click="activeClass = 2"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 2}">artist</nuxt-link></li>
						<li class="list-none" @click="activeClass = 2"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 2}">contact</nuxt-link></li>
					</ul>
				</div>
				<!-- button navigation -->
        <button
          @click="toggle"
          class="text-white focus:outline-none transform transition-all duration-300"
          :class="{ 'rotate-180': show }"
        >
          <svg
            v-if="!show"
            class="text-white fill-current w-8 lg:w-16 h-8 lg:h-16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="menu">
              <path
                id="line-1"
                class="fill-current"
                d="M0.749981 7.48483H23.25C23.664 7.48483 23.9999 7.1488 23.9999 6.73485C23.9999 6.32083 23.6639 5.98486 23.25 5.98486H0.749981C0.335964 5.98486 0 6.32089 0 6.73485C0 7.1488 0.336026 7.48483 0.749981 7.48483Z"
                fill="black"
              />
              <path
                id="line-2"
                class="fill-current"
                d="M23.25 11.25H0.749981C0.335964 11.25 0 11.586 0 12C0 12.4139 0.336026 12.7499 0.749981 12.7499H23.25C23.664 12.7499 23.9999 12.4139 23.9999 12C23.9999 11.586 23.664 11.25 23.25 11.25Z"
                fill="black"
              />
              <path
                id="line-3"
                class="fill-current"
                d="M23.25 16.5H8.24998C7.83596 16.5 7.5 16.836 7.5 17.25C7.5 17.664 7.83603 18 8.24998 18H23.25C23.664 18 23.9999 17.6639 23.9999 17.25C24 16.836 23.664 16.5 23.25 16.5Z"
                fill="black"
              />
            </g>
          </svg>
          <svg
						v-if="show"
            class="text-white fill-current w-8 lg:w-16 h-8 lg:h-16"
						width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="menu 2">
					<g id="close">
					<rect class="fill-current" id="line-close-1" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 0.702226 -0.711954 0.702226 5.82275 5)" fill="black"/>
					<rect class="fill-current" id="line-close-2" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 -0.702226 0.711954 0.702226 5.0127 18.1885)" fill="black"/>
					</g>
					</g>
					</svg>
        </button>
      </div>
			</div>
    </nav>
		<div class="block lg:hidden fixed top-0 right-0 h-screen overflow-x-hidden transition-all duration-300 bg-black z-50" :class="{'w-0':!show, 'w-full':show}">
			<button @click="toggle" class="absolute top-0 right-0 w-8 h-8 text-center mr-4 mt-4 focus:outline-none transform transform transition-all duration-300" :class="{ 'rotate-180': show }">
				<svg
					class="text-white fill-current w-8 lg:w-16 h-8 lg:h-16"
					width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="menu 2">
				<g id="close">
				<rect class="fill-current" id="line-close-1" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 0.702226 -0.711954 0.702226 5.82275 5)" fill="black"/>
				<rect class="fill-current" id="line-close-2" width="18.4914" height="1.15571" rx="0.577855" transform="matrix(0.711954 -0.702226 0.711954 0.702226 5.0127 18.1885)" fill="black"/>
				</g>
				</g>
				</svg>
			</button>
			<div class="w-3/4 mx-auto relative">
				<ul class="my-32 text-center">
						<li class="list-none my-12" @click="activeClass = 0"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 0}">about</nuxt-link></li>
						<li class="list-none my-12" @click="activeClass = 1"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 1}">event</nuxt-link></li>
						<li class="list-none my-12" @click="activeClass = 2"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 2}">artist</nuxt-link></li>
						<li class="list-none my-12" @click="activeClass = 2"><nuxt-link to="#" class="text-white text-xl mx-4 nav-link px-6 py-3 rounded-full uppercase font-bold tracking-widest focus:outline-none hover:bg-red-600 hover:bg-opacity-25 transition-all duration-300" :class="{'active': activeClass === 2}">contact</nuxt-link></li>
					</ul>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
			show: false,
      activeClass:0,
      lastScroll:0,
      showNavbar:true
    };
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(){
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScroll) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScroll
      this.lastScroll = currentScrollPosition
    },
    toggle() {
      this.show = !this.show;
		}
  },
};
</script>
<style scoped>
.active{
	background: #e53e3e;
}
#line-1 {
  animation: line 3s linear 0.3s infinite alternate both;
}
#line-2 {
  animation: line 3s linear 0.8s infinite alternate both;
}
#line-3 {
  animation: line 3s linear 1.2s infinite alternate both;
}
@keyframes line {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0%);
  }
}
.navbar{
  transition: 0.5s all ease-out;
  transform : translate3d(0, 0, 0)
}
.nav-hide{
  transform : translate3d(0, -100%, 0)
}
</style>