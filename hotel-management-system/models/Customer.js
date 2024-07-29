import mongoose from 'mongoose';

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  room_id: { type: String, required: true },
  customer_name: { type: String, required: true },
  customer_age: { type: Number, required: true },
  customer_address: { type: String, required: true },
  customer_mobileNo: { type: String, required: true },
  customer_aadharno: { type: String, required: true }
});

export default mongoose.model('Customer', CustomerSchema);
