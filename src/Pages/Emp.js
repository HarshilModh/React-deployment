import React from 'react'

export const Emp = ({emp}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{emp.eName}</td>
                        <td>{emp.eSalary}</td>
                        <td><button className = "btn btn-success">DELETE</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
