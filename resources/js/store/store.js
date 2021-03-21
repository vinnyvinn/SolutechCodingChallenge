import Vue from 'vue';
import Vuex from 'vuex';
import {Users} from "./modules/users";
import {Suppliers} from "./modules/suppliers";
import {Products} from "./modules/products";
import {Orders} from "./modules/orders";



Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
      Products,
      Suppliers,
      Orders,
      Users
    },
    state:{
        path_to:'/'
    },
    mutations:{
     pathTo(state, to) {
     state.path_to = to;
     }
    },
    actions:{
    pathTo({commit},to){
     commit('pathTo',to);
    }
   }
})
