<template>
    <v-app id="Project">
       <v-container>
            <v-layout row="row" class="mt-5" style="margin-left:3%;">
                <v-flex row="row">
                <v-row>
                    <ProjectTitle/>
                    <ProjectItem/>
                </v-row>
                </v-flex>
            </v-layout>
        </v-container>
                    <ProjectContents/>
    </v-app>
</template>

<script>
import ProjectTitle from "../../components/project/projectTitle"
import ProjectItem from "../../components/project/projectItem"
import ProjectContents from "../../components/project/projectContents"
  export default {
    components: {
        ProjectTitle,
        ProjectItem,
        ProjectContents
    },
  }
</script>
 <style scoped>
        #Project {
            background-color: #EFFBF2;
        }
        .projectSheet{
            /* background-image: url("https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg"); */
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
</style>