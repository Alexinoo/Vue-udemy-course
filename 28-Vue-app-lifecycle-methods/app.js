const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },

  methods: {
    // User-defined methods to react to user clicks

    saveInput(event) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      this.message = this.$refs.userText.value;
    },

  },

  // Vue app lifecycle methods

  beforeCreate(){
    console.log('beforeCreate() called..');
  },

  created(){
    console.log('created() called..');
  },

  beforeMount() {
    console.log('beforeMount() called..');
  },

  mounted(){
    console.log('mounted() called..');
  },

  beforeUpdate(){
    console.log('beforeUpdate() called..');
  },

  updated(){
    console.log('update() called..');
  },

  beforeUnmount(){
    console.log('beforeUnmount() called...');
  },

  unmounted(){
    console.log('unmounted() called...');
  }

});

app.mount('#app');

// unmount in action
setTimeout( ()=>{
  app.unmount()
}, 3000 )


const app2 = Vue.createApp({

  template : `
    <p>{{ favoriteMeal }}</p>
  `,

  data(){
    return {
      favoriteMeal : 'Pizza'
    }
  }

})

app2.mount('#app2')