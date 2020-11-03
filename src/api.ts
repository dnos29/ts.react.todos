import axios from 'axios';
export const getTodos = (completed: string) => {
    let params = {};
    if(completed){
        params = {
            completed
        }
    }
    return axios.get('https://jsonplaceholder.typicode.com/todos?_start=8&_limit=10', {
        params
    })
    .then(({data}) => data)
}