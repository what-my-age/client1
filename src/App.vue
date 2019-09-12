<template>
<div>
    <Login v-if="!isLogin"></Login>
<div v-if="isLogin">
<Navbar></Navbar>
<Header></Header>
<Card :foto="photos"></Card>
</div>

</div>
</template>

<script>
import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Card, Header, Login, Register, Navbar
    },
    data(){
        return {
            isLogin: true,
            photos:[{
                tags:['makan','minum'],
                image: 'https://storage.cloud.google.com/whatmyage/15682782403921568012582108539813_3926240088399_1983784621_n.jpg',
                title:'DIA',
                UserId: 'qeqweqweqeq'
            },{
                tags:['makan','minum'],
                image: 'https://storage.cloud.google.com/whatmyage/15682782403921568012582108539813_3926240088399_1983784621_n.jpg',
                title:'DIA',
                UserId: 'qeqweqweqeq'
            }]
        }
    }

}
</script>

<style>

</style>