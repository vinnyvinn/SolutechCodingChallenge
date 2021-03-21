import Exception from "../../helpers/Exception";

export const Suppliers = {
    state:{
        suppliers:[],
        static_suppliers:[],
        supplier:[],
    },
    getters:{
    getSuppliers(state){
        return state.suppliers;
    },
        getSupplier(state){
        return state.supplier;
    },
        getSuppliersReportFormatted(state) {
            return  state.suppliers.map(supp => {
                return {
                    'REPORT DATE':supp.date_created,
                    'SUPPLIER NAME': supp.name,
                }
            });
        },
    },
    mutations:{
        fetchSuppliers(state,data){
            state.suppliers = data;
        },
        fetchSupplier(state,data){
            state.supplier = data;
        },
        updateSupplier(state,data){
            state.suppliers.unshift(data)
        },
        setSuppliersReport(state, payload) {
         state.suppliers = state.static_suppliers.filter(b => moment(b.date_created).isBetween(moment(payload.from, "YYYY/MM/DD").subtract(1,'days'), moment(payload.to, "YYYY/MM/DD")));
        },
        staticSuppliersReport(state, data) {
         state.static_suppliers = data;
        },
    },
    actions:{
    fetchSuppliers({commit}){
        axios.get("/suppliers")
            .then(res => {
               commit("fetchSuppliers",res.data)
               commit("staticSuppliersReport",res.data)
            }).catch(err => {
                Exception.handle(err);
        })
    },
       fetchSupplier({commit},data){
        commit("fetchSupplier",data);
       },
        updateSupplier({commit},data){
        commit("updateSupplier",data);
       },
        setSuppliersReport({commit}, payload) {
            commit('setSuppliersReport', payload)
        },
    }
}
