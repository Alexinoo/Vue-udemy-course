const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },

  methods: {

    saveInput(event) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      this.message = this.currentUserInput;
    },

  },
});

app.mount('#app');

// =================================================
// Sections controlled by Vue in the HTML are called templates
// We can actually cut the paragraph in the second section known as app2
// then add it to a template property in our Vue app configuration object

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