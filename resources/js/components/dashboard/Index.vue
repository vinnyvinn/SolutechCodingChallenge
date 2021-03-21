<template>
<div>
    <!-- Content Wrapper. Contains page content -->
    <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>{{ statistics.orders }}</h3>

                                <p class="fsw">New Orders</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-bag"></i>
                            </div>
                            <a href="javascript:void(0)" @click="orders" class="small-box-footer fsw">More info <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>{{statistics.products}}</h3>

                                <p class="fsw">Products</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-stats-bars"></i>
                            </div>
                            <a href="javascript:void(0);" @click="products" class="small-box-footer fsw">More info <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-warning">
                            <div class="inner">
                                <h3>{{statistics.users}}</h3>

                                <p class="fsw">User Registrations</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person-add"></i>
                            </div>
                            <a href="javascript:void(0);" @click="users" class="small-box-footer fsw">More info <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <div class="col-lg-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-danger">
                            <div class="inner">
                                <h3>{{ statistics.suppliers }}</h3>

                                <p class="fsw">Suppliers</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-pie-graph"></i>
                            </div>
                            <a href="javascript:void(0);" @click="suppliers" class="small-box-footer fsw">More info <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
</div>
        </section>
    </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    created() {
        console.log('cool')
    this.$store.dispatch('setStatistics');
    },
    watch:{
        statistics(){
            console.log(this.statistics)
        }
    },
    computed:{
        ...mapGetters({
            statistics:'getStatistics'
        })
    },
    methods:{
        suppliers(){
            this.$router.push('/suppliers')
        },
        orders(){
            this.$router.push('/orders')
        },
        products(){
            this.$router.push('/products')
        },
        users(){
            this.$router.push('/users')
        },
    }
}
</script>

<style scoped>

.fsw{
    font-size: 20px; font-weight: 900;
    color: #fff;
}
</style>
