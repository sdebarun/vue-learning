<template>
  <v-container>
    <v-row>
      <v-col cols="12"><v-breadcrumbs>Products/{{$route.params.type}}/</v-breadcrumbs></v-col>
      <v-col cols="7"> 
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field label="Product Name" v-model="productModel.title" :rules="rules.prodcutName"></v-text-field>
          <v-text-field label="Product Price" v-model="productModel.price" :rules="rules.productPrice"></v-text-field>
          <!-- <v-text-field label="Rating" v-model="productModel.rating" :rules="rules.productRating"></v-text-field> -->
          <v-btn @click="submit()" color="green">Update</v-btn>
        </v-form>
      </v-col>
      <v-col cols="5">
        <v-img :src="productModel.thumbnail"/>
        <v-rating v-model="productModel.rating" background-color="green lighten-3" color="green" large></v-rating>
      </v-col>
    </v-row>
    <footer-component></footer-component>
  </v-container>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/common/api";
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components:{
    FooterComponent
  },
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
        productRating : [
          v => !!v || 'please enter rating',
          v => (v && !isNaN(v)) || 'rating should be numeric',
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
    submit(){
        console.log(this.productModel);

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
  computed : {
    capitalizeFirstLetter : function(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  props: ["id", "type","value"],
  mounted: function () {
    document.title = this.$route.name;
    console.log(this.$route.params);
    // console.log(this.id);
    if (this.$route.params.type == 'edit') {
      this.loadProduct(this.id);
    }
  },
};
</script>

<style scoped>
  .success-btn {
    background: green;
  }
  .v-messages__message{
    color: red;
  }
</style>

