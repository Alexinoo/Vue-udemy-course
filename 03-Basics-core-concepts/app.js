
const app = Vue.createApp({

    // Has to be data - Takes in a function that Must return an object NOT an Array/String/Number
    data : ()=>{

        return {

            courseGoal : 'Finish the course' ,
            vueLink: 'https://vuejs.org/'
         // Property courseGoal Can store anything ; [array] ,boolean(true) , string , number

         // courseGoal : string
         // courseGoal : integer
         // courseGoal : []
         // courseGoal : {}

        }
    }

 
})

app.mount('#user-goal')