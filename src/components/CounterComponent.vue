<template>
<div>
  <div><i>Completed topics - {{ printCount }}%</i></div>
  <br/>
  <v-btn @click="increaseCounter">step up by vue store</v-btn>
</div>
</template>


<script>
export default {
  computed: {
    printCount() {
      return this.$store.state.count;
    },
  },
   methods: {
    increaseCounter() {
      return this.$store.state.count++;
    },
  },
};
</script>