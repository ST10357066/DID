// Frontend/DigiVerifyMe/src/components/layout/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, Shield, Settings, HelpCircle, LogOut } from 'lucide-react'; // Icons for navigation

interface SidebarProps {
  username: string;
  did: string;
}

const Sidebar: React.FC<SidebarProps> = ({ username, did }) => {
  const location = useLocation();

  // Helper function to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-16 w-64 h-full bg-gray-800 text-white flex flex-col">
      {/* Profile Section */}
      <div className="p-4 border-b border-gray-700">
        <img src="/path/to/profile-picture.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <h2 className="text-lg font-semibold">{username}</h2>
          <p className="text-sm text-gray-400">DID: {did}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <Link to="/account" className="text-gray-300 hover:text-white" aria-label="Edit Account">Edit</Link>
          <Link to="/logout" className="text-red-500 hover:text-red-300" aria-label="Logout">Logout</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow mt-4" aria-label="Main Navigation">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={`block p-3 rounded ${isActive('/') ? 'bg-gray-700' : ''}`} aria-label="Dashboard">
              <Home className="inline-block w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/wallet" className={`block p-3 rounded ${isActive('/wallet') ? 'bg-gray-700' : ''}`} aria-label="Wallet">
              <Wallet className="inline-block w-4 h-4 mr-2" />
              Wallet
            </Link>
          </li>
          <li>
            <Link to="/verification-requests" className={`block p-3 rounded ${isActive('/verification-requests') ? 'bg-gray-700' : ''}`} aria-label="Verification Requests">
              <Shield className="inline-block w-4 h-4 mr-2" />
              Verification Requests
            </Link>
          </li>
          <li>
            <Link to="/sessions" className={`block p-3 rounded ${isActive('/sessions') ? 'bg-gray-700' : ''}`} aria-label="Session Management">
              <Settings className="inline-block w-4 h-4 mr-2" />
              Session Management
            </Link>
          </li>
          <li>
            <Link to="/settings" className={`block p-3 rounded ${isActive('/settings') ? 'bg-gray-700' : ''}`} aria-label="Settings">
              <Settings className="inline-block w-4 h-4 mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/help-support" className={`block p-3 rounded ${isActive('/help-support') ? 'bg-gray-700' : ''}`} aria-label="Help and Support">
              <HelpCircle className="inline-block w-4 h-4 mr-2" />
              Help & Support
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <Link to="/logout" className="block w-full p-3 text-center text-red-500 hover:bg-gray-700 rounded" aria-label="Logout">
          <LogOut className="inline-block w-4 h-4 mr-2" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
