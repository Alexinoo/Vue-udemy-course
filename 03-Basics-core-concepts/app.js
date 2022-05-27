
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
    } ,

    // Methods : Takes in an object with user defined functions which aree callable to do something ; i.e either react to user events or perfoma calculations

    methods : {

        outputGoal : ()=>{

            const randomNumber = Math.random()

            if( randomNumber < 0.5 ){
                return 'Learn Vue !'
            }else{
                return 'Master Vue !'
            }
        }
    }

 
})

app.mount('#user-goal')