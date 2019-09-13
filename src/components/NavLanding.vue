<template>
  <nav class="body-nav-land">
      <div class="logo-home">
          <h1 @click="keHome">WMA?</h1>
          <i class="fas fa-tags"></i>
      </div>
      <div>
    <ul class="action-home">
      <li @click="keLogin">Login</li>
      <li @click="keRegister">Register</li>
    </ul>
      </div>
  </nav>
</template>

<script>
export default {
  methods: {
    keHome(){
      this.$emit('changeToHome')
    },
    keLogin(){
      this.$emit('changeToLogin')
    },
    keRegister(){
      this.$emit('changeToRegister')
    }
  }
};
</script>

<style>
body{
  background: black;
  margin : 0;
  padding: 0;
}

.logo-home{
    width: 15%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.body-nav-land {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background: linear-gradient(180deg ,rgb(242, 245, 56), rgb(240, 225, 88), rgb(207, 191, 48));
  font-size: 30px;
}

.action-home {
    margin-right: 25px;
    display: flex;  
}
li{
    margin-left: 3vw;
    list-style: none;
    font-weight: bolder;
}

li:hover{
    color: rgb(100, 94, 94);
    cursor: pointer;
}
h1 {
  cursor: pointer;
}
</style>