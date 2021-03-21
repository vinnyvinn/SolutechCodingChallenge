<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">{{edit_supplier ? 'Update Supplier' : 'New Supplier'}}</h3>
                </div>
                <div class="box-body">
                    <form @submit.prevent="saveSupplier()">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                        <button type="submit" class="btn btn-primary">{{edit_supplier ? 'Update' : 'Save'}}</button>
                        <button type="button" class="btn btn-outline-danger" @click="cancel">Cancel</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    props:['edit'],
    data(){
        return {
            form:{
                name:'',
                id:''
            },
            edit_supplier: this.edit
        }
    },
    created(){
        this.listen();
    },
    computed:{
        ...mapGetters({
            supplier:'getSupplier'
        })
    },
    methods:{
        saveSupplier(){
            this.edit_supplier ? this.update() : this.save();
        },
        save(){
            delete this.form.id;
            axios.post('suppliers',this.form)
                .then(res =>{
                    this.$store.dispatch('updateSupplier',res.data);
                    eventBus.$emit('listSuppliers',res.data)
                })
                .catch(error => {
                    if(error.response.data.message){
                        this.$toastr.e(error.response.data.message)
                    }
                    else if(typeof error.response.data.errors.name !==undefined){
                        this.$toastr.e(error.response.data.errors.name.toString())
                    }
                 })
        },
        update(){
            axios.patch(`suppliers/${this.form.id}`,this.form)
                .then(res => {
                    this.edit_supplier = false;
                    eventBus.$emit('updateSupplier',res.data);
                })
                .catch(error => error.response)
        },
        cancel(){
            eventBus.$emit('cancel')
        },
        listen(){
            if (this.edit){
                this.form = this.supplier
            }
        },
    },
}
</script>

<style scoped>

</style>
