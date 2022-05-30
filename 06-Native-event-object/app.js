

const app = Vue.createApp({
    data() {

        return {
            counter: 0 ,
            name : ''
        }
    },

    methods: {

        increment(num) {
            this.counter = this.counter + num
        },

        decrement(num) {
            this.counter = this.counter - num
        },

        // The browser provide default event object

        setName(event , lastName){

            this.name = event.target.value + ' ' + lastName
        }
    }
})

app.mount('#events')