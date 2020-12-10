<template>
  <div class="container">
    <b-form  >

        
            <label class="float-left" >Name : </label>
            <b-form-input
                
                id="input-name"
                v-model="form.name"
                required
                placeholder="Enter name"
                 >
           </b-form-input>
           <br>
        
     

      
       <label class="float-left" >UserName : </label>
            <b-form-input
                id="input-username"
                v-model="form.username"
                required
                placeholder="Enter username"
                type="text" >
           </b-form-input>
           <br>
       

       
            
            <b-row class="mt-4" >
                <b-col cols="8" md="8" >
                   
                    <b-form-input 
                    id="input-password"
                    v-model="form.password"
                    require
                    type="password" 
                    placeholder="Enter password"
                     />
                </b-col>
        
                <b-col cols="4" md="4" >
                    
                    <a 
                    class= "btn btn-outline-success  " 
                    @click="generar()">Generar</a>
                    
                </b-col>
            </b-row>
           
     
        <br>
      

        <label class="float-left" >Site Url : </label>
            <b-form-input
                id="input-url"
                v-model="form.url"
                required
                placeholder="Enter site url"
                type="url" >
           </b-form-input>
           <br>
       
        <label class="float-left" >Fecha : </label>
            <b-form-input
                id="input-date"
                v-model="form.date"
                required
                placeholder="Fecha"
                type="date" >
           </b-form-input>
           <br>
      

      <b-button type="submit" variant="success" @click="enviarPost">Enviar</b-button>
      <b-button type="reset" variant="danger" @click="resetValores()">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        form: {
           
            name: '',
            username:'',
            password: '',
            url:'',
            date:''
         
        },
       
        
      }
    },
    methods: {
      enviarPost(e){
         
        
        e.preventDefault()
        const formulariojson = JSON.stringify(this.form)
       
        
         fetch('http://localhost:3000/passwords',{
          method: 'POST',
          headers: {
                'Content-Type': 'application/json'
          },
          body : formulariojson,
          


        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          
          
        }).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
              });
              

        
        
      },
      resetValores(){
          this.name=''
          this.username=''
          this.password=''
          this.url=''
          this.date=''

      }
    }
      
  }// export
</script>