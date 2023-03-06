<template>
<div>
  <div><i>Completed topics - {{ printCount }}%</i></div>
  <div><i>Manipulated value  - {{ specialVal }}%</i></div>
  <br/>
  <v-btn @click="increaseCounter">step up by vue store</v-btn>
</div>
</template>


<script>
export default {
  computed: {
    printCount() {
      return this.$store.state.count;
      // return this.$store.getters.getCounterValue;
    },
    specialVal(){
      return this.$store.getters.manipulateValue;
    }
  },
   methods: {
    increaseCounter() {
      // return this.$store.state.count++;
      this.$store.commit('increment',{number: 10});
    },
  },
};
</script>