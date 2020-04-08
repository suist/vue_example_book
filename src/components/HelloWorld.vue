<template>
<div>
  <div  @click="hello" style="cursor:pointer; display:block;">여기를 클릭해봐
  </div>
    <div>{{msg}}</div>
  <div @click="error= !error">에러 on/off</div>
  <div v-if="error">에러가 ON 되었습니다.</div>
   <input placeholder="금액을 입력해주세요" type="number" v-model="price">
  <div>입력 가격: {{price}}원</div>
  <div>부가세: {{vat}}</div>
  <div>총 지불할 금액: {{total}}</div>
  


  <div style="display:flex; justify-content:space-between; border-bottom:1px solid #3e8c75; background-color:#3e8c75; color:white; font-size:14px; font-weight:500;">
    <div>번호</div>
    <div>도시</div>
    <div>동작</div>
  </div>
  <div>
    <div v-for="(city,idx) in citis" :key="idx" style="display:flex; justify-content:space-between; align-items:center;padding:2px;border-bottom:1px solid #3e8c75">
      <div>{{idx}}</div>
      <div>{{city}}
        <div>{{newStyle}}</div>
        </div>
      <div style="background-color:#3e8c75; color:white; width:30px; padding:5px; cursor:pointer; border-radius:5px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      @click="selectCity(city)">선택</div>
    </div>
  </div>
  <div>
    <div><div>{{selected}}</div></div>
  </div>

  <div>
    <input v-model="searchCity" type="text" placeholder="Where do you wanna travel?">
    <ul>
      <li v-for="city in filteredCities" :key="city.id">{{city}}</li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },

  data() { 
    return {
      selected: "",
      error:false,
      newname:"n",
      price:'',
      searchCity:'',
      citis:[ '프랑스','이탈리아','독일'],
      travelList: ['usa','korea','japen','thailand','turkey','canada','saudi','toilet']
    }
    
  },

  methods: {
  
    hello() {
      const sayHello = function greeting(inVal) {
      alert(inVal +'님' + '안녕하세요')
      }
      sayHello("수경");

    //   const sayhi = (inVal) => {alert(inVal)}
    // sayhi("du")
    },
    selectCity(item) {
      this.selected = `선택된 도시 = ${item}`
      this.newname = 'n'
    }

  },

  computed: {

    foo() {
      return (bar) => {
        return bar +1
      }
    },
    vat() {
     
      return this.price/10
      
    },
    total() {
   
      return  parseFloat(this.price)+ this.vat
   
    },
    filteredCities() {
      return this.travelList.filter(item => item.match(this.searchCity))

    },
    newStyle() {
      if(this.selected === this.city){this.newname}
      return ''
    }
   
    
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
</style>
