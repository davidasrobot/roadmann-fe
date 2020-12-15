<template>
  <div class="border-t-4 border-black lg:border-0 lg:p-8">
    <div
      v-for="(item, index) in dataEvents"
      :key="index"
      class="border-b border-black flex py-4 items-center cursor-pointer transition-all duration-300 group hover:border-b-4"
      @click="setActiveEvent(item)"
    >
      <div class="w-2/3 px-4">
        <h1
          class="text-black text-2xl lg:text-5xl font-bold transition-all duration-300 group-hover:pl-4"
        >
          {{ item.title }}
        </h1>
        <h6 class="text-black poppins text-sm">{{ item.sub_title }}</h6>
      </div>
      <div class="w-1/3">
        <h4 class="text-black text-xl lg:text-2xl font-bold poppins-semibold">
          {{ item.date }}
        </h4>
        <h6 class="text-black poppins text-sm text-red-600 font-bold">{{ item.location }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dataEvents:Array
  },
  methods:{
    setActiveEvent(e){
      this.$store.commit('event/set', e)
    }
  }
};
</script>