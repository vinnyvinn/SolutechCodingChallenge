<template>
    <div>
        <product v-if="add_product" :edit="editing"></product>
        <!-- Main content -->
        <section class="content" v-if="!add_product">
            <!-- Default box -->
            <div class="box">
                <div class="box-body">
                    <v-app id="inspire">
                        <v-card>
                            <v-card-title>
                                Products
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn small color="indigo" dark @click="add_product=true">Add Product
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
                                    <v-btn class="mx-1 my-1" fab dark color="indigo" small  @click="editProduct(item)">
                                        <v-icon dark small>mdi-pencil</v-icon>
                                    </v-btn>
                                     <v-btn class="mx-1 my-1" fab dark color="pink" small @click="deleteProduct(item.id)">
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
import Product from "./Product";
export default {
    data(){
        return {
            add_product: false,
            editing: false,
            search:'',
            headers: FieldDefs
        }
    },
    created(){
        this.$store.dispatch("fetchProducts");
        this.listen();
    },
    computed:{
        ...mapGetters({
            tableData:'getProducts'
        })
    },
    methods:{
        editProduct(product){
            this.$store.dispatch('fetchProduct',product);
            this.editing=true;
            this.add_product=true;
        },
        deleteProduct(id){
            axios.delete(`products/${id}`)
                .then(() => {
                   const  index = this.tableData.findIndex(i => i.id == id);
                   this.tableData.splice(index,1);
                })
                .catch(error => Exception.handle(error))
        },
        listen(){
            eventBus.$on('listProducts',() =>{
                this.add_product =false;
            });
            eventBus.$on('cancel',()=>{
                this.add_product = false;
                this.editing = false;
            });
            eventBus.$on('updateProduct',(product)=>{
                this.add_product = false;
                this.editing = false;
                const  index = this.tableData.findIndex(i => i.id == product.id);
                this.tableData.splice(index,1);
                this.$store.dispatch('updateProduct',product);
            });
        },

    },
    components:{
        Product
    }
}
</script>
