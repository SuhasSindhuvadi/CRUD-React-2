import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('There was an error fetching the employees!', error);
      }
    };

    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employee/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.error('There was an error deleting the employee!', error);
    }
  };

  return (
    <div className="container table-container">
      <h2 className="text-center">Employee Details</h2>
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.empName}</td>
              <td>{employee.empAge}</td>
              <td>{employee.empSal}</td>
              <td>{employee.empDept}</td>
              <td>{employee.empLoc}</td>
              <td className="text-center">
                <Link to={`/edit/${employee.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;
