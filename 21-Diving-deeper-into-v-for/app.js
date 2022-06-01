

const app = Vue.createApp({
  data() {
    return {
      enteredValue : '',
       goals: [] ,

       peoples : {
         name : 'Max',
         age : 35
       },
       }
  },
  methods : {

    addGoal(){
      this.goals.push(this.enteredValue)
    }
  }
})

app.mount('#user-goals')
