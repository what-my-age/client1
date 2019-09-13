<template>
  <div>
    <div class="backgroundRegist">
      <div class="showRegist" v-if="showRegist">
        <div class="box">
          <h1>Register</h1>
          <form action class="formRegist" @submit.prevent="registMe">
            <label class="register">Name</label>
            <input type="text" class="register" v-model="name" />
            <label class="register">Email</label>
            <input type="text" class="register" v-model="email" />
            <label class="register">Password</label>
            <input type="password" class="register" v-model="password" />
            <button type="submit" class="btn btn-dark btn-lg register">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let baseUrl = "http://localhost:3000";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showRegist: true,
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registMe() {
      let name = this.name;
      let email = this.email;
      let password = this.password;
      Swal.fire({
        title: "Creating Your Account...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: baseUrl + "/user/register",
        data: {
          name,
          email,
          password
        }
      })
        .then(response => {
          Swal.close();
          Swal.fire("Success!", "Your Account is Created!", "success");
          this.name = "";
          this.email = "";
          this.password = "";
          this.$emit("doneRegister");
        })
        .catch(error => {
          let msg = error.response.data.message || "Fail to Register";
          Swal.fire("Error!", msg, "error");
          this.name = "";
          this.email = "";
          this.password = "";
        });
    }
  },
  created() {
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.backgroundRegist {
  background: url("https://psychcentral.com/news/u/2015/05/expressions-big-SS.jpg");
  background-size: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 100vw;
  min-height: 100vh;
}
.showRegist {
  min-width: 50vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    124deg,
    rgb(2, 119, 64),
    rgb(18, 228, 71),
    rgb(47, 230, 220)
  );
  background-size: 1800% 1800%;
  -webkit-animation: rainbow 1.5s ease infinite;
  -z-animation: rainbow 1.5s ease infinite;
  -o-animation: rainbow 1.5s ease infinite;
  animation: rainbow 1.5s ease infinite;
}
.formRegist {
  min-height: 24vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 64%;
  background: white;
  border-radius: 18px;
}
.box h1 {
  color: rgb(17, 12, 2);
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
  margin-bottom: 3%;
}
input.register {
  height: 30px;
  margin-bottom: 3%;
  font-size: 12pt;
  width: 44%;
}
button.register {
  margin-top: 10px;
  background: linear-gradient(
    90deg,
    green,
    rgb(81, 230, 81),
    rgb(136, 255, 0),
    rgb(6, 145, 6),
    green
  );
  background-size: 400%;
  border-style: inset;
  color: whitesmoke;
  font-size: 12pt;
  height: 6vh;
  width: 6vw;
  border-radius: 12px;
}
button.register:hover {
  animation: animate 8s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
label.register {
  font-size: 12pt;
  margin-top: 2vh;
  margin-bottom: 0.5vh;
}
@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
</style>