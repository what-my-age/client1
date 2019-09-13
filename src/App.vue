<template>
  <div>
    <div v-if="isLogin">
      <Navbar @letSignouts="changeSignOut"></Navbar>
      <Header @uploadFile="uploadMe"></Header>
      <Card :foto="photos" @removeDong="removeYa"></Card>
    </div>
    <div v-if="!isLogin">
      <NavLanding
        v-if="!isLogin"
        @changeToHome="changeHome"
        @changeToLogin="changeLogin"
        @changeToRegister="changeRegister"
      ></NavLanding>
      <transition name="slide-fade">
        <Home v-if="home"></Home>
        <Register v-if="regs" @doneRegister="changeLogin"></Register>
      </transition>
      <Login v-if="logs" @doneLogin="pageIn"></Login>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import NavLanding from "./components/NavLanding.vue";
export default {
  components: {
    Card,
    Header,
    Login,
    Register,
    Navbar,
    Home,
    NavLanding
  },
  methods: {
    changeHome() {
      this.home = true;
      this.logs = false;
      this.regs = false;
    },
    changeLogin() {
      this.home = false;
      this.logs = true;
      this.regs = false;
    },
    changeRegister() {
      this.home = false;
      this.logs = false;
      this.regs = true;
    },
    pageIn() {
      this.isLogin = true;
      this.logs = false;
      this.home = false;
      this.regs = false;
      this.getAll()
    },
    changeSignOut() {
      this.isLogin = false;
      this.changeHome();
    },
    removeYa() {
      this.getAll();
    },
    uploadMe() {
      this.getAll();
    },
    getAll() {
      let token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: "http://localhost:3000/image",
        headers: {
          token
        }
      })
        .then(({ data }) => {
          let poto = data.data;
          this.photos = poto;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      isLogin: false,
      photos: [],
      home: true,
      logs: false,
      regs: false,
      showRegist: false,
      showLogin: false
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
      this.logs = false;
      this.home = false;
      this.regs = false;
      this.getAll();
    } else {
      this.isLogin = false;
      this.logs = false;
      this.home = true;
      this.regs = false;
    }
  }
};
</script>

<style>
.slide-fade-enter-active {
  animation: slideInRight 0.5s;
}
.slide-fade-leave-active {
  animation: slideInRight 0.5s reverse;
}
</style>