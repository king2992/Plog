<template>
<v-col cols="6">
    <v-card shaped="shaped" width="100%">
        <v-container>
            <v-layout>
                <v-row>
                    <v-col>
                        <v-card-title class="title">
                            프로젝트 건수
                        </v-card-title>
                        <div class="pl-4">
                            <h3>{{slidesCnt}}건</h3>
                        </div>
                    </v-col>
                    <v-col>
                        <v-card-title class="title">
                            관련 태그
                        </v-card-title>
                        <div class="pl-4">
                            <h3>56 건</h3>
                        </div>
                    </v-col>
                    <v-col>
                        <v-chip class="mt-3" color="#01A9DB" text-color="white" @click:close="close">
                            <v-avatar left="left">
                                <v-icon>mdi-circle-edit-outline</v-icon>
                            </v-avatar>
                            프로젝트 등록
                        </v-chip>
                        <v-chip class="mt-3" color="orange" text-color="white" @click:close="close">
                            <v-avatar left="left">
                                <v-icon>mdi-book-open-outline</v-icon>
                            </v-avatar>
                            프로젝트 열람
                        </v-chip>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-card>
</v-col>
</template>

<script>
export default {
    data(){
        return {
            slides: [
                '햄버거 매장 관리 시스템',
                '국도교통정보시스템',
                'Plog(진행중)',
            ],
        }
    },
    computed:{
        slidesCnt: function(){
          return this.slides.length
        }
    }
}
</script>

<style scoped>

</style>