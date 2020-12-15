<template>
  <div class="rounded-full w-8 h-8 lg:h-16 lg:w-16 border-2 border-white p-4 relative">
    <div class="absolute center">
      <svg class="transform w-4 lg:w-8 h-4 lg:h-8" :class="{'rotate-180':reversed}" viewBox="0 0 51 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L47.5 47.5L2 93" stroke="white" stroke-width="4"/>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    reversed:Boolean,
  }
}
</script>
<style lang="scss" scoped>
  .center{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>