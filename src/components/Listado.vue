


<template>
    <div>
       <ul class="list-group">
           <div v-for="item of datosTodos" :key="item.id"
             class="alert alert-success" role="alert">
                <b-row>
                    <b-col cols="2">
                        <div id="fotoPerfil">
                           
                            <h3>sin foto</h3>
                            {{probar()}}

                        </div>
                    </b-col>

                    <b-col cols="4">
                        
                        <div>
                            
                            <strong> {{item.name}}</strong>  <br>
                                     {{item.username}}
                                     {{item.logo}}                            
                        </div>
                    </b-col>

                    <b-col cols="6">
                         .....
                    </b-col>
                </b-row>
            </div> 
       </ul>
       <button @click="obtenerDatosTodos" >cargar fetch consumiendo api</button>
       

    </div>
</template>

<script>
//import { component } from 'vue/types/umd';
import {mapState, mapMutations,mapActions} from 'vuex';
import Inner from '@/components/Inner.vue'

export default {
    
   name: 'Listado',
   computed: { // manej los state que estan en el store
       ...mapState(['datosTodos'])
     
   },
   methods:{
       ...mapMutations(['llenarDatosTodos']),
       ...mapActions(['obtenerDatosTodos']),
      probar(){
          console.log("recprrido probado")
       },
    components:{
        Inner
        },
    
    }
        }
    
</script>


