<template>
  <header>
    <h1>What's My Age?</h1>
    <p>Analyze Your Mature Age</p>
    <form enctype="multipart/form-data" @submit.prevent="submitForm">
      <div class="input">
        <input type="file" ref="file" v-on:change="handlefileupload($event)" />
        <input type="submit" value="Upload" />
      </div>
    </form>
  </header>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: function() {
    return {};
  },
  methods: {
    handlefileupload() {
      let file = event.target.files || event.dataTransfer.files;
      this.image = file[0];
    },
    submitForm() {
      let token = localStorage.getItem("token");
      let formData = new FormData();
      formData.set("image", this.image);
      Swal.fire({
        title: "Guessing your Photo...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: "http://localhost:3000/image",
        headers: {
          token
        },
        data: formData
      })
        .then(data => {
        Swal.close()
          let response = data.data
          let age = response.data1.age
          let gender = response.data1.gender
          this.$emit("uploadFile", response);
          Swal.fire(
            "Success",
            `Your age is ${age}, Your Gender is ${gender}`,
            "success"
          );
        })
        .catch(error => {
          let message =
            (error.response.data && error.response.data.message) ||
            "Failed to Upload!";
          Swal.fire("Error!", message, "error");
        });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-color: #f1da08;
}

h1 {
  margin: 10px;
}

p {
  margin-bottom: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100px;
  width: 100%;
}

input[type="file"]{
	width: 100%;
    margin-bottom: 10px;
    height: 40px;
    border: 3px solid black;
    padding: 10px;
    border-radius: 20px;
}


input[type="submit"]{
	width: 500px;
	height: 40px;
	border: 3px solid black;
	border-radius: 20px;
	font-size: 20px;
	margin-bottom: 0;
	background-color: transparent;
	cursor: pointer;
}

input[type="password"], input[type="text"]{
  border: 3px solid black;
  background-color: transparent;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  /* padding-left: 20px; */
}

input[type="text"]::placeholder {
  margin-left: 20px;
}


</style>