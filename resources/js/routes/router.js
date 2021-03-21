import Vue from 'vue';
import VueRouter from "vue-router";
const Login = () => import(/* webpackChunkName: "Login" */ '../components/auth/Login');
const Register = () => import(/* webpackChunkName: "Register" */ '../components/auth/Register');
const Users = () => import(/* webpackChunkName: "Users" */ '../components/users/Index');
const Profile = () => import(/* webpackChunkName: "Profile" */ '../components/profile/Index');
const Supplier = () => import(/* webpackChunkName: "Supplier" */ '../components/suppliers/Index');
const Product = () => import(/* webpackChunkName: "Product" */ '../components/products/Index');
const Order = () => import(/* webpackChunkName: "Orders" */ '../components/orders/Index');
const SupplierReport = () => import(/* webpackChunkName: "Reports" */ '../components/reports/suppliers/SupplierReport');
const ProductReport = () => import(/* webpackChunkName: "Reports" */ '../components/reports/products/ProductReport');
const OrderReport = () => import(/* webpackChunkName: "Reports" */ '../components/reports/orders/OrderReport');
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../components/dashboard/Index');

Vue.use(VueRouter);
function guard(to, from, next) {
    if (User.loggedIn()) {
        next();
    } else {
        next('/login');
    }
}
const routes = [
    {path:'/login',component: Login},
    {path:'/signup',component: Register},
    {path:'/',component:Dashboard, beforeEnter: guard},
    {path:'/users',component: Users, beforeEnter: guard},
    {path:'/suppliers',component: Supplier, beforeEnter: guard},
    {path:'/products',component: Product, beforeEnter: guard},
    {path:'/orders',component: Order, beforeEnter: guard},
    {path:'/reports/suppliers',component: SupplierReport, beforeEnter: guard},
    {path:'/reports/products',component: ProductReport, beforeEnter: guard},
    {path:'/reports/orders',component: OrderReport, beforeEnter: guard},
    {path:'/profile',component:Profile, beforeEnter: guard}
];

export default new VueRouter({
    routes,
    mode: 'history'
});
