<template>
    <v-dialog v-model="dialog" width="550" >
        <template v-slot:activator="{ on, attrs }">
            <v-chip class="mt-3" color="black" text-color="white" v-on="on" v-bind="attrs">
                <v-avatar left="left">
                    <v-icon>mdi-message</v-icon>
                </v-avatar>
                팔로워
            </v-chip>
        </template>

        <v-card  class="dialog">
            <v-card-title class="headline grey lighten-2">
                팔로워
            </v-card-title>
            <v-text-field class="search-textFiled" style="width:90%;margin-left:5%;">
                <v-icon slot="append" color="red">mdi-account-search</v-icon>
            </v-text-field>
            <v-card-text>
                <v-list>
                    <v-list-item v-for="item in items" :key="item.title">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text="text" @click="dialog = false">
                    close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            items: [
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
            ],
        }
    }
}
</script>

<style scoped>
.dialog{
    overflow: hidden;
}
</style>