<template>
  <div class="container mx-auto w-full lg:w-2/3 px-4 pt-32 lg:py-32">
    <div class="mb-16">
      <h1 class="text-center text-2xl lg:text-6xl text-black playfair font-bold leading-none mb-12">
        {{heading}}
      </h1>
      <h6 class="text-center text-black text-sm lg:text-lg poppins-semibold tracking-widest leading-loose">
        {{subHeading}}
      </h6>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    heading:String,
    subHeading:String
  }
};
</script>