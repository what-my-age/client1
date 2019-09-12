<template>
        <div class="album py-5 bg-light">        
          <div class="container">
            <div class="row">
              <!-- This is mangacards -->
              <div  class="col-md-4" v-for="(p,i) in foto" :key="i">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" style="width: 100%;
                  height: 15vw;
                  object-fit: cover;object-position: left top;" :src="p.image">
                  <div  class="card-body">
                    <p class="card-text" >{{p.title}}</p>
                        <vs-chip v-for="(l,i) in p.tags" :key="i">
                            {{l}}
                        </vs-chip>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Remove</button>
                            <button v-on:click.prevent="shareFb(p.image)" data-js="facebook-share" class="btn" id="shareBtn"><i class="fab fa-facebook-f"></i></button>
                            <button v-on:click.prevent="shareTwitter(p.image)" data-js="twitter-share" class="btn" id="shareBtn"><i class="fab fa-twitter"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
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

</style>