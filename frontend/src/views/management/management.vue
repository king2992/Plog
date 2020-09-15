<template>
    <v-app>
        <Status/>
    </v-app>
</template>

<script>
    import Status from '../../components/management/status'

    export default {
        name: 'management',
        components: 
        { 
            Status
        }
    }
</script>