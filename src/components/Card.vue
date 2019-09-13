<template>
  <div class="box-card">
    <div class="card" v-for="(p,i) in foto" :key="i">
      <img :src="p.image" alt="Avatar" style="width:100%; height : 300px" />

      <div class="container">
        <div>
          <h4>
            <b>"{{p.captions}}"</b>
          </h4>
          <h4>Age: {{p.age}}</h4>
          <h4>Gender: {{p.gender}}</h4>
          <vs-chip v-for="(l,i) in p.tags" :key="i">{{l}}</vs-chip>
        </div>

        <div class="btn">
          <button @click="removeMe(p._id)">Remove</button>
          <button
            v-on:click.prevent="shareFb(p.image)"
            data-js="facebook-share"
            class="btn"
            id="shareBtn"
          >
            <i class="fab fa-facebook-f"></i>
          </button>
          <button
            v-on:click.prevent="shareTwitter(p.image)"
            data-js="twitter-share"
            class="btn"
            id="shareBtn"
          >
            <i class="fab fa-twitter"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  props: ["foto"],
  methods: {
    shareFb(url) {
      let facebookShare = document.querySelector('[data-js="facebook-share"]');
      let facebookWindow = window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "facebook-popup",
        "height=450,width=650"
      );
      if (facebookWindow.focus) {
        facebookWindow.focus();
      }
      return false;
    },
    shareTwitter(url) {
      let twitterWindow = window.open(
        "https://twitter.com/share?url=" + url,
        "twitter-popup",
        "height=450,width=650"
      );
      if (twitterWindow.focus) {
        twitterWindow.focus();
      }
      return false;
    },
    removeMe(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          let token = localStorage.getItem("token");
          Swal.fire({
            title: "Deleting your Photo...",
            allowOutsideClick: () => !Swal.isLoading()
          });
          Swal.showLoading();
          axios({
            url: `http://localhost:3000/image/${id}`,
            method: "DELETE",
            headers: {
              token
            }
          })
            .then(({ data }) => {
              Swal.close();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.$emit("removeDong");
            })
            .catch(error => {
              Swal.fire("Error!", error.response.data.message, "error");
            });
        }
      });
    }
  }
};
</script>

<style>
.box-card {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  width: 1130px;
  padding-top: 10px;
  margin: 0 auto;
  justify-content: flex-start;
}

.card {
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 350px;
  height: 600px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(250, 250, 250, 0.2);
}

.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
}

.container h4 {
  margin: 10px;
}

.btn {
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
}
</style>