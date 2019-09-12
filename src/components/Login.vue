<template>
  <div>
    <div class="backgroundLogin">
      <transition name="fade">
        <div class="showLogin" v-if="showLogin">
          <div class="box">
            <h1>Log In</h1>
            <form action class="formLogin">
              <input type="text" />
              <input type="text" />
              <button type="submit" class="btn btn-dark btn-lg" @click="submitLogin">Submit</button>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true
    };
  },
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
  background: #f29849;
}
.formLogin {
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  margin-top: 20%;
}
.box h1 {
  color: rgb(17, 12, 2);
  text-align: center;
  margin-bottom: 3%;
}
input {
  height: 4.3vh;
  margin-bottom: 3%;
  width: 44%;
}
button{
  background: rgb(241, 218, 8);
  color: rgb(5, 0, 0);
  border-color: rgb(35, 37, 2);
  border-width: 2pt;
  font-size: 12pt;
  height: 5vh;
  width: 6vw;
  border-radius: 12px;
}
</style>