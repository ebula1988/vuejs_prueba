




<template>
  <div class="container">
    <Inner/>
   
  </div>
</template>



<script>

import Inner from '@/components/Inner.vue'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 
  components: {
    Inner
  }
}
</script>


