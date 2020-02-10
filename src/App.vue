<template>
  <div id="app" style="background:#FDF8F2;">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container">
   
        
        <div class="col-lg-12">
  
            <div class="row">
                <div class="col-lg-1 mt-3" style="background:#FDF8F2;font-size:18px;font-weight:bold;top:50px;right:70px;">LOGO</div>
                <div class="col-lg-2 mt-3" style="background:#FDF8F2;font-size:18px;font-weight:bold;top:30px;right:30px;">
                  HELLO ,
                  <div class="col-lg-12"> 
                    i am fake
                  </div>

                </div>
                <div class="col-lg-8"></div>
                <div class="col-lg-1 mt-3">&bull;</div>

            </div>


        </div>
        <router-view/>

        <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-11"></div>
                  <div class="col-lg-1" style="font-size:16px;font-weight:bold;"> SOS! </div>
              </div>
        </div>

        <div class="col-lg-12 mt-2 " style="height:100px;">
          <img src="https://uppic.cc/d/6Rz6" alt="" style="width:20%;">
        </div>
</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
