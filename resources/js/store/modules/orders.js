import Exception from "../../helpers/Exception";

export const Orders = {
    state: {
        orders: [],
        static_orders: [],
        statistics: [],
        order: [],
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        getOrder(state) {
            return state.order;
        },
        getStatistics(state) {
            return state.statistics;
        },
        getOrdersReportFormatted(state) {
            return state.orders.map(ord => {
                return {
                    'REPORT DATE': ord.date_created,
                    'ORDER NUMBER': ord.order_number,
                    'PRODUCTS': ord.product_items
                }
            });
        },
    },
    mutations: {
        fetchOrders(state, data) {
            state.orders = data;
        },
        fetchOrder(state, data) {
            state.order = data;
        },
        updateOrder(state, data) {
            state.orders.unshift(data)
        },
        setOrdersReport(state, payload) {
            state.orders = state.static_orders.filter(b => moment(b.date_created).isBetween(moment(payload.from, "YYYY/MM/DD").subtract(1, 'days'), moment(payload.to, "YYYY/MM/DD")));
        },
        staticOrdersReport(state, data) {
            state.static_orders = data;
        },
        setStatistics(state, data) {
            state.statistics = data;
        },
    },
    actions: {
        fetchOrders({commit}) {
            axios.get("/orders")
                .then(res => {
                    commit("fetchOrders", res.data)
                    commit("staticOrdersReport", res.data)
                }).catch(err => {
                Exception.handle(err);
            })
        },
        fetchOrder({commit}, data) {
            commit("fetchOrder", data);
        },
        updateOrder({commit}, data) {
            commit("updateOrder", data);
        },
        setOrdersReport({commit}, payload) {
            commit('setOrdersReport', payload)
        },
        setStatistics({commit}) {
            axios.get("/statistics")
                .then(res => {
                    console.log('walla')
                    console.log(res.data)
                    console.log('----------')
                    commit("setStatistics", res.data)
                }).catch(err => {
                    console.log(err)
                //Exception.handle(err);
            })

        },
    }
}
