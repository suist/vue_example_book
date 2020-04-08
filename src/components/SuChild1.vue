<template>
  <div>
    <slot :countryData = "countryData"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      countryData:['Korea','Japan','Saudi','Egypt','USA'],
      suist:4,
    }
  }

}
</script>

<style>

</style>