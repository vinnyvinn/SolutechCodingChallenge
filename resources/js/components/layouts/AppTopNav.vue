<template>
    <!-- Main Header -->
    <header class="main-header">

        <!-- Logo -->
        <a href="javascript:void(0);" @click="home" class="logo">
            <b>Solutech</b>
        </a>
        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                 <li>

                     <a href="javascript:void(0);" @click="profile" style="margin-right: 20px;">
                         <span class="hidden-xs user_name">{{username()}}</span>
                         <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                     </a>

                        <!-- Menu Toggle Button -->
                        <a href="javascript:void(0);" @click="logout">
                            <!-- The user image in the navbar-->
                            <i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
                            <!-- hidden-xs hides the username on small devices so only the image appears. -->
                        </a>



                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods:{
        logout(){
            User.logout();
        },
        username(){
            return User.name();
        },
        profile(){
          this.$router.push('/profile');
        },
        home(){
          this.$router.push('/');
        }
    }
}
</script>

<style>
.user_name{
    font-size: 20px;
    font-weight: 900;
}
</style>
