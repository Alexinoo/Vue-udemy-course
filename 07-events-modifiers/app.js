

const app = Vue.createApp({

    data(){

        return {
            counter : 0,
            name : '',
            confirmedName : '',
        }

    } ,
    methods : {

        confirmInput(){
            this.confirmedName = this.name
        },

        setName(event , lastName){
            this.name = event.target.value + ' ' + lastName
        } ,

        submitForm(){
            console.log('Submitted!');
            
        },

        increment(num){
            this.counter = this.counter + num
        },

        decrement(num){
            this.counter = this.counter - num
        },
    }

})

app.mount('#events')