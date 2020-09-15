<template>
    <v-col cols="6">
        <v-card shaped="shaped" width="600px">
            <v-container>
                <v-layout>
                    <v-row>
                        <v-col cols="5">
                            <v-card-title class="title">
                                접속중인 사용자
                            </v-card-title>
                            <div class="pl-4">
                                <h3>21 명</h3>
                            </div>
                        </v-col>
                        <v-col cols="3">
                            <v-card-title class="title">
                                관련 태그
                            </v-card-title>
                            <div class="pl-4">
                                <h3>56 건</h3>
                            </div>
                        </v-col>
                        <v-col>
                            <v-chip class="mt-3" color="#01A9DB" text-color="white">
                                <v-avatar left="left">
                                    <v-icon>mdi-human-greeting</v-icon>
                                </v-avatar>
                                추천 사용자 보기
                            </v-chip>
                            <v-chip class="mt-3" color="orange" text-color="white">
                                <v-avatar left="left">
                                    <v-icon>mdi-human-greeting</v-icon>
                                </v-avatar>
                                접속중인 사용자
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
    
}
</script>

<style scoped>

</style>