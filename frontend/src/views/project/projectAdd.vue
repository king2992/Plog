<template>
  <div id="app">
       <v-col cols="6" class="headline   font-weight-medium ">
         <div style="color:#2E2E2E;"> 프로젝트 등록</div>
           <v-progress-linear
                class="mt-5"
                indeterminate
                color="yellow darken-2"
           >
           </v-progress-linear>
       </v-col> 
     
     <div>
        <v-btn id="addBtn" color="#FFBF00" dark>등 록</v-btn>
     </div>
  </div>
    
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    };
  }
}
</script>

<style>
    #addBtn{
       display: table; 
       margin-left: auto; 
       margin-right: auto;
       margin-top:2%;
       width:100px;
    }
</style>