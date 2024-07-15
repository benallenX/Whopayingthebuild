import React from 'react';
import { motion } from 'framer-motion';
import { useBill } from '../context/BillContext';

const BillInput = () => {
  const { bill, setBill } = useBill();

  const handleChange = (e) => {
    setBill(e.target.value);
  };

  return (
    <motion.div
      className="p-4 mb-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <label className="block text-gray-700">Enter Bill Amount:</label>
      <input
        type="number"
        value={bill}
        onChange={handleChange}
        className="mt-2 p-2 w-full border rounded"
      />
    </motion.div>
  );
};

export default BillInput;
