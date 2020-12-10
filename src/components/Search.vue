<template>
    <div>
        <div class="container">
            <b-row class="mt-4" >
                <b-col cols="8" md="8" >
                    
                    <input class="form-control "  type="search" placeholder="Search" aria-label="Search" />
                </b-col>
        
                <b-col cols="4" md="4" >
                    
                    <a class= "btn btn-outline-success  " type="submit"><img src="../assets/mas.png"/></a>
                    
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
    </div>

</template>

<script>
export default {
    name: 'Search'
    
}
</script>




