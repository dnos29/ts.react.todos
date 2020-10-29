import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const Tasks = () => {
    const match = useRouteMatch();

    return (
        <>
            <h1>Tasks Page</h1>
            <div>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-vs-state`}>Props vs State</Link></li>
            </div>
        </>
    )
}