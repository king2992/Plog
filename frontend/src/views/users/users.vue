<template>
    <v-app id="Users">
        <v-container style="margin-left:12%;">
            <v-layout row="row" class="mt-10">
                 <v-flex row="row">
                <v-row>
                    <UsersTitle/>
                    <UsersItem/>
                </v-row>
                </v-flex>
            </v-layout>

            <div style="margin-top:3%" class="headline">
                <div class="font-weight-bold" style="color:#2E2E2E;" >사용자 목록</div>
            </div>
        </v-container>
                    <UsersList/>
            <div class="text-center pa-5">
                <v-pagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
        </v-app>
    </template>

    <script>
        import UsersItem from "../../components/users/usersItem"
        import UsersList from "../../components/users/usersList"
        import UsersTitle from "../../components/users/usersTitle"
        export default {
            components: {
                UsersItem,
                UsersList,
                UsersTitle
            },
            name: 'users', 
            data () {
            return {
                page: 1,
            }
            },
        }
    </script>

    <style scoped>
        #Users{
            background-color :#EFFBF2;
        }
    </style>