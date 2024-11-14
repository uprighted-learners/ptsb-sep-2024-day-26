import axios from 'axios';
import moment from 'moment';

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error)) 

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error(error))

const now = moment();
console.log("Current date and time", now.format('LLLL'));