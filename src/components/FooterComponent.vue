<template>
  <v-card>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="green lighten-1 text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Debarun Saha</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>