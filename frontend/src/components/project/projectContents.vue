<template>
    <v-carousel
        style="margin-top:5%"
        hide-delimiter-background="hide-delimiter-background"
        show-arrows-on-hover="show-arrows-on-hover"
        hide-delimiters="hide-delimiters">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet
                color="#A4A4A4"
                height="100%"
                class="projectSheet"
                v-bind:style="{ backgroundImage: 'url(' + backgroundUrl[i] + ')' }">
                <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">
                        <h3 class="ma-10">{{ slide }}</h3>
                    </div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        slides: [
          '햄버거 매장 관리 시스템',
          '국도교통정보시스템',
          'Plog(진행중)',
        ],
        backgroundUrl: [
          'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg',
          'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_1280.jpg',
          'https://cdn.pixabay.com/photo/2015/04/20/13/18/notebook-731212_1280.jpg'
          ]
      }
    },
}
</script>

<style scoped>

</style>