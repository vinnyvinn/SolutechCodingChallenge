<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                User Profile
            </h1>
        </section>
        <!-- Main content -->
        <section class="content">

            <div class="row">
                <div class="col-md-3">

                    <!-- Profile Image -->
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                            <img class="profile-user-img img-responsive img-circle" src="/dist/img/user4-128x128.jpg" alt="User profile picture">

                            <h3 class="profile-username text-center">{{form.name}}</h3>

                            <p class="text-muted text-center">{{form.title}}</p>

                            <ul class="list-group list-group-unbordered">
                                <li class="list-group-item">
                                    <b>Followers</b> <a class="pull-right">1,322</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Following</b> <a class="pull-right">543</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Friends</b> <a class="pull-right">13,287</a>
                                </li>
                            </ul>

                            <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->

                    <!-- About Me Box -->
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">About Me</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

                            <p class="text-muted">
                                {{form.education}}
                            </p>
                            <hr>
                            <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>
                            <p class="text-muted">{{form.location}}</p>
                            <hr>

                            <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                            <p>{{form.experience}}</p>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
                <div class="col-md-9">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            <li class="profile_settings"><a href="#settings" data-toggle="tab"><h4>Update Details</h4></a></li>
                        </ul>
                        <div class="tab-content">
                            <div class="active tab-pane" id="settings">
                                <form class="form-horizontal" @submit.prevent="updateDetails()">
                                    <div class="form-group">
                                       <div class="row">
                                           <label for="inputName" class="col-sm-2 control-label">Name</label>
                                           <div class="col-sm-10">
                                               <input type="text" class="form-control" placeholder="Name" v-model="form.name" required>
                                           </div>
                                       </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="form.email">
                                        </div>
                                         </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                        <label for="inputEmail" class="col-sm-2 control-label">Position</label>
                                        <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputTitle" placeholder="Position" v-model="form.title">
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                        <label for="inputName" class="col-sm-2 control-label">Location</label>

                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputName" placeholder="Location" v-model="form.location">
                                        </div>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                        <label for="inputExperience" class="col-sm-2 control-label">Experience</label>
                                        <div class="col-sm-10">
                                          <textarea class="form-control" id="inputExperience" placeholder="Experience" v-model="form.experience"></textarea>
                                        </div>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <label for="inputEducation" class="col-sm-2 control-label">Education</label>
                                            <div class="col-sm-10">
                                                <textarea class="form-control" id="inputEducation" placeholder="Education" v-model="form.education"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                        <div class="col-sm-offset-2 col-sm-10 ml-17">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" required> I agree to the <a href="#">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                            </div>

                                    <div class="form-group ml-17">
                                         <div class="col-sm-offset-2 col-sm-10">
                                            <button type="submit" class="btn btn-danger">Submit</button>
                                        </div>

                                    </div>
                                    </div>
                                </form>
                            </div>
                            <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    </div>
                    <!-- /.nav-tabs-custom -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

        </section>
    </div>
</template>

<script>
import User from "../../helpers/User";

export default {
data(){
    return {
        form:{
            name:"",
            email:"",
            title:"",
            education:"",
            experience:"",
            location:"",
        }
    }
},
    created() {
    this.getUser();
    },
    methods:{
    getUser(){
      axios.get(`/users/${User.id()}`)
        .then(res => {
            this.form = res.data;
        })
    },
     updateDetails(){
        axios.patch(`/users/${User.id()}`,this.form)
         .then(res => {
              this.$toastr.s("Details Successfully Updated")
         })
     }
    }
}
</script>

<style scoped>
.profile-user-img{
    margin-left: 27%;
}
.profile_settings{
    margin-left: 34% !important;
}
.control-label{
    font-weight: 700;
    padding-top: 20px;
    margin-bottom: 0;
    text-align: right;
}
.ml-17{
    margin-left: 17%;
}
</style>
