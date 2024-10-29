// Frontend/DigiVerifyMe/src/pages/ZKPPage.tsx

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ZKPRequest from '../components/verification/ZKPRequest';
import { RootState } from '../store/store';
function ZKPPage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Zero-Knowledge Proof Verification</h2>
      <p>Submit a zero-knowledge proof for verification:</p>
      <ZKPRequest />
    </div>
  );
}

export default ZKPPage;