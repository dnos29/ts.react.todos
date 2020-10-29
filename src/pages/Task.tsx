import React from 'react'
import { useParams } from 'react-router-dom'

export const Task = () => {
    let { id } = useParams<{id: string}>();
    console.log(useParams());
    
    return (
        <div>
            Task page: {id}
        </div>
    )
}