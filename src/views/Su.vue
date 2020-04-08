<template>
  <div>
    this is su's page
    {{filterSu}}
    <div @click="clickSu">click me</div>
    <input v-model="inputMsg">
    <div>{{inputMsg}}</div>
    <div @click="$refs.suist.open()" style="border:1px solid grey">click this button</div>
    <sweet-modal ref="suist">hello</sweet-modal>
    <su-child>
      <div slot="bottom">hello</div>
      <div slot="top">This is top slot</div>
    </su-child>
    <su-child1>
      <template slot-scope="{countryData}">
        <div>{{countryData}}</div>
        <div v-for="item in countryData" :key="item.id" style="display:flex">
          <div>{{item}}</div>
          <div>hi</div>
        </div>
      </template>
    </su-child1>
    

  </div>
</template>

<script>
import SuChild from '../components/SuChild';
import SuChild1 from '../components/SuChild1';
export default {
  name:'Su',
  components:{
    SuChild,
    SuChild1
  },
  data(){
    return {
      suist : ['love','truth','passion','hope'],
      inputt : 'love',
      inputMsg:''
    }
  },

  methods:{
    clickSu() {
      if(this.$router.path === '/su'){
        this.$forceUpdate()
      }else{      this.$router.replace('/su')}

    }
    
  },

  created:{

  },

  computed:{
//     filterBySize() {
//   return this.items.filter((item) => {
//     return item.size === this.size;
//   });
// },
// filterBy() {
//   return this.dataaa.filter((item) => {
//     return item.size === this.size ;
//   });
// },
// filterB() {
//   return this.dataaa.filter(item => itme.size === this.size)
// },

filterSu() {
  return this.suist.filter(su => su === this.inputt).toString()
}

  }



}
</script>

<style>

</style>