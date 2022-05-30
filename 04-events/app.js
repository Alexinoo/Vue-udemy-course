const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods : {

    // No need to return anything - 
    increment(){
      this.counter = this.counter + 1
    } ,

    decrement(){
      this.counter = this.counter - 1
    } ,
  }
});

app.mount('#events');
