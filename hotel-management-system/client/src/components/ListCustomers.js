import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Li.css"; // Ensure the CSS file is imported

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Customer List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Aadhar No</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.room_id}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.customer_age}</td>
              <td>{customer.customer_address}</td>
              <td>{customer.customer_mobileNo}</td>
              <td>{customer.customer_aadharno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCustomers;
