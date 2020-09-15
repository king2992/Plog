<template>
    <!-- 프로필 -->
    <v-card flat="flat" style="margin-top:5%;max-height:50%">
        <v-container>
            <v-row>
                <v-col cols="3">
                    <div>
                        <v-chip
                            v-for="n in 10"
                            :key="n"
                            class="ma-2"
                            color="black"
                            label="label"
                            text-color="white">
                            <v-icon left="left">mdi-label</v-icon>
                            {{lang[n]}}
                        </v-chip>
                    </div>
                </v-col>
                <v-col>
                    <div style="text-align:center;">
                        <v-avatar size="250">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar>
                    </div>
                        <div style="text-align:center;" class="ma-5 font-weight-bold">
                            이메일 : king2992@naver.com
                            <v-row justify="center">
                                <v-dialog
                                    v-model="editDialog"
                                    fullscreen="fullscreen"
                                    hide-overlay="hide-overlay"
                                    transition="dialog-bottom-transition">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn text="text" small="small" color="primary" v-bind="attrs" v-on="on">
                                            Edit
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-toolbar dark="dark" color="primary">
                                            <v-btn icon="icon" dark="dark" @click="editDialog = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>Edit</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-toolbar-items>
                                                <v-btn dark="dark" text="text" @click="editDialog = false">저장</v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                        <v-divider></v-divider>

                                        <!-- introduce Edit Contents-->
                                        <v-container>
                                            <v-row>
                                                <v-col style="margin-left:5%" >
                                                      <v-tooltip left>
                                                        <template v-slot:activator="{ on, attrs }">
                                                    <div class="profileEdit" v-bind="attrs" v-on="on">
                                                        <v-avatar size="250" style="margin-left:25%">
                                                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                                        </v-avatar>
                                                    </div>
                                                    </template>
                                                        <span>클릭하여 프로필 사진을 편집해보세요.</span>
                                                    </v-tooltip>
                                                </v-col>
                                                <v-col style="margin-top:5%">
                                                    <v-tooltip bottom="bottom">
                                                        <template v-slot:activator="{ on, attrs }">
                                                                <div class="chipEdit" v-bind="attrs" v-on="on">
                                                                    <v-chip
                                                                        v-for="n in 10"
                                                                        :key="n"
                                                                        class="ma-2"
                                                                        color="black"
                                                                        label="label"
                                                                        text-color="white">
                                                                        <v-icon left="left">mdi-label</v-icon>
                                                                        {{lang[n]}}
                                                                    </v-chip>
                                                                </div>
                                                        </template>
                                                        <span>클릭하여 관심언어를 선택해주세요.</span>
                                                    </v-tooltip>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-textarea
                                                    outlined
                                                    name="input-7-4"
                                                    height="300"
                                                    label="About Me"
                                                    value="
                                                    웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.
                                                    Java로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.
                                                    문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.
                                                    다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.
                                                    최근에는 프론트엔드에 관심을 가지고 뿌리깊은 개발자를 목표로 노력하고 있습니다. 
                                                    반갑습니다, 신뢰를 가장 중요시하는 개발자입니다.
                                                    "
                                                    ></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <!-- introduce Edit Contents-->
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col>
                        <h2 class="mb-5">
                            About Me
                        </h2>

                        <div>웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.</div>

                        <div>Java로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.</div>

                        <div>문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.</div>

                        <div>다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.</div>

                        <div>최근에는 프론트엔드에 관심을 가지고 뿌리깊은 개발자를 목표로 노력하고 있습니다.</div>

                        <div>반갑습니다, 신뢰를 가장 중요시하는 개발자입니다.</div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </template>
<script>
export default {
    data(){
        return{
            introduceDialog : false,
            lang:['Java', 'JavaScript', 'Vue.JS', 'TypeScript', 'Go', 'HTML5', 'Python', 'C#', 'Node.JS', 'Angular.JS','Asp.NET'],
            editDialog: false,
        }
    }
}
</script>

<style>
    .chipEdit:hover{
        background-color: #A9E2F3;
    }
    .profileEdit:hover{
        background-color: #A9E2F3;
    }
</style>