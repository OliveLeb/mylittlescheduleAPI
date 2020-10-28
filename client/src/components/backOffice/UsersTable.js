import React, { useContext } from 'react'
import { Context as AdminContext} from '../../context/AdminContext'

const UsersTable = () => {

    const { users } = useContext(AdminContext)

    return (
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>is Admin</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.is_admin ? 'true' : 'false'}
                            </td>
                            <td><button className='btn btn-danger'>X</button></td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    )
}

export default UsersTable
