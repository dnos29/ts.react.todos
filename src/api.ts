import axios from 'axios';

export const getTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos?_start=8&_limit=10')
    .then(({data}) => data)
}