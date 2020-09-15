<template>
    <v-app class="SignUp">
        <v-container height="height" style="max-width:450px; margin-top:10%;">
            <v-layout row="row" wrap="wrap" align-center="align-center">
                <v-flex xs12="xs12">
                    <v-card>
                        <v-toolbar flat="flat" color="#01A9DB" short="short">
                            <v-toolbar-title class="white--text">회원가입</v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-3">
                            <v-text-field label="아이디" required></v-text-field>
                            <v-text-field label="비밀번호" type="password" required></v-text-field>
                            <v-text-field label="비밀번호 확인" type="password" required></v-text-field>
                            <div>
                                <v-btn color="#01A9DB" depressed="depressed" block="block" class="white--text">
                                    회원가입
                                </v-btn>
                                <!-- <font-awesome-icon :icon="['fas', 'clock']"/> -->
                            </div>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
    export default {}
</script>

<style scoped="scoped">
    .SignUp {
        background-image: url("https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_1280.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>>