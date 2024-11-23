import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditEmployee = () => {
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
  const { id } = useParams(); // Get ID from the route parameters
  const navigate = useNavigate();


  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employee/${id}`);
        setEmployee(response.data);
      } catch (error) {
        
        console.log(id);
        
        console.error('There was an error fetching the employee details!', error);
        alert('Employee not found!'); 
        navigate('/'); 
      }
    };
    fetchEmployee();
  }, [id, navigate]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/employee/${id}`, employee);
      navigate('/');
    } catch (error) {
      console.error('There was an error updating the employee!', error);
    }
  };

  return (
    <div className="container my-5">
      <div className="card mx-auto shadow" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Edit Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="empName"
                className="form-control"
                value={employee.empName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="empAge"
                className="form-control"
                value={employee.empAge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                name="empSal"
                className="form-control"
                value={employee.empSal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                name="empDept"
                className="form-control"
                value={employee.empDept}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                name="empGen"
                className="form-control"
                value={employee.empGen}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="empEmail"
                className="form-control"
                value={employee.empEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="empPhone"
                className="form-control"
                value={employee.empPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="empLoc"
                className="form-control"
                value={employee.empLoc}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
