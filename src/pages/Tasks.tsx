import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getTodos } from '../api'
import { useFormik } from 'formik'


export const Tasks = () => {
    const match = useRouteMatch();
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
            console.log("onSubmit-values: ", values);
            
        }
    })

    const { isLoading, isError, data, error } = useQuery(['todos', 1], getTodos)

    if(isLoading){
        return (
            <span>Loading...</span>
        )
    }
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
            <div>
                {
                    data.map((todo: any) => (
                        <li key={todo.id}><Link to={`${match.url}/components`}>{todo.title}</Link></li>
                    ))
                }
            </div>
        </div>
    )
}