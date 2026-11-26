import React, { useEffect, useState } from 'react'
import { listEmployees } from './services/EmployeeService'

const ListEmployeeComponent = () => {

    // const dummyData = [
    //     {
    //         id: 1,
    //         firstName: "Ramesh",
    //         lastName: "Fadatare",
    //         email: "ramesh.fadatare@example.com",
    //     },
    //     {
    //         id: 2,
    //         firstName: "Aisha",
    //         lastName: "Khan",
    //         email: "aisha.khan@example.com",
    //     },
    //     {
    //         id: 3,
    //         firstName: "Daniel",
    //         lastName: "Kim",
    //         email: "daniel.kim@example.com",
    //     },
    //     {
    //         id: 4,
    //         firstName: "Sofia",
    //         lastName: "Garcia",
    //         email: "sofia.garcia@example.com",
    //     },
    //     {
    //         id: 5,
    //         firstName: "Amir",
    //         lastName: "Karimov",
    //         email: "amir.karimov@example.com",
    //     },
    // ];

    const [employees, setEmployees] = useState([])


    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(err => {
            console.error(err);
        })
    }, [])

    return (
        <div>
            <h2 className='text-center'>List of Employees</h2>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent