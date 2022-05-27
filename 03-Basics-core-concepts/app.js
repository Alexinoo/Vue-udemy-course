
const app = Vue.createApp({

    // Has to be data - Takes in a function that Must return an object NOT an Array/String/Number
    data (){

        return {

            courseGoal : 'Code Along',
            courseGoalA : 'Finish the course and learn Vuex' ,
            courseGoalB : 'Master Vue and build amazing Apps' ,
            vueLink: 'https://vuejs.org/'
         // Property courseGoal Can store anything ; [array] ,boolean(true) , string , number

         // courseGoal : string
         // courseGoal : integer
         // courseGoal : []
         // courseGoal : {}

        }
    } ,

    // Methods : Takes in an object with user defined functions which are callable to do something ; i.e either react to user events or perfom calculations

    methods : {

        outputGoal(){

            const randomNumber = Math.random();

            if( randomNumber < 0.5 ){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }

 
})

app.mount('#user-goal')