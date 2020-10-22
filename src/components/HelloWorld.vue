<template>
<div>
  <div style="display:flex; justify-content:center; margin:50px">
    <div>
      <img src="../assets/IMAG0240.jpg" style="width:20%;border-radius:50%" >
      <div style="display:flex; justify-content:center;margin:8px">
        <img @click="linkProfile1" class="link-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAACCUlEQVRIidWWPWsUURSGnzOzJBibWPhR+ANE8QMrCwt3N+5ELSwEC7WwEJGwNjaCZuO4G8TaCLKFlQTyB5Sd6GTTRLETEQuRYMRCBTHgR5bozrHZDbM3sztDZlP4NjPznuE855w7d7hCS/nZ8gVVuQrsB7aQTivAa0GmfGd8GkAA8t5kVdHLKZNHSqFad0pXpNXJo82ArMFUz1uqUtxMCICIFC3ggOG/FLgEjKH6rk+sgxk6F/5rMNAcmc+6PwFGnrqPg8BeBOyUoCHLMN63IQDPjrsfgW8pIQCYoMPZWnlf+yHn3T4B7OgHSHJeRQ3vl6A1hSGQAunHBkAmwtuqyJnkKeQD6BLoTpA9SUGrc05pMGzkvMoflOW50dJ2w18SDS76o7fqbS//5M5e7OZDhSMmyFwjiShGkfV+gHUqDAHwT95422gMFEAW40CJNe/cfHOs7g4XPLfjY1k4ff0HqnfjQNEdRfjZWvmstWp//ov9JT87ea0jqd304kCJJSJlYBBAVcfCsaMLfAKCXqDEHQG7Q/e7wgHXdQOg0QsUpSiI6cfutSQgc0NvSElG18vfMChK/19HKzEJgz6Afkveq7ww/k3fjZeGW9flCL9dgMbEn2dA7oOGQdu6VNXNp5Wwa1zQKct3xqcVqj2SpNUD35mYWZt9tlY+JyJF4BD9OUC+EvSe70zMAPwDxRGfRXb4AMAAAAAASUVORK5CYII=">
<img @click="linkProfile" style="margin-left:8px" class="link-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAADJklEQVRIieWVQWhcVRSGv/PeM7bSumhDoFFR6KZa0YUVMVE7mUlmSksVhI66ke4KLtyJ0mTipVMF3YmoC90JRjIrsVRmzMwbtLWmGCiCXRSxVKIxNqkEIa2Zufe4mMzkzZupneBOz+qec/5zv3su570L/zWTXoWJ0PR7a8EDAvc4dSrizbu++sXqiFn69yBVSZXeyCr6EjAM+DGFBc6o6vthJldARDcNSp7O7yZgCuXRXk4MnPd8+8LMqPmpZ9BI6cSwqHwG7OwR0rRlkKcrmYlvbglKns7vxmc2AqkDQQ+Qhk5Z8gL7WLwzr02qKgRMRSCLrs9uBxkGvgccwhWBC8B8o0bKnqcP1aw/uJ7vd9b/BNW2JtqcVPHkc4p+upHVi5X05F6ARGi2+bbv9vLo8eVmeqxkBq/t2HV1bt+xGqqSLJ1cBbY0aiVbSU8UuoKSxfxXwJOR0F8rOwe2z+07VvvnW4PEF+Y+z/Mvty5HqIbp3EjTb11dIjT9wFCs/sLhUwv2VhCA2trWZeDnVgfKE6mZN1vD1AIFN/wHiX8nKi8bY1wvoLPPvPqniI5HQoFat7cD5HzZFatdrRyYON8LpGm27qptAeGuDpBobALhtkRoehnrjYLA39rGiewZ2dz+Hq+TuqQ2A3JwsB2kix2gQHWuoY0InfdOumgGeoGMfpm/X5XJKPdGPZhr7RUVJ4v5s3RO3q+Ivu5JX2Fm7LWVOCBdNANWgqOqOg7cGUl9XcnknuroqEHVdyPuB8AiMIjKh87VrqaK+bebySPT036ymP+4jr+gqm/FIAjyXtRvA+1Y2VMAzq27Q56nY8Av6/7CHWvWNLWFbNa6un0FuB7vEjhXTo9P3xRUyGat+P5R4BrwsEUHK5nc3QFbtlUyuXs/P2xWo/rqIfObwqkYZNmpfTH+NsVHmvLo8UuKHgT+EOd9lCqeeL7G9T3rf45OU72ysWZJ0UPVA+bHuKwDBBBmJmcDeERgXpEpQb6TNe/ZblrxGidX5YzDPh5mJme76bqCAEqZ3OVyemJI4AhI6Il0f42d/IBIdv+3dn+3TjZtxpibHur/aX8DdugrlFPY9nwAAAAASUVORK5CYII=">
      </div>
      <div style="font-weight:500">Su-kyung Oh(SU)</div>
        <div style="font-weight:500">Developer</div>
        <div style="font-weight:500">Seoul, Korea</div>
    </div>
  </div>

  <div style="display:flex; max-width:960px; justify-content:center; margin:80px auto">
    <div class="box">
        <div class="first-line">
          <i class="material-icons icon-style" >dvr</i>
            <div class="list-title">Frontend</div>
        </div>
        <div class="second-lines" v-for="list in frontData" :key="list.id">
          <i class="material-icons check-icon" style="color: #42B983">check</i>
          <div style="font-weight:500">{{list}}</div>
        </div>

    </div>

    <div class="box">

        <div class="first-line">
          <i class="material-icons icon-style" >storage</i>
            <div class="list-title">Backend</div>
        </div>
        <div class="second-lines" v-for="list in backendData" :key="list.id">
          <i class="material-icons check-icon" style="color: #42B983">check</i>
          <div style="font-weight:500">{{list}}</div>
        </div>
    </div>


      <div class="box" >
        <div class="first-line">
          <i class="material-icons icon-style" >web</i>
            <div class="list-title">Etc.</div>
        </div>
        <div class="second-lines" v-for="list in ect" :key="list.id">
          <i class="material-icons check-icon" style="color: #42B983">check</i>
          <div style="font-weight:500">{{list}}</div>
        </div>

      </div>
    </div>

    <div style="border-top:1px solid #eaeaea; width:960px; margin:100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <div style="width:600px ;height:600px">
          <div class="title">Wego 맞춤형 트레이너 추천</div>
          <div style="display:flex;justify-content:center">
            <div class="desc"> Frontend / Vue  / vuex  </div>
            
          </div>
          <div class="desc-group">
            <div>project : 2020.03 ~ 진행중</div>
            <div>- filter 적용된 상태 관리 vuex </div>
            <div>- 폼 관련 Dynamic component 사용</div>
            <div>- 회원가입 validation </div>
            <div>- axios http통신 </div>
            <div>- 비동기 검색 페이지 </div>
            <div>- 일정 선택 캘린더 제작</div>
          </div>
          <sweet-modal modal-theme="dark" overlay-theme="dark" ref="modal1">
            Wego 맞춤형 트레이너 추천
            <br /><br />

            <iframe width="560" height="315" src="https://ondemand.launchpack.co.kr/home"></iframe>
          </sweet-modal>

        </div>
      <div style="position:relative;right-200px; width:360px">
        <slider></slider>
      </div>
    </div>
     <div style="border-top:1px solid #eaeaea; width:960px; margin: 100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <div class="link-icon" style="width:460px; background-image:url(/code.png); background-size:cover;background-repeat:no-repeat;" @click="linkProject1" ></div>
      <div style="width:600px ;height:600px">
          <div class="title">회원가입,로그인,수정,탈퇴 게시글 작성 API</div>
           <div style="display:flex;justify-content:center">
            <div class="desc"> Backend /Mongoose /Express /Heroku </div>
            <div class="material-icons link-icon" style="color: #42B983; margin:0 8px" @click="linkProject1">language</div>
           </div>
          <div class="desc-group">
            <div >project : 2020.3 ~</div>
            <div>- Auth -> JWT </div>
            <div>- 파일 추가 </div>
            <div>- Mongoose</div>
            <div>- Heroku -> api 배포</div>
            <div>- send/grid -> 회원가입/탈퇴  email 보내기</div>
          </div>

        </div>
   
      </div>

          <div style="border-top:1px solid #eaeaea; width:960px; margin: 100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <img src="../assets/launchpack_pc.png" class="link-icon" style="width:460px" @click="linkLaunchPack"/>
      <div style="width:500px ;height:300px">
          <div class="title">Launchpack 공식 사이트 리뉴얼</div>
          <div style="display:flex;justify-content:center">
            <div class="desc"> Frontend / Vue </div>
            <div class="material-icons link-icon" style="color: #42B983; margin:0 8px" @click="linkLaunchPack">language</div>
          </div>
          <div  class="desc-group">
            <div>project : 2020.03</div>
            <div>- CSS / HTML </div>
            <div>- Responsive Web </div>
            <div>- Vue.js </div>
          </div>

        </div>
   
      </div>

            <div style="border-top:1px solid #eaeaea; width:960px; margin: 100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <img src="../assets/onm.png" class="link-icon" style="width:460px" @click="linkLaunchPack1"/>
      <div style="width:500px ;height:300px">
          <div class="title">특허사무소 온음 사이트 리뉴얼</div>
          <div style="display:flex;justify-content:center">
            <div class="desc"> Web Publishing/ cafe24  </div>
            <div class="material-icons link-icon" style="color: #42B983; margin:0 8px" @click="linkLaunchPack1">language</div>
          </div>
          <div class="desc-group">
            <div>project : 2020.03</div>
            <div>- 모바일 / PC 퍼블리싱 </div>

          </div>

        </div>
   
      </div>

    <div style="border-top:1px solid #eaeaea; width:960px; margin: 100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <img src="../assets/kgb.png" class="link-icon" style="width:360px; margin:0 50px" @click="linkLaunchPack2" />
      <div style="width:600px ;height:600px">
          <div class="title">KGBF 유류 견적 역경매 서비스</div>
           <div style="display:flex;justify-content:center">
            <div class="desc"> Frontend /vue / vuex  </div>
            <div class="material-icons link-icon" style="color: #42B983; margin:0 8px" @click="linkLaunchPack2">language</div>
           </div>
          <div class="desc-group">
            <div >project : 2020.02</div>
            <div>- 등급 별 접근 권한 유효성</div>
            <div>- 입찰,경매 시스템 상태에 따른 필터 제작</div>
            <div> </div>
          </div>

        </div>
   
      </div>
       <div style="border-top:1px solid #eaeaea; width:960px; margin: 100px auto;"></div>
    <div style="width: 960px; margin:50px auto; display:flex">
      <div class="link-icon" style="width:460px; background-image:url(/stock.png); background-size:cover;background-repeat:no-repeat;" @click="linkProject" ></div>
      <div style="width:600px ;height:600px">
          <div class="title">주식거래 연습 page</div>
           <div style="display:flex;justify-content:center">
            <div class="desc"> Vue /aws s3 / firebase database  </div>
            <div class="material-icons link-icon" style="color: #42B983; margin:0 8px" @click="linkProject">language</div>
           </div>
          <div class="desc-group">
            <div >project : 2019.12</div>
            <div>- 등급 별 접근 권한 유효성</div>
            <div>- 입찰,경매 시스템 상태에 따른 필터 제작</div>
            <div>- save & load -> firebase DB  </div>
            <div>- storage -> AWS S3  </div>
          </div>

        </div>
   
      </div>
     




</div>

</template>

<script>
import Slider from './Slider'
export default {
  name: 'HelloWorld',
  components:{
    Slider
  },
  props: {
  },

  data() { 
    return {
      frontData:[
        'Vue / Vuex / VueRouter',
        'Javascript',
        'HTML / CSS (Responsive Web)',
        'Stylus'
      ],
      backendData:[
        'MongoDB',
        'Express',
        'JWT',
      ],
      ect:[
        'Git',
        'Jira',
        'Heroku',
        'AWS S3',
        'Firebase'
      ]
        
    
    
    }
    
  },

  methods: {
    linkLaunchPack(){
      window.open("http://pg.launchpack.co.kr/", "_blank")
    },
    linkLaunchPack1(){
      window.open("https://www.omipc.com/", "_blank")
    },
    linkLaunchPack2(){
      window.open("https://kgbf.launchpack.co.kr/home", "_blank")
    },
    linkProfile(){
      window.open("https://github.com/suist","_blank")
    },
    linkProfile1(){
      window.open("https://www.linkedin.com/in/sukyung-oh-622341157","_blank")
    },
    linkProject(){
      window.open("http://su-stock.s3-website.ap-northeast-2.amazonaws.com/","_blank")
    },
    linkProject1(){
      window.open("https://github.com/suist/udemyNode/tree/master/9-mongoose/src","_blank")
    }

  },

  computed: {


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {

}
li {

}
a {
  color: #42b983;
}
.first-line{
  display:flex;
  justify-content: center;
  align-items:center;
  margin:8px 0 ;
}
.second-lines{
  display:flex;
  line-height: 30px;
}
.box{

   width: 100%;
      height: 212px;
      border: 1px solid #efefef;
      padding: 16px;
      border-radius: 24px;
      margin:12px;
          box-shadow: -1px 0px 20px 0px #eceaea;


}

.icon-style{
background-color: rgb(216, 236, 207);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            font-size: 28px;
            line-height: 44px;
            margin-right:8px;
            color: #42B983;
}

.check-icon{
  margin-right:8px
}

.title{
  font-size:24px;
  font-weight: 600;
  padding:8px

}
.desc{
  font-size:16px;
  font-weight:500;

}
.desc-group{
  text-align:left ; padding: 40px 100px;     font-size: 18px; font-weight: 500;
    line-height: 42px; color:#504f4f
}
.link-icon{
  cursor: pointer;
}
.list-title{
  font-size:18px;
  font-weight:700;
}
</style>
