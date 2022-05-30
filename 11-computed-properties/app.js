
// computed Properties are essentially like methods with one important difference - used like a property but used as methods

// Vue will be aware of their dependencies and will only be executed if one of their dependencies change

// Third property for configuring Vue instance/app - Can be placed anywhere within  after/ before methods :{}

// Are called and executed differently

// You should name your computed properties just like the way you would name your data property - COz they are used like properties and not functions

// Return a value that will be yielded by the computed property

// Passed as a reference ; {{ fullname }} and not as {{ fullname() }}


// Bind events to methods and not computed properties


const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },

    computed : {
        fullname(){
            console.log('Running Again..');
            if (this.name === '') {
                return '';
            }
            return this.name + '  ' + 'Schwazmuller';
        }
    },

    methods: {

        // outputFullName() {
        //     console.log('Running Again..');
        //     if (this.name === '') {
        //         return '';
        //     }
        //     return this.name + '  ' + 'Schwazmuller';
        // },

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
