<template>
  <div class="add-Instrument">
    <form @submit.prevent="createInstru">
      <input type="text" placeholder="brand" v-model="newInstrument.instruBrand">
      <input type="text" placeholder="Image" v-model="newInstrument.instruImg">
      <input type="text" placeholder="Price" v-model="newInstrument.instruPrice">
      <button type="submit">Submit</button>
    </form>

  </div>
</template>


<script>
  export default {
    name: '',
    data() {
      return {
        newInstrument: {}
      }
    },
    computed: {},
    methods: {
      createInstru() {
        this.$emit('createInstru', this.newInstrument)
        this.newInstrument = {}
      },
      // addInstru() {
      //   this.instruments.push(this.newInstrument)
      //   this.newInstrument = {}
      // },
    },
    components: {}
  }
</script>


<style scoped>

</style>