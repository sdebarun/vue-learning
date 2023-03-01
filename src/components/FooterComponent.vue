<template>
  <v-card>
    <v-footer v-bind="localAttrs" :padless="padless" class="footer">
      <v-card flat tile width="100%" class="green lighten-1 text-center">
        <v-card-text class="white--text" id="font-white">
          {{ new Date().getFullYear() }} — <strong>Debarun Saha</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  
  data() {
    return {
      padless: true,
      variant: "fixed",
    };
  },
  methods: {
    //
  },
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
  mounted() {
    console.log(this.$store.state.count);
  },
};
</script>

<style scoped>
.green {
  background: #db1f26;
}
#font-white {
  color: #fff;
}
</style>