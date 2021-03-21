<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">{{edit_order ? 'Update Order' : 'New Order'}}</h3>
                </div>
                <div class="box-body">
                    <form @submit.prevent="saveOrder()">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="form.order_number" required>
                        </div>
                        <div class="form-group">
                            <label>Product</label>
                            <multi-select :options="products_data"
                                          :selected-options="items"
                                          placeholder="select product(s)"
                                          @select="onSelect">
                            </multi-select>
                        </div>
                        <button type="submit" class="btn btn-primary">{{edit_order ? 'Update' : 'Save'}}</button>
                        <button type="button" class="btn btn-outline-danger" @click="cancel">Cancel</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import { MultiSelect } from 'vue-search-select'
export default {
    props:['edit'],
    data(){
        return {
            form:{
                order_number:'',
                product_id:[],
                id:''
            },
            items: [],
            lastSelectItem: {},
            products_data:[],
            edit_order: this.edit
        }
    },
    created(){
        this.$store.dispatch('fetchProducts');
        this.listen();
    },
    watch:{
        products(){
            this.products.forEach(s =>{
                this.products_data.push({value:s.id,text:s.name})
            });
        }
    },
    computed:{
        ...mapGetters({
            order:'getOrder',
            products:'getProducts'
        })
    },
    methods:{
        onSelect (items, lastSelectItem) {
            this.items = items
            this.lastSelectItem = lastSelectItem
        },
        // deselect option
        reset () {
            //reset
            this.items = [];
            this.form.product_id = [];
        },
        saveOrder(){
            if (this.items.length === 0) return this.$toastr.e('Product field is required');
            this.productArray();
            this.edit_order ? this.update() : this.save();
        },
        productArray(){
            this.form.product_id = [];
            this.items.forEach(s => {
                this.form.product_id.push(s.value);
            })
        },
        save(){
            delete this.form.id;
            axios.post('orders',this.form)
                .then(res =>{
                    this.$store.dispatch('updateOrder',res.data);
                    eventBus.$emit('listOrders',res.data)
                })
                .catch(error => {
                    if(error.response.data.message){
                     this.$toastr.e(error.response.data.message)
                    }
                    else if(typeof error.response.data.errors.order_number !==undefined){
                        this.$toastr.e(error.response.data.errors.order_number.toString())
                    }

                })
        },
        update(){
            let submittedData = {
                product_id: this.form.product_id,
                order_number: this.form.order_number
            }

            axios.patch(`orders/${this.form.id}`,submittedData)
                .then(res => {
                    this.edit_order = false;
                    eventBus.$emit('updateOrder',res.data);
                })
                .catch(error => error.response)
        },
        cancel(){
            eventBus.$emit('cancel')
        },
        selectedProducts(products){
            products.forEach(s => {
                this.items.push({text:s.name,value:s.id});
            })
        },
        listen(){
            if (this.edit){
                this.form = this.order;
                this.selectedProducts(this.order.products);
            }
        },
    },
    components:{
       MultiSelect
    }
}
</script>

<style scoped>

</style>
