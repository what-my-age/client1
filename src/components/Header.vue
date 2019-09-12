<template>
    <header>
        <h1>ME TAG TAG</h1>
        <p>Create your automate tags</p>
        <div class="input">
            <input type="text" placeholder="insert title">
            <input type="file">
            <input type="submit" value="Upload">
        </div>
    </header>
</template>

<script>
export default {
data : function(){
    return {
       
    }
}
}
</script>

<style>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 300px;
        background-color: #F1DA08;
    }

    .input{
        display: flex;
        justify-content: space-around;
        align-content: center;
        height: 100px;
        /* background-color: #aaa; */
        width: 60%
    }

    input[type="submit"]{
        width: 100px;
        height: 40px;
        border-radius: 20px;
        font-size: 20px;
        margin-bottom: 0;
    }

    input[type="text"]{
        width: 200px;
        height: 40px;
        border-radius: 10px;
        margin-bottom: 0;

    }

    input[type="file"]{
        width: 200px;
        margin-bottom: 0;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center
    }
</style>