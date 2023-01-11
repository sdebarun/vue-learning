<template>
  <v-app>
    <div class="custoemr-list">
      <v-main>
        <v-container fluid>
          <v-row>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" v-for="head in headers" :key="head">
                      {{ head }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.discountPercentage }}</td>
                    <td>{{ product.rating }}</td>
                    <td>{{ product.stock }}</td>
                    <td>{{ product.brand }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                      <v-img
                        :src="product.thumbnail"
                        max-height="50px"
                        max-width="50px"
                      ></v-img>
                    </td>
                    <!-- <td class="product-images"><a target="_blank" v-for="(image,index) in product.images" :key="image" :href="image">{{index +1 }}</a></td> -->
                    <td>
                      <a class="view-link" target="_blank" :href="singleViewUrl + product.id"
                        ><v-btn icon color="green"> <v-icon>mdi-eye</v-icon> </v-btn></a
                      >
                    </td>
                    <td>
                      <a class="view-link" target="_blank" :href="editPageUrl + product.id"
                        ><v-btn icon color="green"> <v-icon>mdi-pencil</v-icon> </v-btn></a
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-row>
        </v-container>
        <v-card height="400px">
          <v-footer v-bind="localAttrs" :padless="padless">
            <v-card flat tile width="100%" class="green lighten-1 text-center">
              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Debarun Saha</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-card>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../common/api";
export default {
  data() {
    return {
      products: [],
      headers: [],
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
      padless: true,
      variant: "fixed",
      singleViewUrl: "view-product/",
      editPageUrl : 'product/edit/'
    };
  },
  methods: {
    getProductList() {
      const url = BASE_URL + "/products";
      axios
        .get(url)
        .then((resposnse) => {
          this.products = resposnse.data.products;
          this.headers = Object.keys(resposnse.data.products[0]);
          this.headers[10] = 'view';
          this.headers[11] = 'edit';
        })
        .catch((error) => console.log(error));
    },
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
  mounted: function () {
    this.getProductList();
    // console.log(this.headers);
  },
};
</script>
<style scoped>
.product-images {
  word-wrap: break-all;
}
.view-link {
  text-decoration: none;
}
</style>

