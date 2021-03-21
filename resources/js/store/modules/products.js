import Exception from "../../helpers/Exception";

export const Products = {
    state:{
        products:[],
        static_products:[],
        product:[],
    },
    getters:{
    getProducts(state){
        return state.products;
    },
        getProduct(state){
        return state.product;
    },
        getProductsReportFormatted(state) {
            return  state.products.map(pro => {
                return {
                    'REPORT DATE':pro.date_created,
                    'NAME': pro.name,
                    'DESCRIPTION': pro.description,
                    'QUANTITY': pro.quantity,
                }
            });
        },
    },
    mutations:{
        fetchProducts(state,data){
            state.products = data;
        },
        fetchProduct(state,data){
            state.product = data;
        },
        updateProduct(state,data){
            state.products.unshift(data)
        },
        setProductsReport(state, payload) {
            state.products = state.static_products.filter(b => moment(b.date_created).isBetween(moment(payload.from, "YYYY/MM/DD").subtract(1,'days'), moment(payload.to, "YYYY/MM/DD")));
        },
        staticProductsReport(state, data) {
            state.static_products = data;
        },
    },
    actions:{
    fetchProducts({commit}){
        axios.get("/products")
            .then(res => {
               commit("fetchProducts",res.data)
               commit("staticProductsReport",res.data)
            }).catch(err => {
                Exception.handle(err);
        })
    },
       fetchProduct({commit},data){
        commit("fetchProduct",data);
       },
        updateProduct({commit},data){
        commit("updateProduct",data);
       },
        setProductsReport({commit}, payload) {
            commit('setProductsReport', payload)
        },
    }
}
