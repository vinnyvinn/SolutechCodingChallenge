<template>
    <div>
        <supplier v-if="add_supplier" :edit="editing"></supplier>
        <!-- Main content -->
        <section class="content" v-if="!add_supplier">
            <!-- Default box -->
            <div class="box">
                <div class="box-body">
                    <v-app id="inspire">
                        <v-card>
                            <v-card-title>
                                Suppliers
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn small color="indigo" dark @click="add_supplier=true">Add Supplier
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
                                        <v-icon dark small @click="editSupplier(item)">mdi-pencil</v-icon>
                                    </v-btn>
                                     <v-btn class="mx-1 my-1" fab dark color="pink" small>
                                        <v-icon dark small @click="deleteSupplier(item.id)">mdi-delete</v-icon>
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
import Supplier from "./Supplier";
import {mapGetters} from "vuex";
import FieldDefs from "./FieldDefs";
export default {
    data(){
        return {
            add_supplier: false,
            editing: false,
            search:'',
            headers: FieldDefs
        }
    },
    created(){
        this.$store.dispatch("fetchSuppliers");
        this.listen();
    },
    computed:{
        ...mapGetters({
            tableData:'getSuppliers'
        })
    },
    methods:{
        editSupplier(supplier){
            this.$store.dispatch('fetchSupplier',supplier);
            this.editing=true;
            this.add_supplier=true;
        },
        deleteSupplier(id){
            axios.delete(`suppliers/${id}`)
                .then(() => {
                   const  index = this.tableData.findIndex(i => i.id == id);
                   this.tableData.splice(index,1);
                })
                .catch(error => Exception.handle(error))
        },
        listen(){
            eventBus.$on('listSuppliers',() =>{
                this.add_supplier =false;
            });
            eventBus.$on('cancel',()=>{
                this.add_supplier = false;
                this.editing = false;
            });
            eventBus.$on('updateSupplier',(supplier)=>{
                this.add_supplier = false;
                this.editing = false;
                const  index = this.tableData.findIndex(i => i.id == supplier.id);
                this.tableData.splice(index,1);
                this.$store.dispatch('updateSupplier',supplier);
            });
        },

    },
    components:{
        Supplier
    }
}
</script>
