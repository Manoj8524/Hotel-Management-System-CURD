import { Router } from 'express';
import Customer from '../models/Customer.js';

const router = Router();

// Add a new customer
router.post('/add', async (req, res) => {
  const newCustomer = new Customer(req.body);
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update customer by room id
router.put('/update/:room_id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { room_id: req.params.room_id },
      req.body,
      { new: true }
    );
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete customer by room id
router.delete('/delete/:room_id', async (req, res) => {
  try {
    const deletedCustomer = await Customer.findOneAndDelete({ room_id: req.params.room_id });
    res.json(deletedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
