/*

                                                                                Watchers
===============================================================

 - A watcher is basically function you can tell Vue to execute when one of it's dependencies change

watch :{}  Added as a property - Can be placed anywhere

Defines a bunch of methods

We can use the name of the watcher method same with data property name - No conflicts

This tells Vue one important thing, Whenever name changes, the watcher method will re-execute

We dont return anything because we are not going to use the watcher anywhere in our HTML code to yield a return value.


A watcher automatically gets the last value of the watched data property as an argument ; In this case the name

A watcher function typically  takes in two arguments but still optional

e.g name(newValue , oldValue)

// NOT IDEAL IN SOME SCENARIOS SINCE WE WILL HAVE DIFFERENT WATCHERS FOR DIFFERENT PROPERTIES - WORK WITH COMPUTED PROPERTIES INSTEAD



// CASES WHERE WATCHERS SHINES / CAN BE USEFUL

// 1) When the counter exceeds 50 - RESET to 0

// 2) Http Requests you want to send when certain data changes

// 3) Timers - If certain values change

*/


const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            // fullname : '',
            lastName : '',
        };
    },

    watch : {

        // value means the latest value - if greater than 50 reset to 0
        // counter(value){
        //     if (value > 50){
        //         this.counter = 0;
        //     }
        // }

        // Or set a timeout of 2 seconds
        counter(value){
            if (value > 50){
                const self = this
                setTimeout(function(){
                    self.counter = 0;
                },2000)
               
            }
        }     

        // // Watches the name
        // name(value){

        //     // We could update full name to 
        //     this.fullname = value +' ' +this.lastName
        // },

        // // Watches the lastName
        // lastName(value){

        //     this.fullname = this.name + ' ' + value

        // }

    },

    computed : {
        fullname(){
            console.log('Running Again..');
            if (this.name === '' || this.lastName ==='' ) {
                return '';
            }
            return this.name + '  ' + this.lastName ;
        }
    },

    methods: {

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
