import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    let history = useNavigate()

    const handleDelete = (id) => {
        var index = Employee.map((e) => {
            return e.id
        }).indexOf(id)

        Employee.splice(index, 1)

        history('/')
    }

    const handleEdit = (id, name, age) => {
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('id', id)
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0
                                ? Employee.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <Link to="/edit">
                                                    <Button onClick={() => {
                                                        handleEdit(item.id, item.name, item.age)
                                                    }}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => {
                                                    handleDelete(item.id)
                                                }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : "No Data Available"
                        }
                    </tbody>
                </Table>

                <br />
                <Link to="/create" className='d-grid gap-2'>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home