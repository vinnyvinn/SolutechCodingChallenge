import User from "./User";

class Exception {
    handle(error){
    this.isExpired(error.response.data.error);
    }
    isExpired(error){
        if (error == 'Token is Expired'){
          return   User.logout();
        }
        if (error == 'Invalid Token'){
         return    User.logout();
        }
        if (error=='Unauthorized'){
           eventBus.$emit('invalidCredentials');
        }else {
            User.logout();
        }

    }

}

export default Exception = new Exception();
