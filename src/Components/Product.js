import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div>
            <h4>product wroks !!</h4>
            <ul>
                <li>
                <Link to ="product/Iphone 12">Iphone 12</Link>
                </li>
                <li>
                <Link to ="product/Asus ROG 3">Asus ROG 3</Link>
                </li>
                <li>
                <Link to ="product/phone 12 pro">Iphone 12 pro</Link> 
                </li>
            </ul>
        </div>
    )
}
