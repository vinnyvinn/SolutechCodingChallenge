<template>
    <div>
        <users v-if="add_user" :edit="editing"></users>
        <!-- Main content -->
        <section class="content" v-if="!add_user">
            <!-- Default box -->
            <div class="box">
                <div class="box-body">
                    <v-app id="inspire">
                        <v-card>
                            <v-card-title>
                                Users
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn small color="indigo" dark @click="add_user=true">Add User
                                </v-btn>
                            </v-card-title>
                            <v-data-table
                                :headers="headers"
                                :items="tableData"
                                :search="search"
                                item-key="name"
                                class="elevation-1"
                                :footer-props="{
                              showFirstLastPage: true,
                              firstIcon: 'mdi-arrow-collapse-left',
                              lastIcon: 'mdi-arrow-collapse-right',
                              prevIcon: 'mdi-minus',
                              nextIcon: 'mdi-plus'
                              }"
                            >
                                <template v-slot:item.actions="{ item }">
                                    <v-btn class="mx-1 my-1" fab dark color="indigo" small>
                                        <v-icon dark small @click="editUser(item)">mdi-pencil</v-icon>
                                    </v-btn>
                                    <span :class="{hide_user:item.id==1 || item.id==2}">
                                     <v-btn class="mx-1 my-1" fab dark color="pink" small>
                                        <v-icon dark small @click="deleteUser(item.id)">mdi-delete</v-icon>
                                    </v-btn>
                                    </span>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-app>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Users from "./Users";
    import {mapGetters} from "vuex";
    import FieldDefs from "./FieldDefs";
    export default {
        data(){
            return {
                add_user: false,
                editing: false,
                search:'',
                headers: FieldDefs
            }
        },
        created(){
            this.$store.dispatch("fetchUsers");
            this.listen();
        },
        computed:{
          ...mapGetters({
              tableData:'getUsers'
          })
        },
        methods:{
            editUser(user){

               this.$store.dispatch('fetchUser',user);
                this.editing=true;
                this.add_user=true;
            },
            deleteUser(id){
                axios.delete(`users/${id}`)
                    .then(res => {
                        for (let i=0;i<this.tableData.length;i++){
                            if (this.tableData[i].id == res.data){
                                this.tableData.splice(i,1);
                            }
                        }
                    })
                    .catch(error => Exception.handle(error))
            },
            listen(){
                eventBus.$on('listUsers',(user) =>{
                    this.getItems();
                    this.add_user =false;
                });
                eventBus.$on('cancel',()=>{
                    this.add_user = false;
                    this.editing = false;
                });
                eventBus.$on('updateUser',(user)=>{
                    this.add_user = false;
                    this.editing = false;
                    for (let i=0;i<this.tableData.length;i++){
                        if (this.tableData[i].id == user.id){
                            this.tableData.splice(i,1);
                        }
                    }
                    this.tableData.unshift(user);
                });
            },

        },
        components:{
            Users
        }
    }
</script>

<style scoped>
.hide_user{
    display:none;
}
</style>
