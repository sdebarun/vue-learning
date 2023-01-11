<template>
  <v-container>
    <v-row>
      <v-col cols="12"><v-breadcrumbs>Products/Edit/</v-breadcrumbs></v-col>
      
      <v-col cols="12"> 
        <v-form ref="edit_form" v-model="valid" lazy-validation>
          <v-text-field label="Product Name" v-model="productModel.title" :rules="rules.prodcutName"></v-text-field>
          <v-text-field label="Product Price" v-model="productModel.price" :rules="rules.productPrice"></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/common/api";
export default {
  data() {
    return {
      title: "Edit Page",
      baseUrl: BASE_URL,
      errorMessage: "",
      valid : true,
      productModel : {
        title : '',
        price : '',
        description : '',
        discountPercentage : '',
        rating : '',
        stock : '',
        brand : '',
        category : '',
        thumbnail : '',
      },
      rules : {
        prodcutName : [
          v => !!v || "Please provide product name"
        ],
        productPrice : [
          v => !!v || "please provide the price",
          v => (v && !isNaN(v)) || "price should be numeric"
        ],
      }
    };
  },
  methods: {
    loadProduct(id) {
      let url = BASE_URL + "/products/" + id;
      axios
        .get(url)
        .then((resposne) => {
          this.productModel = resposne.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isEdit() {
      if (this.type != "edit" && typeof this.id !== undefined) {
        return false;
      } else {
        this.errorMessage = "Please provide a product id";
        return true;
      }
    },
  },
  props: ["id", "type"],
  mounted: function () {
    console.log(this.$route.params);
    // console.log(this.id);
    //if (this.isEdit()) {
      this.loadProduct(this.id);
    // }
  },
};
</script>

