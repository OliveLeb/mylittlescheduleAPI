import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <h2>Dashboard</h2>
            </div>
            <ul>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
