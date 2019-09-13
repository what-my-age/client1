<template>
    <nav>
        <h3 style="color: #F1DA08">WMA <i class="fas fa-tags"></i></h3>
        <button @click="getSignout"><i class="fas fa-sign-out-alt"></i></button>
    </nav>
</template>

<script>
import Swal from 'sweetalert2'
    export default {
        methods : {
            getSignout(){
                localStorage.removeItem('token')
                Swal.fire("Success!","Logout Success!", "success");
                this.$emit('letSignouts')
            }
        }
    }
</script>

<style>
    nav{
        padding: 3px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
    }

    button{
        cursor: pointer;
    }


</style>