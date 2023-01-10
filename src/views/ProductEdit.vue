<template>
  <div class="about">
    <h1>{{ $route.params }}</h1>
     <v-alert
     v-if="isEdit()"
      shaped
      prominent
      type="error"> {{errorMessage}}  </v-alert>
  </div>
</template>

<script>
// import axios from 'axios';
import {BASE_URL} from '@/common/api';
export default({
  data (){
    return {
      title : "Edit Page",
      baseUrl : BASE_URL,
      errorMessage:'',
     
    }
  },
  methods : {
    loadProduct(){
       //
    },
    isEdit(){
      if(this.type != 'edit' && typeof this.id !== undefined){
        return false;
      }else{
        this.errorMessage = "Please provide a product id";
        return true;
      }
    }
  },
  props : ["id","type"],
  mounted : function(){
    console.log(this.$route.params);
    console.log(this.id);
    
  }
})
</script>

