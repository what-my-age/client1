<template>
  <div>
    <div class="wallpaper">
      <div class="slider">
        <div class="rectangle">
          <div class="home">
          <h1 class="product"> Me <br> Tag <br>Tag!</h1>
          </div>
        <div class="triangle">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.home{
  position: absolute;
  margin-top: -40px; 
  min-width: 100vw;
  color: white;
  font-size: 45px; 
  margin-left: 45px; 
}

.triangle h1 {
  text-align: right;
  top: 80px;
  left: -47px;
  position: relative;
  width: 93px;
  height: 93px;
  margin: 0px;
  color: whitesmoke;
}

.triangle{
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 0;
height: 0;
border-left: 600px solid black;
border-bottom: 600px solid transparent; 
}
.wallpaper {
  height: 100vh;
  width: 100vw;
  background: black;
}
.slider {
  width: 100vw;
  height: 100vh;
  background: url("https://free4kwallpapers.com/uploads/originals/2019/08/02/keanu-reeves-wallpaper.jpg");
  background-size: 100vw 100vh;
  animation: slide 14s infinite;
}
@keyframes slide {
  25% {
    background: url("https://www.free-largeimages.com/wp-content/uploads/2019/05/k938423409234.jpg");
    background-size: 100vw 100vh;
  }
  50% {
    background: url("https://cdn.wallpapersafari.com/68/50/xXPAh0.jpg");
    background-size: 100vw 100vh;
  }
  75% {
    background: url("http://eskipaper.com/images/emma-watson-14.jpg");
    background-size: 100vw 100vh;
  }
  100% {
    background: url("https://free4kwallpapers.com/uploads/originals/2019/08/02/keanu-reeves-wallpaper.jpg");
    background-size: 100vw 100vh;
  }
}
</style>