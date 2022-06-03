

const app = Vue.createApp({

    data(){

        return {
            friends : [
                { id: 'Manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' } ,
                { id: 'Julie', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com' } ,
            ]
        }
    },
})

/* How to add a component

    -Components are re-usable pieces of HTML with connected data/methods and logic

    -Can re-use a component and pass different data and logic

    - Call component() using the Vue app instance

    -  component() - Takes in 2 params

        -1 . A unique identifier for the component - MUST NOT BE A HTML ELEMENT LIKE h2, 
                - Needs to be a custom name
        -2. A configuration object
        
    -The config object takes in a template property - i.e Section to be controlled by the component - This can be a whole part of a HTML document `<section> </section`

    -components are like mini-apps

    -they can have their own data / methods

*/



app.component('friend-contact' , {

    template : `    
       <li>
        <h2>{{ friend.name}}</h2>
        <button @click="toggleDetails">{{ areDetailsVisible ? ' Hide' : 'Show' }} Details</button>
        <ul v-if="areDetailsVisible">
          <li><strong>Phone : </strong>{{ friend.phone }}</li>
          <li><strong>Email : </strong> {{ friend.email }}</li>
        </ul>
      </li>
    ` ,

    data(){
        return {
            areDetailsVisible : false ,

            friend: { id: 'Manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
        }
    },

    methods : {

        toggleDetails() {
            this.areDetailsVisible = !this.areDetailsVisible
        },
    }
})

app.mount('#app')