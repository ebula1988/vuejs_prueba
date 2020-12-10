<template>
  <div class="container">
    <Search/>
    <Listar/>
 
   
   
  </div>
</template>

<script>
import Listar from '../components/Listar.vue'
// @ is an alias to /src


import Search from '../components/Search.vue'




export default {
  name: 'Home',
  components: {
 
  
   Search,
    Listar
  }
}
</script>
