<template>
<div style="margin-top:50px">
<div>안녕하세요 child component </div>
  <slot name="top"></slot>
  <slot name="center"></slot>
  <slot name="bottom"></slot>
</div>
  

</template>

<script>
export default {

}
</script>

<style>

</style>