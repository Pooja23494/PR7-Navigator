import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee'
import ViewEmployees from './pages/ViewEmployees'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [error, setError] = useState([]);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value, checked } = e.target;
    let newHobby = [...hobby];
    if (name == 'hobby') {
      if (checked) {
        newHobby = [...hobby, value];
      }
      else {
        newHobby = newHobby.filter(item => item != value);
      }
      value = newHobby;
      setHobby(newHobby);
    }
    setEmployee({ ...employee, [name]: value });
  }

  const validation = () => {
    let error = {};

    if (!employee.profileImg) error.profileImg = 'Please Enter Your Profile Image Url.';
    if (!employee.ename) error.ename = 'Please Enter Employee Name.';
    if (!employee.email) error.email = 'Please Enter Email Address.';
    if (!employee.mobile) error.mobile = 'Please Enter Your Mobile Number.';
    if (!employee.password) error.password = 'Please Enter Your Password.';
    if (!employee.gender) error.gender = 'Please Select Your Gender.';
    if (!employee.hobby || employee.hobby.length == 0) error.hobby = 'Please Select Your Hobby.';
    if (!employee.city) error.city = 'Please Select City.';
    if (!employee.address) error.address = 'Please Enter Your Address.';

    setError(error);
    return Object.keys(error).length == 0;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    let newList = [];
    if (employee.id) {
      newList = list.map((item) => {
        if (item.id == employee.id) {
          return employee;
        }
        return item;
      })
      Navigate('/viewemployees');
    }
    else {
      newList = [...list, { ...employee, id: Date.now() }];
    }
    setList(newList);
    localStorage.setItem('employees', JSON.stringify(newList));
    setEmployee({});
    setHobby([]);
  }

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('employees')) || [];
    setList(oldList);
  }, [])

  const handleDelete = (id) => {
    let newList = list.filter(item => item.id != id);
    setList(newList);
    localStorage.setItem('employees', JSON.stringify(newList));
  }

  const handleEdit = (id) => {
    let data = list.find(item => item.id == id);
    setEmployee(data);
    setHobby(data.hobby);
    Navigate('/addemployee');
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addemployee' element={<AddEmployee employee={employee} hobby={hobby} handleChange={handleChange} handleSubmit={handleSubmit} error={error} />} />
        <Route path='/viewemployees' element={<ViewEmployees list={list} handleDelete={handleDelete} handleEdit={handleEdit} />} />
      </Routes>
    </>
  )
}

export default App
