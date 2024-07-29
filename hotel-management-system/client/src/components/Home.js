import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Hotel Management System</h1>
      <nav>
        <ul className="list-group">
          <li>
            <Link to="/add-customer" className="btn">Add Customer</Link>
          </li>
          <li>
            <Link to="/list-customers" className="btn">List Customers</Link>
          </li>
          <li>
            <Link to="/update-customer" className="btn">Update Customer</Link>
          </li>
          <li>
            <Link to="/remove-customer" className="btn">Remove Customer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
