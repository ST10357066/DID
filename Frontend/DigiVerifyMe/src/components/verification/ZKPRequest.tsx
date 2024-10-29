// Frontend\DigiVerifyMe\src\components\ZKPRequest.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitZKP } from '../../store/zkSlice';
import { RootState } from '../../store/store'; // Import your root state type
import type { AppDispatch } from '../../store/store'; // Import your dispatch type

function ZKPRequest() {
  const [proofType, setProofType] = useState<string>(''); // Specify type for state
  const [proofData, setProofData] = useState<string>(''); // Specify type for state
  const dispatch = useDispatch<AppDispatch>(); // Specify dispatch type
  const { error } = useSelector((state: RootState) => state.zk); // Adjust according to your ZKState

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Specify the event type
    e.preventDefault();
    const proof = "example_proof"; // Replace with actual proof data
    dispatch(submitZKP({ proof, proofType, proofData })); // Dispatch the thunk action
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-4">
      <select 
        value={proofType} 
        onChange={(e) => setProofType(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Proof Type</option>
        <option value="age">Age Verification</option>
        <option value="identity">Identity Verification</option>
      </select>
      <textarea
        value={proofData}
        onChange={(e) => setProofData(e.target.value)}
        placeholder="Enter proof data"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Submit ZKP
      </button>
      {error && <p className="text-red-500">Error: {error}</p>} {/* Show error if it exists */}
    </form>
  );
}

export default ZKPRequest;
