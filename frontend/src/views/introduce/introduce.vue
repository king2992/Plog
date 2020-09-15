<template>
    <v-app id="Users">
        <v-container style="margin-left:5%;">
            <v-layout row="row" class="mt-10">
                <v-flex row="row">
                    <v-row>
                        <IntroduceTitle/>
                        <v-col cols="5">
                            <IntroduceItem/>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
        <IntroduceContents/>
    </v-app>
</template>

<script>
    import IntroduceTitle from "../../components/introduce/introduceTitle"
    import IntroduceItem from "../../components/introduce/introduceItem"
    import IntroduceContents from "../../components/introduce/introduceContents"
    export default {
        components: {
            IntroduceTitle,
            IntroduceItem,
            IntroduceContents
        },
        data () {
            return {
            }
        },
        created(){
        },
        methods: {
        },
    }
</script>

<style scoped="scoped">
    #Users {
        background-color: #EFFBF2;
    }
    .search-textFiled{
        width:80%;
        margin-left:10%;
    }
</style>