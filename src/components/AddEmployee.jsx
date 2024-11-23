import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    empName: '',
    empAge: '',
    empSal: '',
    empDept: '',
    empGen: '',
    empEmail: '',
    empPhone: '',
    empLoc: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/employee', employee);
      navigate('/');
    } catch (error) {
      console.error('There was an error adding the employee!', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="empName" className="form-control" value={employee.empName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" name="empAge" className="form-control" value={employee.empAge} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" name="empSal" className="form-control" value={employee.empSal} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input type="text" name="empDept" className="form-control" value={employee.empDept} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select name="empGen" className="form-control" value={employee.empGen} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="empEmail" className="form-control" value={employee.empEmail} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" name="empPhone" className="form-control" value={employee.empPhone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="empLoc" className="form-control" value={employee.empLoc} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
