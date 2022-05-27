const buttonEl = document.querySelector('button')

const inputEl = document.querySelector('input')

const ulEl = document.querySelector('ul')


buttonEl.addEventListener('click', addGoal) //Listen to an event and execute a function that responds to the event


function addGoal() {

    const enteredValue = inputEl.value;   //Get Input value
    
    const listItemEl = document.createElement('li')  //creates <li> </li>

    listItemEl.textContent = enteredValue   //Writes to <li>enteredValue</li>

    ulEl.appendChild(listItemEl) //calls <ul></ul>    --Appends Child---  <li>enteredValue</li> 

   
    inputEl.value = ""  // Reset Input Field

}