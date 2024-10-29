// Frontend/DigiVerifyMe/src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar'; // Import Sidebar
import AccountPage from './pages/Account/AccountPage';
import AccountRecoveryPage from './pages/Account/AccountRecoveryPage';
import LoginPage from './pages/Account/LoginPage';
import SignupPage from './pages/Account/SignupPage';
import SessionTrackingPage from './pages/SessionManagementPage';
import ZKPPage from './pages/ZKPPage';
import DashboardPage from './pages/DashboardPage';

import WalletPage from './pages/Wallet/WalletPage';
import CredentialDetailsPage from './pages/Wallet/CredentialDetailsPage';
import VerificationRequestPage from './pages/Verification/VerificationRequestPage';
import SettingsPage from './pages/settings/SettingsPage';
import HelpSupport from './pages/HelpAndSupportPage'; // Ensure this matches your file name
import NotificationsPage from './pages/NotificationsPage';

function App() {
  return (
    <Router>
      <div className="App flex">
        {/* Conditionally render the header and sidebar on non-auth pages */}
        <Routes>
          {/* Routes without Header and Sidebar */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* For pages with Header and Sidebar */}
          {['/', '/account', '/sessions', '/zkp', '/service-provider', '/wallet', '/verification-requests', '/settings', '/help-support', '/credential/:credentialId', '/notifications'].map((path) => ( 
            <Route key={path} path={path} element={
              <>
                <Header pageTitle={getPageTitle(path)} />
                <div className="flex">
                  <Sidebar username="Your Username" did="xyz123..." /> {/* Pass user info if available */}
                  <main className="flex-grow p-4 mt-16 ml-64"> {/* Adjust for header and sidebar height */}
                    {getRouteComponent(path)}
                  </main>
                </div>
              </>
            } />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

// Helper function to set the page title dynamically based on the path
function getPageTitle(path: string) {
  switch (path) {
    case '/':
      return 'Dashboard';
    case '/account':
      return 'Account';
    case '/sessions':
      return 'Session Management';
    case '/zkp':
      return 'ZKP Verification';
    case '/credential/:credentialId':
      return 'credential';
    case '/wallet':
        return 'Wallet';
    case '/verification-requests':
      return 'Verification Requests';
    case '/notifications':
      return 'notifications';
    case '/help-support':
      return 'Help & Support'; // Make sure this matches the path
    case '/settings':
      return 'Settings';
    default:
      return '';
  }
}

// Function to get the component for the route
function getRouteComponent(path: string) {
  switch (path) {
    case '/':
      return <DashboardPage />;
    case '/account':
      return <AccountPage />;
    case '/account/recovery':
      return <AccountRecoveryPage />;
    case '/sessions':
      return <SessionTrackingPage />;
    case '/zkp':
      return <ZKPPage />;
    case '/wallet':
      // 
      return <WalletPage />;
    case '/credential/:credentialId':
        return <CredentialDetailsPage />;
    case '/verification-requests':
      return <VerificationRequestPage />;
    case '/notifications':
      return <NotificationsPage />;
    case '/help-support':
      return <HelpSupport />; // Ensure this matches your import
    case '/settings':
      return <SettingsPage />;
    default:
      return null;
  }
}

export default App;
