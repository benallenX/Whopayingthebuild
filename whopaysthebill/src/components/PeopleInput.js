import React, { useState } from 'react';
import { useBill } from '../context/BillContext';

const PeopleInput = () => {
  const { people, setPeople, contributions, setContributions } = useBill();
  const [person, setPerson] = useState('');
  const [contribution, setContribution] = useState('');

  const handleChangePerson = (e) => {
    setPerson(e.target.value);
  };

  const handleChangeContribution = (e) => {
    setContribution(e.target.value);
  };

  const addPerson = () => {
    setPeople([...people, person]);
    setContributions({ ...contributions, [person]: parseFloat(contribution) });
    setPerson('');
    setContribution('');
  };

  return (
    <div className="p-4 mb-4">
      <label className="block text-gray-700">Enter Person Name:</label>
      <input
        type="text"
        value={person}
        onChange={handleChangePerson}
        className="mt-2 p-2 w-full border rounded"
      />
      <label className="block text-gray-700 mt-4">Enter Contribution:</label>
      <input
        type="number"
        value={contribution}
        onChange={handleChangeContribution}
        className="mt-2 p-2 w-full border rounded"
      />
      <button onClick={addPerson} className="mt-2 p-2 bg-blue-500 text-white rounded w-full">
        Add Person
      </button>
    </div>
  );
};

export default PeopleInput;

