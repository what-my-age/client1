<template>
  <div class="box-card">
    <div class="card" v-for="(p,i) in foto" :key="i">
      <img :src="p.image" alt="Avatar" style="width:100%; height : 300px">

      <div class="container">
        <div>
          <h4><b>Caption</b></h4>
          <h4>Age</h4>
          <h4>Gender</h4>
          <vs-chip v-for="(l,i) in p.tags" :key="i">
            {{l}}
          </vs-chip>
        </div>

        <div class="btn">
          <button>Remove</button>
          <button v-on:click.prevent="shareFb(p.image)" data-js="facebook-share" class="btn" id="shareBtn"><i class="fab fa-facebook-f"></i></button>
          <button v-on:click.prevent="shareTwitter(p.image)" data-js="twitter-share" class="btn" id="shareBtn"><i class="fab fa-twitter"></i></button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['foto'],
  methods : {
            shareFb(url) {
              let facebookShare = document.querySelector('[data-js="facebook-share"]');
              let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-popup', 'height=450,width=650');
              if(facebookWindow.focus) { facebookWindow.focus(); }
              return false;
            },
            shareTwitter(url) {
              let twitterWindow = window.open('https://twitter.com/share?url=' + url, 'twitter-popup', 'height=450,width=650');
              if(twitterWindow.focus) { twitterWindow.focus(); }
              return false;
              
            },
  }
}
</script>

<style>
  .box-card{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px; 
    /* background-color: #2196F3; */
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    justify-content: center;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 350px;
    height: 600px;;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .container {
    padding: 2px 16px;
    display: flex;
    flex-direction: column;
    height: 280px;
    justify-content: space-between
  }

  .container h4{
    margin: 10px 
  }

  .btn{
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
  }
</style>