<template>
    <v-container style="margin-left:10%">
        <v-layout row="row">
            <v-card class=" ma-10" style="width:300px" v-for="n in 8" :key="n">
                <v-img
                    class="white--text align-end"
                    style="height:45%"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    <v-card-title>게시글 제목</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">작성한 날짜</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>컨텐츠 내용</div>

                    <div>컨텐츠 내용의 일부가 여기에 보여집니다.</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange" text="text" @click="blogView">
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods:{
        blogView(){
            this.$router.push('/blogView');
        }
    }
}
</script>

<style scoped>

</style>