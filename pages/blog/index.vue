<template>
  <div class="container mx-auto px-4 lg:px-24 py-16">
    <div class="header py-16">
      <h1 class="text-2xl lg:text-5xl text-center playfair font-bold">Roadmann Blogs</h1>
    </div>
    <div class="cards">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <nuxt-link
          :to="'/blog/' + b.slug"
          class="block bg-white cursor-pointer w-full rounded-lg hover:shadow-xl transition-all duration-300"
          v-for="(b, i) in blogs"
          :key="i"
        >
          <div class="body p-8">
            <h4 class="text-2xl playfair font-bold text-black mb-4">
              {{ b.title }}
            </h4>
            <p class="text-base text-black poppins">
              {{ b.text }}
            </p>
          </div>
          <div class="border-t-2 border-gray-400 px-8 py-4">
            <h6 class="text-gray-700 poppins-semibold text-base">
              {{ b.date }}
            </h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  data() {
    return {
      blogs: [
        {
          title: "Title",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "20 Mei 2020",
        },
        {
          title: "Title 2",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "18 June 2020",
        },
        {
          title: "Title 4",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "9 August 2020",
        },
        {
          title: "Title",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "20 Mei 2020",
        },
        {
          title: "Title 2",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "18 June 2020",
        },
        {
          title: "Title 4",
          slug: "slug-by-title",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sint temporibus officia odio esse illum non ratione expedita quos rem eligendi iste voluptate illo modi earum, quia consequatur debitis. Voluptatem!",
          date: "9 August 2020",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.header{
  background-image: url('/header/blog.jpg');
}
</style>