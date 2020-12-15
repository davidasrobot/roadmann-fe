<template>
  <div class="container mx-auto px-4 py-16">
    <div class="grid lg:grid-cols-2 gap-16 items-center p-4 lg:p-0">
      <div>
        <h1 class="text-3xl lg:text-5xl text-black playfair font-bold mb-4 lg:mb-8">
          Contact Roadmann
        </h1>
        <p class="poppins-semibold text-sm lg:text-xl text-black w-full">
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
        </p>
      </div>
      <div>
        <h6 class="text-sm text-black poppins mb-12">
          Please Fill The Form Below.
        </h6>
        <form >
          <div class="w-full mb-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Full Name
            </label>
            <input v-model="name" class="appearance-none block w-full text-gray-700 border-2 border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane Moe">
          </div>
          <div class="w-full mb-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Email
            </label>
            <input v-model="email" class="appearance-none block w-full text-gray-700 border-2 border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="jane@roadmann.com">
          </div>
          <div class="w-full mb-8">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Message
            </label>
            <textarea v-model="message" cols="5" class="appearance-none block w-full text-gray-700 border-2 border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Fill Out Your Message Here"></textarea>
          </div>
          <button @click="send" class="inline-block bg-black rounded-full py-2 px-8 text-white mt-4">
            send message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:'',
      email:'',
      message:'',
    }
  },
  methods:{
    send(e){
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      this.$store.dispatch('contact/send', data)
      this.name = '',
      this.email = '',
      this.message = ''
    }
  },
}
</script>
<style lang="scss" scoped>

</style>