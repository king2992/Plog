<template>
    <v-app id="home">
       <div class="starter">
            <v-row justify="center" >
                <v-dialog v-model="homeDialog"
                          persistent="persistent"
                          max-width="1000"
                          >
                    <template v-slot:activator="{ on }">
                        <div class="welcome-text welcome-back">
                            Welcome to Plog
                        </div>
                        <div class="starter-text" v-on="on" >
                           Getting Started
                           <v-icon class="clickIcon" dark>mdi-cursor-default-click-outline</v-icon> 
                        </div>
                    </template>
                    <v-stepper v-model="e1">
                    <v-stepper-header>
                        <template v-for="n in steps">
                        <v-stepper-step
                            :key="`${n}-step`"
                            :complete="e1 > n"
                            :step="n"
                            editable
                        >
                            step{{ n }}
                        </v-stepper-step>

                        <v-divider
                            v-if="n !== steps"
                            :key="n"
                        ></v-divider>
                        </template>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content
                        v-for="n in steps"
                        :key="`${n}-content`"
                        :step="n"
                        style="min-height:500px;"
                        >
                        <v-card
                            class="mb-12"
                            color="grey lighten-1"
                            height="500"
                        ></v-card>

                        <v-btn
                            color="primary"
                            @click="nextStep(n)"
                            style="margin-left:80%; width:10%;"
                        >
                            Next
                        </v-btn>

                        <v-btn text  
                               style="width:10%;"
                               @click="homeDialog = false">Cancel</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                    </v-stepper>
                </v-dialog>
            </v-row>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                homeDialog: false,
                e1: 1,
                steps: 4,
                stepsText:[
                    'Plog란?',
                    'Plog UI 소개'
                ],
            }
        },
        watch: {
            steps (val) {
                if (this.e1 > val) {
                    this.e1 = val
                }
            },
        },
        methods:{
            nextStep (n) {
                if (n === this.steps) {
                this.e1 = 1
                } else {
                this.e1 = n + 1
                }
            },
        }
    }
</script>

<style>
    @keyframes kenburns-bottom{
        0%{
            transform:scale(1) translateY(0);
            transform-origin:50% 84%;
        }
        100%{
            transform:scale(1.25) translateY(15px);
            transform-origin:bottom
            }
    }
    #home {
        background-image: url("/main.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        animation:kenburns-bottom 5s ease-out both;
    }
    .starter{
        margin:0 auto; 
        margin-top:21%;
        width:20%;
        text-align:center;
        font-size:2.2em;
    }
    @keyframes tracking-in-contract-bck-top{0%{letter-spacing:0em;transform:translateZ(400px) translateY(-300px);opacity:0}50%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}
    .welcome-text{
        color:white;
        animation:tracking-in-contract-bck-top 2s cubic-bezier(.215,.61,.355,1.000) both;
    }

    @keyframes tracking-in-expand-fwd-bottom{
        0%{letter-spacing:0em; transform:translateZ(500px) translateY(-400px);opacity:0}
        40%{opacity:.6}
        100%{transform:translateZ(0) translateY(0);opacity:1}}
    .starter-text{
        color:#FFBF00;
        cursor:pointer;
        animation:tracking-in-expand-fwd-bottom .8s cubic-bezier(.215,.61,.355,1.000) both;
        animation-delay: 2.5s;
        font-style: italic;
    }
    .starter-text:hover{
        color:#FFFFFF;
    }
    @keyframes jello-horizontal{0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}}
    .clickIcon{
        animation:jello-horizontal .9s both;
        animation-iteration-count: 3;
        animation-delay: 3s;
    }
</style>