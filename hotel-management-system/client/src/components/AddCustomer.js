import React, { useState } from 'react';
import axios from 'axios';
import "./Addc.css"; // Make sure to import the CSS file

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    room_id: '',
    customer_name: '',
    customer_age: '',
    customer_address: '',
    customer_mobileNo: '',
    customer_aadharno: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://hotel-management-system-curd.onrender.com/api/customers/add', formData);
      alert('Customer added successfully!');
      setFormData({
        room_id: '',
        customer_name: '',
        customer_age: '',
        customer_address: '',
        customer_mobileNo: '',
        customer_aadharno: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="segment">
          <h1>Add Customer</h1>
        </div>
        
        <label>
          <input
            type="text"
            name="room_id"
            placeholder="Room ID"
            value={formData.room_id}
            onChange={handleChange}
          />
        </label>
        
        <div className="form-row">
          <label>
            <input
              type="text"
              name="customer_name"
              placeholder="Customer Name"
              value={formData.customer_name}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="number"
              name="customer_age"
              placeholder="Customer Age"
              value={formData.customer_age}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <input
            type="text"
            name="customer_address"
            placeholder="Customer Address"
            value={formData.customer_address}
            onChange={handleChange}
          />
        </label>

        <div className="form-row">
          <label>
            <input
              type="text"
              name="customer_mobileNo"
              placeholder="Customer Mobile No"
              value={formData.customer_mobileNo}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="customer_aadharno"
              placeholder="Customer Aadhar No"
              value={formData.customer_aadharno}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="red" type="submit"><i className="icon ion-md-lock"></i> Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
