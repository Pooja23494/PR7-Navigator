import React, { useState } from 'react'

const AddEmployee = ({ employee, handleChange, handleSubmit, hobby, error }) => {
    const cities = [
        "Ahmedabad",
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Chennai",
        "Kolkata",
        "Hyderabad"
    ];
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-5 my-5 shadow-lg">
                            <form method='post' onSubmit={handleSubmit}>
                                <h2 className='text-center mb-4 text-primary'>{employee.id ? 'Update' : 'Add'} Employee</h2>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="profileImg">Profile Picture</label>
                                    <input className='form-control' type="url" name='profileImg' id='profileImg' onChange={handleChange} value={employee.profileImg || ''} />
                                    <span className='text-danger'>{error.profileImg}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="ename">Employee Name</label>
                                    <input className=' form-control' type="text" id='ename' name='ename' onChange={handleChange} value={employee.ename || ''} />
                                    <span className='text-danger'>{error.ename}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input className=' form-control' type="email" id='email' name='email' onChange={handleChange} value={employee.email || ''} />
                                    <span className='text-danger'>{error.email}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="mobile">Mobile Number</label>
                                    <input className=' form-control' type="tel" id='mobile' name='mobile' onChange={handleChange} value={employee.mobile || ''} />
                                    <span className='text-danger'>{error.mobile}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="password">Password</label>
                                    <input className=' form-control' type="password" id='password' name='password' onChange={handleChange} value={employee.password || ''} />
                                    <span className='text-danger'>{error.password}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="gender">Gender</label>
                                    <div className=''>
                                        <input className='me-2' type="radio" id='male' name='gender' onChange={handleChange} checked={employee.gender == 'Male'} value='Male' />
                                        <label className='form-label' htmlFor="male">Male</label>
                                    </div>
                                    <div className=''>
                                        <input className='me-2' type="radio" id='female' name='gender' onChange={handleChange} checked={employee.gender == 'Female'} value='Female' />
                                        <label className='form-label' htmlFor="female">Female</label>
                                    </div>
                                    <span className='text-danger'>{error.gender}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="hobby">Hobby</label>
                                    <div className=''>
                                        <input className='me-2' type="checkbox" id='reading' name='hobby' onChange={handleChange} checked={hobby?.includes('Reading')} value='Reading' />
                                        <label className='form-label' htmlFor="reading">Reading</label>
                                    </div>
                                    <div className=''>
                                        <input className='me-2' type="checkbox" id='travelling' name='hobby' onChange={handleChange} checked={hobby?.includes('Travelling')} value='Travelling' />
                                        <label className='form-label' htmlFor="travelling">Travelling</label>
                                    </div>
                                    <div className=''>
                                        <input className='me-2' type="checkbox" id='coding' name='hobby' onChange={handleChange} checked={hobby?.includes('Coding')} value='Coding' />
                                        <label className='form-label' htmlFor="coding">Coding</label>
                                    </div>
                                    <div className=''>
                                        <input className='me-2' type="checkbox" id='dancing' name='hobby' onChange={handleChange} checked={hobby?.includes('Dancing')} value='Dancing' />
                                        <label className='form-label' htmlFor="dancing">Dancing</label>
                                    </div>
                                    <div className=''>
                                        <input className='me-2' type="checkbox" id='singing' name='hobby' onChange={handleChange} checked={hobby?.includes('Singing')} value='Singing' />
                                        <label className='form-label' htmlFor="singing">Singing</label>
                                    </div>
                                    <span className='text-danger'>{error.hobby}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="city">City</label>
                                    <select className='form-select' name="city" id="city" onChange={handleChange} value={employee.city || ''}>
                                        <option value="" disabled>--Select City--</option>
                                        {
                                            cities.map((city) => {
                                                return (
                                                    <option value={city}>{city}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <span className='text-danger'>{error.city}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className='form-label' htmlFor="address">Address</label>
                                    <textarea className='form-control' name="address" id="address" onChange={handleChange} value={employee.address || ''}></textarea>
                                    <span className='text-danger'>{error.address}</span>
                                </div>
                                <div className='mt-4'>
                                    <button type='submit' className='btn btn-primary'>{employee.id ? 'Update' : 'Submit'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee
