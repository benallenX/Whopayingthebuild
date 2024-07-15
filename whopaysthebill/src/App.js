import React from 'react';
import BillInput from './components/BillInput';
import PeopleInput from './components/PeopleInput';
import TipInput from './components/TipInput';
import Result from './components/Result';
import {motion} from 'framer-motion'

const App = () => {
  return (
    <motion.div
    className="flex justify-center items-center min-h-screen bg-gray-100"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl text-center mb-4">Who Pays the Bill</h1>
      <BillInput />
      <PeopleInput />
      <TipInput />
      <Result />
    </motion.div>
  </motion.div>
  );
};

export default App;

