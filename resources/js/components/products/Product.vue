<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">{{edit_product ? 'Update Product' : 'New Product'}}</h3>
                </div>
                <div class="box-body">
                    <form @submit.prevent="saveProduct()">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control" v-model="form.description" required>
                        </div>
                        <div class="form-group">
                            <label>Quantity</label>
                            <input type="text" class="form-control" v-model="form.quantity" required>
                        </div>
                        <div class="form-group">
                            <label>Supplier</label>
                            <multi-select :options="suppliers_data"
                                          :selected-options="items"
                                          placeholder="select supplier(s)"
                                          @select="onSelect">
                            </multi-select>

                        </div>
                        <button type="submit" class="btn btn-primary">{{edit_product ? 'Update' : 'Save'}}</button>
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
                name:'',
                description:'',
                quantity:'',
                supplier_id:[],
                id:''
            },
            items: [],
            lastSelectItem: {},
            suppliers_data:[],
            edit_product: this.edit
        }
    },
    created(){
        this.$store.dispatch('fetchSuppliers');
        this.listen();
    },
    watch:{
        suppliers(){
            this.suppliers.forEach(s =>{
                this.suppliers_data.push({value:s.id,text:s.name})
            });
        }
    },
    computed:{
        ...mapGetters({
            product:'getProduct',
            suppliers:'getSuppliers'
        })
    },
    methods:{
        onSelect (items, lastSelectItem) {
            this.items = items
            this.lastSelectItem = lastSelectItem
        },
        // deselect option
        reset () {
            // reset
            this.items = [];
            this.form.supplier_id = [];
        },
        saveProduct(){
            if (this.items.length === 0) return this.$toastr.e('Supplier field is required');
            this.supplierArray();
            this.edit_product ? this.update() : this.save();
        },
        supplierArray(){
            this.form.supplier_id = [];
            this.items.forEach(s => {
                this.form.supplier_id.push(s.value);
            })

        },
        save(){
            delete this.form.id;
            axios.post('products',this.form)
                .then(res =>{
                    this.$store.dispatch('updateProduct',res.data);
                    eventBus.$emit('listProducts',res.data)
                })
                .catch(error =>{
                    if(error.response.data.message){
                        this.$toastr.e(error.response.data.message)
                    }
                    else if(typeof error.response.data.errors.name !==undefined){
                        this.$toastr.e(error.response.data.errors.name.toString())
                    }
                })
        },
        update(){
            let submittedData = {
                supplier_id: this.form.supplier_id,
                name: this.form.name,
                description: this.form.description,
                quantity: this.form.quantity
            }
            axios.patch(`products/${this.form.id}`,submittedData)
                .then(res => {
                    this.edit_product = false;
                    eventBus.$emit('updateProduct',res.data);
                })
                .catch(error => error.response)
        },
        cancel(){
            eventBus.$emit('cancel')
        },
        selectedSuppliers(suppliers){
            suppliers.forEach(s => {
                this.items.push({text:s.name,value:s.id});
            })
        },
        listen(){
            if (this.edit){
                this.form = this.product;
                this.selectedSuppliers(this.product.suppliers);
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
