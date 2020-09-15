<template>
  <div id="app">
       <v-col cols="6" class="headline mt-4  font-weight-medium ">
         <div style="color:#2E2E2E;"> 게시글 등록</div>
           <v-progress-linear
                class="mt-5"
                indeterminate
                color="yellow darken-2"
           >
           </v-progress-linear>
       </v-col> 
     <vue-editor id="vueEditor"></vue-editor>
     <div>
        <v-btn id="addBtn" color="#FFBF00" dark>등 록</v-btn>
     </div>
  </div>
    
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
    };
  }
}
</script>

<style>
    #vueEditor{
        height:400px;
    }
    #addBtn{
       display: table; 
       margin-left: auto; 
       margin-right: auto;
       margin-top:2%;
       width:100px;
    }
</style>