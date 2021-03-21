<template>
    <aside class="main-sidebar" id="sidebar-wrapper">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel (optional) -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header"></li>
                <!-- Optionally, you can add icons to the links -->
                <li><router-link to="/suppliers"><i class="fa fa-industry angle-left"></i> <span>Suppliers</span></router-link></li>
                <li><router-link to="/products"><i class="fa fa-product-hunt angle-left"></i> <span>Products</span></router-link></li>
                <li><router-link to="/orders"><i class="fa fa-shopping-cart angle-left"></i> <span>Orders</span></router-link></li>

                 <li class="treeview">
                  <a href="#"><i class="fa fa-bar-chart-o angle-left"></i> <span>Reports</span>
                        <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><router-link to="/reports/suppliers" class="fa fa-circle-o"> Suppliers</router-link></li>
                        <li><router-link to="/reports/products" class="fa fa-circle-o"> Products</router-link></li>
                        <li><router-link to="/reports/orders" class="fa fa-circle-o"> Orders</router-link></li>
                        </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
    export default {
      methods:{
          username(){
              return User.name();
          }
      }
    }
</script>

<style scoped>

</style>
