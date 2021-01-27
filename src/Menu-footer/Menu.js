import React from 'react'
import {Link} from 'react-router-dom'

const Menu = props => {
    return (
        <div className="d-flex justify-content-center menu">
            <Link to ='/' >Home</Link>
            <Link to ='/daily'>Daily Case</Link>
         
        </div>
    )
}


export default Menu
