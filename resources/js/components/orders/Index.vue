<template>
    <div>
        <order v-if="add_order" :edit="editing"></order>
        <!-- Main content -->
        <section class="content" v-if="!add_order">
            <!-- Default box -->
            <div class="box">
                <div class="box-body">
                    <v-app id="inspire">
                        <v-card>
                            <v-card-title>
                                Orders
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn small color="indigo" dark @click="add_order=true">Add Order
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
                                    <v-btn class="mx-1 my-1" fab dark color="indigo" small  @click="editOrder(item)">
                                        <v-icon dark small>mdi-pencil</v-icon>
                                    </v-btn>
                                     <v-btn class="mx-1 my-1" fab dark color="pink" small @click="deleteOrder(item.id)">
                                        <v-icon dark small>mdi-delete</v-icon>
                                    </v-btn>
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

import {mapGetters} from "vuex";
import FieldDefs from "./FieldDefs";
import Order from "./Order";
export default {
    data(){
        return {
            add_order: false,
            editing: false,
            search:'',
            headers: FieldDefs
        }
    },
    created(){
        this.$store.dispatch("fetchOrders");
        this.listen();
    },
    computed:{
        ...mapGetters({
            tableData:'getOrders'
        })
    },
    methods:{
        editOrder(order){
            this.$store.dispatch('fetchOrder',order);
            this.editing=true;
            this.add_order=true;
        },
        deleteOrder(id){
            axios.delete(`orders/${id}`)
                .then(() => {
                   const  index = this.tableData.findIndex(i => i.id == id);
                   this.tableData.splice(index,1);
                })
                .catch(error => Exception.handle(error))
        },
        listen(){
            eventBus.$on('listOrders',() =>{
                this.add_order =false;
            });
            eventBus.$on('cancel',()=>{
                this.add_order = false;
                this.editing = false;
            });
            eventBus.$on('updateOrder',(order)=>{
                this.add_order = false;
                this.editing = false;
                const  index = this.tableData.findIndex(i => i.id == order.id);
                this.tableData.splice(index,1);
                this.$store.dispatch('updateOrder',order);
            });
        },

    },
    components:{
        Order
    }
}
</script>
