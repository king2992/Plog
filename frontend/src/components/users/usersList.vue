<template>
    <v-container style="margin-left:8%;">
        <v-layout row="row">
            <v-flex row="row">
                <v-card v-for="n in 16" :key="n" class="pa-5 ma-3" width="260px">
                    <v-row>
                        <v-col cols="2">
                            <v-avatar>
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                            </v-col>
                            <v-col>
                                <v-card-title class="title">
                                    User
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                안녕하세요. John입니다. 반갑습니다. 이것은 자기소개입니다.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                #Vue.js #Node.js #JavaScript #Java #Python
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </template>

<script>
export default {
    
}
</script>

<style scoped>

</style>