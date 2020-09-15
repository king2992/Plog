<template>
    <v-app id="status">
        <v-tabs fixed-tabs="fixed-tabs" background-color="#81BEF7">
            <v-tab class="font-weight-black">
                방문통계
            </v-tab>
            <v-tab class="font-weight-black">
                사용자통계
            </v-tab>
            <v-tab class="font-weight-black">
                순위
            </v-tab>
            <v-tab-item>
                <VisitStats></VisitStats>
            </v-tab-item>
            <v-tab-item>
                <EmplyrStats></EmplyrStats>
            </v-tab-item>
             <v-tab-item>
                <Ranking></Ranking>
            </v-tab-item>
        </v-tabs>
    </v-app>
</template>

<script>
    import VisitStats from './visitStats'
    import EmplyrStats from './emplyrStats'
    import Ranking from './ranking'
    export default {
        components: 
        { 
            VisitStats,
            EmplyrStats,
            Ranking
        }
    }
</script>

<style>
    /* #status {
        background-color :#EFFBF2;
    } */
</style>