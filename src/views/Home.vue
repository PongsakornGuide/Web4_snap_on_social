<template>
 <div class="mt-1" id="comment" style="padding:20px;">

<!-- <div v-for="(card,index) in cards" :key="index">
    <showImage :cardprop="card" :styleClass="card.styleClass"/>
  </div> -->

<!-- <div class="col-lg-12" style="font-size:32px;font-weight:bold;">side find your image.</div> -->
    <p style="font-size:20px;font-weight:bold;">Slider find your image.</p>
        <div class="row">
           <!-- <div class="message col-lg-3 col-sm-3" v-for="(message, index) in usersOrder " :key="index" style="padding: 20px;"> 
                   <v-lazy-image :src="`https://firebasestorage.googleapis.com/v0/b/vuetest-d38df.appspot.com/o/${message.imageUser}?alt=media`" class="card-img-top"/>
                <div class="text-center">
                       <img :src="getQr(message.imageUser)" class="qr-code img-thumbnail img-responsive" style="border-radius: 15px !important;"> 
                </div>
                
          </div> -->
            <div class="col-lg-3 col-sm-12" v-for="(message, index) in usersOrder " :key="index" style="padding:5px;">
                              <div class="wrapper-hover">
                                  <div class="card mt-2 mb-2">
                                      <v-lazy-image :src="`https://firebasestorage.googleapis.com/v0/b/vuetest-d38df.appspot.com/o/${message.imageUser}?alt=media`" src-placeholder="`https://firebasestorage.googleapis.com/v0/b/vuetest-d38df.appspot.com/o/${message.imageUser}?alt=media`" alt="img" class="card-img-top" style="width:100%;"/>
                                        
                                        <div class="overlay">


                                          
                                              <button on:click="deleteEvent(index)" style="float: right;background:black;color:white;border:none;border-radius: 50px;font-size:14px;margin-right:5px;margin-top:5px;">X</button>
                                          <div class="text">
                                            <h5 class="text-center" style="font-weight:bold;font-size:18px;">your face <br>
                                              here !<br>
                                              
                             
                                              
                                            </h5>
                                                  <img :src="getQr(message.imageUser)" class="qr-code img-thumbnail img-responsive" style="border-radius: 15px !important;"> 
                                              <h5 class="text-center" >
                                              
                                                <br>
                                              <span class="mt-3" style="font-size:10px;">  S OOO FÅKE OOO S !</span>
                                              </h5>
                                          </div>
                                        </div>
                                        <div class="card-body tab-yellow">
                                          <p class="card-text" >S OOO FÅKE OOO S !</p>
                                        </div>
                                  </div>
                              </div>
              </div>
      </div>    
  </div> 
</template>

<style>
 @import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
/* body{
    background-image: url(img/bg.jpg);
} */
.gallery{
    width: 100%;

    height: 100vh;
}
a {outline : none;}
.wrapper-hover:focus {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFEE00;
  overflow: hidden;
  width: 100%;
  height: 0;
  cursor: pointer;
  transition: .5s ease;
  transition-delay:2.2s ;
  border-radius: 5px;
}

.wrapper-hover:hover .overlay {
  height: 100%;
  transition: .5s ease;

}
.tab-yellow{
  background-color: #FFEE00;
}
.text {
  color: #0A0A0A;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  
}
.fas{
  color: #000000;
  font-size: 24px;
}
.carousel-control-next, .carousel-control-prev{
  width: 5% !important;
  height: 15% ;
  margin-top: -80px;
  color: #fff;
  text-align: center;
  opacity: .5;
  /* border: 2px solid red; */
  transition: opacity .15s ease;
}
</style>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script>
// @ is an alias to /src

import {userRef} from '@/firebaseConfig';
import VLazyImage from "v-lazy-image";
import showImage from '@/components/showImage';
import _ from 'lodash';


export default {
  data(){
    return{
      cards:[
        {title:'arm',image:'https://picsum.photos/id/237/536/354',link:'//google.com',styleClass:'bg-dark'},
        {title:'xx',image:'https://picsum.photos/id/137/536/354'}
      ]
    }
  },
  name: 'Home',
  computed: {
      usersOrder(){
        return _.orderBy(this.users,'.key','desc')
      }
  },
   components: {
    VLazyImage,
    // showImage
  },

   components: {
    VLazyImage
  },
  firebase: {
     users: userRef
  },
   methods: {
        convertImage(img){
            return `https://firebasestorage.googleapis.com/v0/b/vuetest-d38df.appspot.com/o/${img}?alt=media`
        },
          getQr(image_url){
            return encodeURI(`https://api.qrserver.com/v1/create-qr-code/?data=${this.convertImage(image_url)}`)
        },
      
        // deleteEvent(index) {
        //     this.$delete(this.imageUser,index);
        // },
   }

}
</script>
