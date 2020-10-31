import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to='/dashboard/'><h2>Dashboard</h2></NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to='/dashboard/users'>Users</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
