
// We use a global Vue Object and call createApp()

//createApp({}) - takes a JS object to configure this Vue app

// Configure means

// 1.   setting up which kind of data we will use in this app

            // Holds a function that MUST RETURN AN OBJECT {}
            //IN THIS OBJECT WE MUST DEFINE THE DATA THAT VUE MUST BE AWARE OF
            //Data in key : value property
            //Bind data with our input using v-model (A special HTML Attribute) - Sets a connection with input value and the  data.enteredValue


// 2.  setting up which methods/functions  which will be Callable from inside the HTML code

            //addGoal()- Gets what is currently entered and adds to Goals array
            //Bind addGoal() with button so that it is executed once the user clicks it e.g. v-on:click="addGoal" 



            // Adds v-for="goal in goals" 
            // e.g <li  v-for="goal in goals">{{ goal }}</li>

// Call mount('#app');- to tell Vue to know which part of the HTML should be controlled by the Vue App



Vue.createApp({
    data : ()=>{
        return {
            goals : [],
            enteredValue : '',
        }
    },

    methods : {
        addGoal (){
            this.goals.push(this.enteredValue);
            this.enteredValue ='';
        }
    }
    
}).mount('#app'); 




