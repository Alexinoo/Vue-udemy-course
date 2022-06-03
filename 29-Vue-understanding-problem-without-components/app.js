

const app = Vue.createApp({

    data(){

        return {

            areDetailsVisible : false ,
            friends : [
                { id: 'Manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' } ,
                { id: 'Julie', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com' } ,
            ]
        }
    },

    computed: {} ,

    methods: {

        toggleDetails(){
            this.areDetailsVisible = !this.areDetailsVisible
        },
    } ,
})

app.mount('#app')