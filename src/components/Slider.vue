<template>
  <div>
    
    <transition-group name="fade" tag="div" style="height:620px; width:360px">
      <div v-for="i in [currentIndex]" :key="`index${i}`" >
        <img class="slide-img" :src="currentImg"/>
      </div>
    </transition-group>
    <div style="width: 428px;
    display: flex;
    justify-content: space-between;
    margin: -340px 0 0 -34px;">
    <span class="prev" @click="prev">&#10094;</span>
    <span class="next" @click="next">&#10095;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"Slider",
  data() {
    return {
      images:[
        "/wego1.png",
        "/wego_home.png",
        "/wego_home2.png",
        "/wego_home3.png",
        "/wego_mypage.png",
        "/wego_order.png",
        "/wego_signup.png",
      ],
      timer:null,
      currentIndex:0
    }
  },
  mounted(){
       this.startSlide()
    }

  
  ,
  methods:{
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },

    next(){
      this.currentIndex +=1;
    },
    prev(){
      this.currentIndex -=1;
    }
  },
  computed:{
    currentImg(){
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.slide-img {
  height:600px;
  width:340px;
}

.prev {
  cursor: pointer;
  width: auto;
  padding: 4px 16px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 4px 0px 0px 4px;
  text-decoration: none;
  user-select: none;
}
.next {
  cursor: pointer;
  width: auto;
  padding: 4px 16px;
  color: grey;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {



}

.prev {

}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>