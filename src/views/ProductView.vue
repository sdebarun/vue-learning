<template>
  <v-app>
    <v-main>
      <v-container>
          <v-breadcrumbs><u>Products / {{productDetails.title}}</u></v-breadcrumbs>
        <v-row>
          <v-col md-6>
            <v-img :src=productDetails.thumbnail></v-img>
          </v-col>
          <v-col md-6>
            <h3>{{ productDetails.title }}</h3>
            <p>{{ productDetails.description }}</p>
            <p>Price - ${{ productDetails.price }}</p>
            </v-col>
        </v-row>
      </v-container>
      <footer-component></footer-component>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
import { BASE_URL } from "../common/api";
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components:{
    FooterComponent,
  },
  data() {
    return {
      productDetails: {},
    };
  },
  methods: {
    loadProductDetails() {
      axios
        .get(BASE_URL + "/products/" + this.id)
        .then((resposne) => (this.productDetails = resposne.data))
        .catch((error) => console.log(error));
    },
  },
  props: ["id"],
  mounted: function () {
    this.loadProductDetails();
  },
};
</script>
