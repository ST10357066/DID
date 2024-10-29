// Frontend\DigiVerifyMe\src\components\DIDVerification.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store'; // Import AppDispatch
import { verifyDID } from '../../store/authSlice';

const DIDVerification: React.FC = () => {
  const [challenge, setChallenge] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>(); // Use the AppDispatch type
  
  // Retrieve the necessary state from Redux
  const { did, verificationStatus, loading, error } = useSelector((state: RootState) => state.auth);

  const handleVerify = () => {
    if (!challenge) {
      return; // Prevent empty submission
    }
    
    // Dispatch the verification action with the correct payload
    if (did) {
      dispatch(verifyDID({ did, challenge }));
    } else {
      console.error("DID is not available in the state.");
    }
  };

  return (
    <div>
      <h3>DID Verification</h3>
      <p>Your DID: {did}</p>
      <input
        id="challenge-input"
        type="text"
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        placeholder="Enter challenge"
        required
        aria-label="Challenge input"
      />
      <button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify DID'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {verificationStatus && <p>Status: {verificationStatus}</p>}
    </div>
  );
}

export default DIDVerification;

