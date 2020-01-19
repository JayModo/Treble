<template>
  <div class="hello">
    <AddInstrument v-on:createInstru="addInstru" />
    <div v-for="instrument in instruments" class="product">
      <h1>{{ instrument.instruBrand }}</h1>
      <div v-if="instrument.instruPrice > 598.00" class="display">
        <h3>Price : {{instrument.instruPrice}}</h3>
        <button @click="buy(instrument)">Buy</button>
        <button @click="returnInst"> Return</button>
        <img :src="instrument.instruImg" alt="">
      </div>
      <div v-else>
        <h3>OUT OF STOCK</h3>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import AddInstrument from "@/components/AddInstrument"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        newInstrument: {},

      }
    },
    methods: {
      addInstru(instrument) {
        this.instruments.push(instrument)
      },

      buy(instrumentId) {
        this.$store.dispatch('buy', instrumentId)
      },
      returnInst(instrumentId) {
        this.$store.dispatch('returnInst', instrumentId)
      }
    },
    props: {
      msg: String
    },
    components: {
      AddInstrument
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>