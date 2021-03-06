const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {

        outputFullName(){

            console.log('Running Again..');
            if (this.name === ''){
                return '';
            }
            return this.name + '  ' + 'Schwazmuller';
        },
    
        add(num) {
            this.counter = this.counter + num
        },
        reduce(num) {
            this.counter = this.counter - num
            // this.counter--;
        },

        resetInput() {
            this.name = ''
        }
    }
});

app.mount('#events');
