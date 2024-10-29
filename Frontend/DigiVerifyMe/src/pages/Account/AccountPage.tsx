// Frontend\DigiVerifyMe\src\pages\AccountPage.tsx

import { useSelector } from 'react-redux';
import DIDVerification from '../../components/verification/DIDVerification';
import SessionList from '../../components/session/SessionList';
import { RootState } from '../../store/store';

function AccountPage() {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <h2 className="text-lg font-semibold">Please log in to view your account.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold">Account Page</h2>
      <p className="mt-2 text-lg">Welcome, {user.name}!</p>
      <p className="text-sm text-muted-foreground">Your DID: <span className="font-medium">{user.did}</span></p>
      <div className="mt-6">
        <DIDVerification />
      </div>
      <h3 className="mt-8 text-xl font-semibold">Active Sessions</h3>
      <SessionList />
    </div>
  );
}

export default AccountPage;
