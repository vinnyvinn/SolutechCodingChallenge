import Exception from "../../helpers/Exception";

export const Users = {

    state:{
        users:[],
        user:[]
    },

    getters:{
        getUsers(state){
            return state.users;
        },
        getUser(state){
            return state.user;
        }
    },

    mutations:{
        fetchUsers(state,data){
            state.users = data;
        },
        fetchUser(state,user){
         state.user = user;
        }
    },

    actions:{
        fetchUsers({commit}){
            axios.get("/users")
                .then(res => {
                    commit("fetchUsers",res.data)
                }).catch(err => {
                    Exception.handle(err)
            })
        },
        fetchUser({commit},data){
         commit("fetchUser",data);
        }
    }
}
