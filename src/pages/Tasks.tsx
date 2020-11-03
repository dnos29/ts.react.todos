import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getTodos } from '../api'
import { useFormik } from 'formik'
import { useTasks } from '../components/task/task.query';



export const Tasks = () => {
    const [completed, setCompleted] = useState('');
    const statusQuery = useTasks(completed);
    console.log("statusQuery", statusQuery);
    

    const match = useRouteMatch();
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            console.log("onSubmit-values: ", values);
            
        }
    })

    const { isLoading, isError, data, error } = useQuery(['todos' , completed], (_, completed: string) => {
        console.log("useQuery-completed", completed);
        
        return getTodos(completed);
    })

    if (isError) {
        return <span>Error: Loi roai</span>
    }

    return (
        <div className="task-list">
            <h1>Tasks</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    placeholder="Input task"
                    onChange={handleChange}
                    value={values.name}
                    />
                 <button type="submit">Add</button>   
            </form>
            <hr/>
            <label htmlFor="">Is Complete: </label>
            <select value={completed} onChange={(e) => setCompleted(e.target.value)}>
                <option value="">All</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <p></p>
            <div>
                {isLoading && (<span>Loading...</span>)}
                {
                    data ? (
                        data.map((todo: any) => (
                        <li key={todo.id}><Link to={`${match.url}/components`}>{todo.title} - isCompleted: {todo.completed ? 'true' : 'false'}</Link></li>
                        ))
                    ) : (
                        <div>Task not found</div>
                    )
                }
            </div>
        </div>
    )
}