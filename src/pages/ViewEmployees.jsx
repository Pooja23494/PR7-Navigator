import React, { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ViewEmployees = ({ list, handleDelete, handleEdit }) => {
    const [view, setView] = useState({});

    const handleViewPass = (id) => {
        if (view.id == id) {
            setView({});
        }
        else {
            setView({ id: id });
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className='table table-bordered table-hover table-striped caption-top text-center align-middle mb-0'>
                                <caption><h2 className='text-center my-3 text-primary'>Employees Details</h2></caption>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Profile Picture</th>
                                        <th>Employee Name</th>
                                        <th>Email</th>
                                        <th>Mobile No</th>
                                        <th>Password</th>
                                        <th>Gender</th>
                                        <th>Hobby</th>
                                        <th>City</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((emp, index) => {
                                            return (
                                                <tr key={emp.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img src={emp.profileImg} style={{ width: "60px", height: "60px", objectFit: "cover" }} alt={emp.ename} />
                                                    </td>
                                                    <td>{emp.ename}</td>
                                                    <td>{emp.email}</td>
                                                    <td>{emp.mobile}</td>
                                                    <td>
                                                        <div className='d-flex justify-content-center align-items-center gap-2'>
                                                            <input type={view.id == emp.id ? 'text' : 'password'} className='form-control shadow-none form-control-sm border-0 bg-transparent text-center' style={{ width: "100px" }} value={emp.password} readOnly />
                                                            <button type='button' className='btn btn-sm btn-outline-secondary' onClick={() => handleViewPass(emp.id)}>
                                                                {view.id == emp.id ? <IoIosEyeOff /> : <IoIosEye />}</button>
                                                        </div>
                                                    </td>
                                                    <td>{emp.gender}</td>
                                                    <td>{emp.hobby?.join(', ')}</td>
                                                    <td>{emp.city}</td>
                                                    <td>{emp.address}</td>
                                                    <td className='align-middle'>
                                                        <div className='d-flex justify-content-center gap-2'>
                                                            <button className='btn btn-danger' type='button' onClick={() => handleDelete(emp.id)}><MdDelete /></button>
                                                            <button className='btn btn-warning' type='button' onClick={() => handleEdit(emp.id)}><MdEdit /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewEmployees
