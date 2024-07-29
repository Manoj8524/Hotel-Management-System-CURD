import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import ListCustomers from './components/ListCustomers';
import UpdateCustomer from './components/UpdateCustomer';
import RemoveCustomer from './components/RemoveCustomer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/list-customers" element={<ListCustomers />} />
        <Route path="/update-customer" element={<UpdateCustomer />} />
        <Route path="/remove-customer" element={<RemoveCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
