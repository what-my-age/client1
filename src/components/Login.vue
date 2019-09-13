<template>
  <div>
    <div class="backgroundLogin">
      <transition name="fade">
        <div class="showLogin" v-if="showLogin">
          <div class="box">
            <h1>Log In</h1>
            <form action class="formLogin" @submit.prevent="signIn">
              <label for class="login" >Email</label>
              <input type="text" class="login" v-model="emailLogin"/>
              <label for class="login">Password</label>
              <input type="password" class="login" v-model="passwordLogin"/>
              <button type="submit" class="btn btn-dark btn-lg login">Submit</button>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
let baseURL;
export default {
  data() {
    return {
      showLogin: true,
      emailLogin : '',
      passwordLogin : ''
    };
  },
  methods : {
    signIn(){
      let email = this.emailLogin;
      let password = this.passwordLogin;
      axios({
        method : 'post',
        url : baseURL+'',
        data : {
          email,
          password
        }
      })
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.backgroundLogin {
  background: url("https://psychcentral.com/news/u/2015/05/expressions-big-SS.jpg");
  background-size: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 100vw;
  min-height: 100vh;
}

.showLogin {
  min-width: 50vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    124deg,
    #a32b06,
    #eb8705,
    #efff0a
  );
  background-size: 1800% 1800%;
  -webkit-animation: rainbow 1.5s ease infinite;
  -z-animation: rainbow 1.5s ease infinite;
  -o-animation: rainbow 1.5s ease infinite;
  animation: rainbow 1.5s ease infinite;
}

.formLogin {
  min-height: 24vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 64%;
  background: white;
  border-radius: 18px;
}
.box h1 {
  color: rgb(17, 12, 2);
  font-weight: bolder;
  font-size: 40px; 
  text-align: center;
  margin-bottom: 3%;
}
input.login {
  height: 30px;
  margin-bottom: 3%;
  font-size: 12pt;
  width: 44%;
}
button.login {
  margin-top: 10px;
  background: linear-gradient(
    90deg,
    yellow,
    rgb(230, 208, 11),
    orange,
    yellow,
    yellow
  );
  background-size: 400%;
  color: rgb(5, 0, 0);
  font-size: 12pt;
  height: 6vh;
  width: 6vw;
  border-radius: 12px;
  border-style: outset;
}
button.login:hover {
  animation: animate 8s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
label.login {
  font-size: 12pt;
  margin-top: 2vh;
  margin-bottom: 0.5vh;
}
@-webkit-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
</style>