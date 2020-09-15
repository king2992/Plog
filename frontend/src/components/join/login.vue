<template>
    <v-app class="SignIn">
        <v-container height="height" style="max-width:450px; margin-top:10%;">
            <v-layout row="row" wrap="wrap" align-center="align-center">
                <v-flex xs12="xs12">
                    <v-alert type="error" :value="isError" class="mb-3">
                        아이디 또는 비밀번호를 확인해주세요.
                    </v-alert>
                    <v-alert type="success" :value="isSuccess" class="mb-3">
                        로그인 되었습니다.
                    </v-alert>
                    <v-card>
                        <v-toolbar flat="flat" color="#01A9DB" short="short">
                            <v-toolbar-title class="white--text">로그인</v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-3">
                            <v-text-field v-model="userForm.id" label="아이디"></v-text-field>
                            <v-text-field v-model="userForm.password" label="비밀번호" type="password"></v-text-field>
                            <div>
                                <v-btn
                                    color="#01A9DB"
                                    depressed="depressed"
                                    block="block"
                                    @click="login({
                                    id:id,
                                    password:password
                                    })"
                                    class="white--text">
                                    로그인
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {
                id: null,
                password: null,
                isError: false,
                isSuccess: false,
                userForm : {
                    id : null,
                    password : null
                }
            }
        },
        methods: {
            login() {
                this.$axios.post('/api/login', this.userForm)
                .then((response) => {
                    if(response.data == 0){
                        this.isError = true
                        this.userForm.id = null    
                        this.userForm.password = null
                    }else if(response.data == 1){
                        this.isSuccess = true
                        this.$router.push({name:'home'})
                    } 
                });
            }
        }
    }
</script>

<style scoped="scoped">
    .SignIn {
        background-image: url("https://cdn.pixabay.com/photo/2014/10/22/17/47/keyboard-498396_1280.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>>