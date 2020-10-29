import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getTodos } from '../api'

export const Tasks = () => {
    const match = useRouteMatch();
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