import React from 'react';
import { useBill } from '../context/BillContext';

const Result = () => {
  const { people, contributions, tip } = useBill();

  // Calculate the total contributions
  const totalContributions = Object.values(contributions).reduce((a, b) => a + b, 0);
  
  // Calculate the total tip amount
  const totalTip = (totalContributions * tip) / 100;

  // Find the highest contribution
  const maxContribution = Math.max(...Object.values(contributions));

  return (
    <div className="p-4 mb-4">
      <h2 className="text-xl">Result</h2>
      <p>Total Contributions: ${totalContributions.toFixed(2)}</p>
      <p>Tip Percentage: {tip}%</p>
      <p>Total Tip: ${totalTip.toFixed(2)}</p>
      <p>Total Bill (including tip): ${(totalContributions + totalTip).toFixed(2)}</p>
      <h3 className="text-lg mt-4">People and their contributions:</h3>
      <ul>
        {people.map((person, index) => (
          <li
            key={index}
            className={`mt-2 p-2 border rounded ${
              contributions[person] === maxContribution ? 'bg-red-500 text-white' : ''
            }`}
          >
            {person}: ${contributions[person].toFixed(2)} + ${(contributions[person] * tip / 100).toFixed(2)} (tip)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
