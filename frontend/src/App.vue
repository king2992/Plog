<template>
    <v-app id="inspire">
        <nav class="menu">
            <input
                type="checkbox"
                href="#"
                class="menu-open"
                name="menu-open"
                id="menu-open"/>
            <label class="menu-open-button" for="menu-open" id="priority">
                <span class="lines line-1"></span>
                <span class="lines line-2"></span>
                <span class="lines line-3"></span>
            </label>
            <a class="menu-item purple" @click="introduceMove()">Introduce</a>
            <a class="menu-item green" @click="projectMove()">Project</a>
            <a class="menu-item red" @click="blogMove()">Blog</a>
            <a class="menu-item orange" @click="usersMove()">Users</a>
            <a class="menu-item lightblue" @click="managementMove()">Statistics</a>
        </nav>
        <v-row>
            <v-app-bar app="app" color="#424242" dark="dark">
                <v-col cols="3">
                    <v-toolbar-title
                    class="headline"
                        @click="homeMove()"
                        style="cursor: pointer; text-align:center;">
                         <!-- <img src="plog3.png" alt="" width="100px">  -->
                        Plog
                    </v-toolbar-title>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        solo-inverted="solo-inverted"
                        hide-details="hide-details"
                        prepend-inner-icon="mdi-magnify"
                        label="Search"
                        class="hidden-sm-and-down"/>
                </v-col>
                <v-col cols="3">
                    <div class="text-right">
                        <v-menu open-on-hover="open-on-hover" top="top" offset-y="offset-y">
                            <template v-slot:activator="{ on }">
                                <v-btn color="#FFBF00" dark="dark" v-on="on">
                                    <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="fa-lg"/>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                                    @click="join(item.title)">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
                <v-col cols="1">
                    <v-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-col>
                </v-app-bar>
            </v-row>
            <v-content>
                <router-view></router-view>
            </v-content>
            <v-footer style="background-color:#424242;">
                <v-row justfy="center" style="color:white;">
                    <v-col class="text-center"> 
                        개인정보처리방침
                    </v-col>
                    <v-col class="text-center">
                        이용약관
                    </v-col>
                    <v-col
                    class="text-center"
                    >
                        Copyright ⓒ 2020 Plog All Rights Reserved.
                    </v-col>
                    <v-col class="text-center">
                        Contact
                        <v-icon class="ml-1" dark>mdi-email-edit-outline</v-icon>
                        <v-icon class="ml-1" dark>mdi-post-outline</v-icon>
                        <v-icon class="ml-1" dark>mdi-cellphone-android</v-icon>
                    </v-col>
                </v-row>
            </v-footer>
        </v-app>
    </template>

    <script>
        export default {
            data: () => ({
                nav: null,
                drawer: null,
                items: [
                    {
                        title: 'Sign Up'
                    }, 
                    {
                        title: 'Sign In'
                    }
                ]
            }),
            methods: {
                join(item) {
                    if (item == 'Sign In') {
                        this
                            .$router
                            .push('/login');
                    } else if (item == 'Sign Up') {
                        this
                            .$router
                            .push('/signUp');
                    }
                },
                homeMove() {
                    this
                        .$router
                        .push('/');
                },
                introduceMove() {
                    this
                        .$router
                        .push('/introduce');
                },
                blogMove() {
                    this
                        .$router
                        .push('/blog');
                },
                projectMove() {
                    this
                        .$router
                        .push('/project');
                },
                usersMove() {
                    this
                        .$router
                        .push('/users');
                },
                managementMove() {
                    this
                        .$router
                        .push('/management');
                }
            },
            created() {
            window.scrollTo({top:0, left:0});
                this
                    .$axios
                    .post('/api')
                    .then(res => {
                        if (res.data == 1) {
                            console.log("로그인 중");
                        } else if (res.data == 0) {
                            console.log("세션 정보 없음.");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    </script>
    <style>
        /* nav */
        /*로고*/
        /*메인아이콘들*/
        nav .menu {
            padding: 0;
            margin: 0;
            background: #596778;
            color: #EEEEEE;
            text-align: center;
            font-family: "Lato", sans-serif;
        }
        @media screen and (max-width: 700px) {
            body {
                padding: 170px 0 0;
                width: 100%;
            }
        }

        .menu-item,
        .menu-open-button {
            background: #EEEEEE;
            border-radius: 100%;
            width: 80px;
            height: 80px;
            margin-left: -40px;
            position: absolute;
            color: #FFFFFF;
            text-align: center;
            line-height: 80px;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            -webkit-transition: -webkit-transform ease-out 200ms;
            transition: -webkit-transform ease-out 200ms;
            transition: transform ease-out 200ms;
            transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
        }

        .menu-open {
            display: none;
        }

        .lines {
            width: 25px;
            height: 3px;
            background: #596778;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -12.5px;
            margin-top: -1.5px;
            -webkit-transition: -webkit-transform 200ms;
            transition: -webkit-transform 200ms;
            transition: transform 200ms;
            transition: transform 200ms, -webkit-transform 200ms;
        }

        .line-1 {
            -webkit-transform: translate3d(0, -8px, 0);
            transform: translate3d(0, -8px, 0);
        }

        .line-2 {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        .line-3 {
            -webkit-transform: translate3d(0, 8px, 0);
            transform: translate3d(0, 8px, 0);
        }

        .menu-open:checked + .menu-open-button .line-1 {
            -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
            transform: translate3d(0, 0, 0) rotate(45deg);
        }

        .menu-open:checked + .menu-open-button .line-2 {
            -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
            transform: translate3d(0, 0, 0) scale(0.1, 1);
        }

        .menu-open:checked + .menu-open-button .line-3 {
            -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
            transform: translate3d(0, 0, 0) rotate(-45deg);
        }

        .menu {
            z-index: 10;
            margin: auto;
            position: fixed;
            top: 60vh;
            bottom: 0;
            left: 72vw;
            right: 0;
            width: 80px;
            height: 80px;
            text-align: center;
            box-sizing: border-box;
        }

        .menu-item:hover {
            background: #EEEEEE;
        }

        .menu-item:nth-child(3) {
            -webkit-transition-duration: 1s;
            transition-duration: 1s;
        }

        .menu-item:nth-child(4) {
            -webkit-transition-duration: 2s;
            transition-duration: 2s;
        }

        .menu-item:nth-child(5) {
            -webkit-transition-duration: 3s;
            transition-duration: 3s;
        }

        .menu-item:nth-child(6) {
            -webkit-transition-duration: 4s;
            transition-duration: 4s;
        }

        .menu-item:nth-child(7) {
            -webkit-transition-duration: 5s;
            transition-duration: 5s;
        }
        #priority {
            top: 0;
        }
        .menu-open-button {
            z-index: 2;
            -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            -webkit-transition-duration: 400ms;
            transition-duration: 400ms;
            -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
            transform: scale(1.1, 1.1) translate3d(0, 0, 0);
            cursor: pointer;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
        }

        .menu-open-button:hover {
            -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
            transform: scale(1.2, 1.2) translate3d(0, 0, 0);
        }

        .menu-open:checked + .menu-open-button {
            -webkit-transition-timing-function: linear;
            transition-timing-function: linear;
            -webkit-transition-duration: 200ms;
            transition-duration: 200ms;
            -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
            transform: scale(0.8, 0.8) translate3d(0, 0, 0);
        }

        .menu-open:checked ~ .menu-item {
            -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
            transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
        }

        /* 보라색 버튼 */
        .menu-open:checked ~ .menu-item:nth-child(3) {
            transform: translate3d(-2.9466px, -95.47586px, 0);
            color: white;
        }
        /* 초록버튼 */
        .menu-open:checked ~ .menu-item:nth-child(4) {
            transform: translate3d(101.9466px, -28.47586px, 0);
            color: white;
        }

        /* 분홍버튼 */
        .menu-open:checked ~ .menu-item:nth-child(5) {
            transform: translate3d(74.9466px, 80.47586px, 0);
            color: white;
        }

        /* 오렌지버튼 */
        .menu-open:checked ~ .menu-item:nth-child(6) {
            transform: translate3d(-67.9466px, 78.47586px, 0);
            color: white;
        }

        /* 하늘색버튼 */
        .menu-open:checked ~ .menu-item:nth-child(7) {
            transform: translate3d(-101.86291px, -25.37936px, 0);
            color: white;
        }

        .blue {
            background-color: #669AE1;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .blue:hover {
            color: #669AE1;
            text-shadow: none;
        }

        .green {
            background-color: #70CC72;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .green:hover {
            color: #70CC72;
            text-shadow: none;
        }

        .red {
            background-color: #FE4365;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .red:hover {
            color: #FE4365;
            text-shadow: none;
        }

        .purple {
            background-color: #C49CDE;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .purple:hover {
            color: #C49CDE;
            text-shadow: none;
        }

        .orange {
            background-color: #FC913A;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .orange:hover {
            color: #FC913A;
            text-shadow: none;
        }

        .lightblue {
            background-color: #62C2E4;
            box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
        }

        .lightblue:hover {
            color: #62C2E4;
            text-shadow: none;
        }
    </style>