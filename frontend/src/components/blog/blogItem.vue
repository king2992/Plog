<template>
    <v-col cols="6">
        <v-card shaped="shaped" width="600px">
            <v-container>
                <v-layout>
                    <v-row>
                        <v-col> 
                            <v-card-title class="title">
                                발행 포스트
                            </v-card-title>
                            <div class="pl-4">
                                <h3>8 건</h3>
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
                            <v-chip class="mt-3" color="#01A9DB" text-color="white" @click="blogAddMove">
                                <v-avatar left="left">
                                    <v-icon>mdi-circle-edit-outline</v-icon>
                                </v-avatar>
                                게시글 등록
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
        methods:{
            blogAddMove () {
                this.$router.push('/blogAdd');
            },
        }
}
</script>

<style scoped>

</style>