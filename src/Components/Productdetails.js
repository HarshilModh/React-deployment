import React from 'react'
import { useParams } from 'react-router-dom'

export const Productdetails = () => {
    const params=useParams();
    return (

        <div>
            <h4>{params.pId}</h4>

        </div>
    )
}
