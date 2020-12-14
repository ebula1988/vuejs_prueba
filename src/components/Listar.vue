


<template>
    <div>
        <div class="container" >
            <b-row class="mt-4" >
                <b-col cols="8" md="8" >
                    
                    <input 
                    id="search"
                    class="form-control "
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" />
                </b-col>
        
                <b-col cols="4" md="4" >
                    
                    <a 
                    id=btnSearch
                    @click="search()"
                    class= "btn btn-outline-success  " 
                    type="submit">
                    <img 
                    src="../assets/mas.png"/>
                    </a>
                    
                </b-col>
            </b-row>
      </div>
 
      <div class="container">
          <b-row  >
                <b-col cols="2" md="2" >
                </b-col>
           
                <b-col cols="10" md="4" >
                    Sort by date pp : 
                    <button class= "btn btn-outline-success my-6 my-sm-0 btn-sm " style="margin-right: 6px" type="submit" > asc</button>  
                    <button class= "btn btn-outline-success my-2 my-sm-0 btn-sm " type="submit"> desc</button>
                </b-col> 
         </b-row>
      </div>

       <ul class="list-group" >
           <div v-for="item of datosTodos" :key="item.id"
             class="alert alert-success" role="alert" id="listado"  >
                <b-row >
                    <b-col cols="2">
                        <div id="fotoPerfil">
                            <Avatar v-bind:username="item.name"
                              background-color="#339BFF"
                              >
  
                             </Avatar>

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
       

    </div>
</template>

<script>
//import { component } from 'vue/types/umd';
import {mapState, mapMutations,mapActions} from 'vuex';
//import Inner from '@/components/Inner.vue'
import Avatar from 'vue-avatar'

export default {
    
   name: 'Listar',
   computed: { // manej los state que estan en el store
       ...mapState(['datosTodos'])
     
   },
   methods:{
       ...mapMutations(['llenarDatosTodos']),
       ...mapActions(['obtenerDatosTodos']),
       search(){
         let search= document.getElementById('search');
         let listado= document.getElementById('listado');
    
        
         let texto = search.value.toLowerCase();
         
         for (let index of this.datosTodos ){
             let nombre = index.name.toLowerCase();
          
                if(nombre.indexOf(texto) !== -1){
                    listado.innerHTML += `<li>${index.nombre}</li> `
                    
              //   listado.innerHTML+= `
                // 
                 
                 //`
                 //console.log(nombre)
                 
            }
         }

       }
     
      
       },
    components:{
        Avatar
        
        },
    
    }
        
    
</script>


