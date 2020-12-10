<template>
    <div class="container">
        <div id="conten_inner">
            
            
            

        </div>

        

    </div>
        
  
</template>

<script>
export default {
    name: 'Inner',
    methods: {
        probarInner(){
            //const letra = name.split("")
            const div_inner = document.getElementById('conten_inner')
             div_inner.innerHTML='hola soy la funcion probar'
            

        }
       
 },
 mounted(){
     this.probarInner()

 },
  props: ['name']
}
</script>

