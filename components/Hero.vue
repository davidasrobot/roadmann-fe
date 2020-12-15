<template>
  <div>
    <div class="w-full h-screen bg-black relative overflow-hidden">
      <div class="relative text-white h-screen">
        <div class="w-full h-full absolute flex flex-wrap">
          <div class="relative w-full lg:w-1/2 px-8">
            <div class="absolute heading-center text-center lg:text-left mx-auto w-10/12 mr-8 hero-heading">
              <h5 class="text-lg lg:text-2xl poppins-semibold leading-tight">{{hero.caption}}</h5>
              <h1 class="text-2xl lg:text-6xl text-red-600 font-bold leading-tight hover:tracking-widest transition-all duration-300">JOHN ANGELZ</h1>
							<p class="text-sm lg:text-lg text-white">
								{{hero.text}}
							</p>
              <a :href="hero.link" class="hidden lg:inline-block bg-red-600 py-3 px-8 text-lg rounded-full capitalize mt-8 hover:bg-red-800 transition-all duration-300 ">
								read more
							</a>
            </div>
          </div>
					<div class="relative w-full lg:w-1/2 px-4">
            <img
              :src="image"
              alt="gambar"
              class="absolute bottom-0 w-full hero-image opacity-0"
            />
						<a :href="hero.link" class="inline-block lg:hidden bg-red-600 py-3 px-8 text-lg rounded-full capitalize mb-8 hover:bg-red-800 bottom-center animate-bouncing transition-all duration-300">
							read more
						</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap';
export default {
	computed:{
		hero(){
			return this.$store.state.hero.item
		},
		image(){
			return this.$store.getters['hero/getItem']
		}
	},
	mounted(){
    gsap.to('.hero-heading', {
      opacity: '1',
      duration: 1.75,
      delay:2.75,
		});
		gsap.to('.hero-image', {
      opacity: '1',
      duration: 1.75,
      delay: 3,
    });
  }
};
</script>
<style lang="scss" scoped>
	.hero-heading	{
		opacity: 0;
	}
	.heading-center{
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
	}
	@media (min-width: 1024px) {
		.heading-center{
			top: 50%;
			left: 20%;
			transform: translateY(-50%) translateX(0);
		}
	}
	.bottom-center{
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.animate-bouncing{
		animation: bouncing 1.5s ease-out infinite alternate;
	}
	@keyframes bouncing {
		from {
			margin-bottom: 20px;
		}
		to {
			margin-bottom: 32px;
		}
	}
</style>