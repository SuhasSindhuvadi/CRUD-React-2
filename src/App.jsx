import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EmployeeDetails />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
