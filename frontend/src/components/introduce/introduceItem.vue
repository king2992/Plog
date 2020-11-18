<template>
<v-card shaped="shaped" width="600px">
    <v-container>
        <v-layout>
            <v-row>
                <v-col>
                    <v-card-title class="title">
                        팔로워
                    </v-card-title>
                    <div class="pl-4">
                        <h3>102</h3>
                    </div>
                </v-col>
                <v-col>
                    <v-card-title class="title">
                        팔로잉
                    </v-card-title>
                    <div class="pl-4">
                        <h3>98</h3>
                    </div>
                </v-col>
                <v-col>
                    <v-chip
                        class="mt-3"
                        color="#01A9DB"
                        text-color="white"
                        @click="snackbar = true">
                        <v-avatar left="left">
                            <v-icon>mdi-cards-heart</v-icon>
                        </v-avatar>
                        팔로우
                    </v-chip>
                    <v-snackbar v-model="snackbar" :timeout="timeout">
                        {{ text }}
                        <v-btn color="blue" text="text" @click="snackbar = false">
                            X
                        </v-btn>
                    </v-snackbar>
                    <IntroduceFollowers/>
                    <v-chip class="mt-3" color="orange" text-color="white">
                        <v-avatar left="left">
                            <v-icon>mdi-message</v-icon>
                        </v-avatar>
                        메세지
                    </v-chip>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</v-card>
</template>

<script>
import IntroduceFollowers from "./introduceFollowers"
export default {
    components: {
        IntroduceFollowers
    },
    data(){
        return{
            text: '팔로우 되었습니다.',
            timeout: 2000,
            snackbar: false,
        }
    }
}
</script>

<style scoped>

</style>