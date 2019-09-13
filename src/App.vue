<template>
<div>
<NavLanding></NavLanding>
<Home></Home>
<Login></Login>
<Register></Register>

</div>
</template>

<script>
import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import NavLanding from './components/NavLanding.vue'
export default {
    components:{
        Card, Header, Login, Register,Home, NavLanding
    }
}
</script>

<style>

</style>