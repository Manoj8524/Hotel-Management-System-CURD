import React, { useState } from 'react';
import axios from 'axios';
import "./Re.css"; // Ensure the CSS file is imported

const RemoveCustomer = () => {
  const [room_id, setRoomId] = useState('');

  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/customers/delete/${room_id}`);
      alert('Customer removed successfully!');
      setRoomId('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRemove}>
        <div className="segment">
          <h1>Remove Customer</h1>
        </div>
        
        <label>
          <input
            type="text"
            name="room_id"
            placeholder="Room ID"
            value={room_id}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </label>
        
        <button className="red" type="submit"><i className="icon ion-md-lock"></i> Remove Customer</button>
      </form>
    </div>
  );
};

export default RemoveCustomer;
