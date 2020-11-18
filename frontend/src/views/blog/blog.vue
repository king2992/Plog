<template>
    <v-app id="blog">
        <v-container style="margin-left:12%;">
            <v-layout row="row" class="mt-5">
                 <v-flex row="row">
                <v-row>
                  <BlogTitle/>
                  <BlogItem/> 
                </v-row>
                </v-flex>
            </v-layout>

            <div style="margin-top:5%;margin-left:10%;" class="headline">
                <div class="font-weight-bold" style="color:#2E2E2E;" >블로그</div>
            </div>
        </v-container>
                   <BlogList/>

    </v-app>
</template>

<script>
    import BlogItem from "../../components/blog/blogItem"
    import BlogTitle from "../../components/blog/blogTitle"
    import BlogList from "../../components/blog/blogList"
    export default {
        components:{
            BlogItem,
            BlogTitle,
            BlogList
        },
    }
</script>

 <style>
        #blog{
            background-color :#EFFBF2;
        }
</style>