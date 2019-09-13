<template>
  <nav class="body-nav-land">
      <div class="logo-home">
          <h1>ME</h1>
          <i class="fas fa-tags"></i>
      </div>
      <div>
    <ul class="action-home">
      <li>Home</li>
      <li>Login</li>
      <li>Register</li>
    </ul>
      </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.logo-home{
    background: linear-gradient(180deg ,white, rgb(228, 225, 225), rgb(179, 177, 177));
    width: 15%;
    height: 10vh;
    display: flex;
    padding-left: 2%;
    justify-content: flex-start;
    align-items: center;
}

.body-nav-land {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
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
    color: rgb(100, 94, 94)
}
</style>