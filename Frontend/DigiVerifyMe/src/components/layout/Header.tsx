// Frontend/DigiVerifyMe/src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react'; // Icons for notifications and account settings
import LogoutButton from '../session/LogoutButton';

function Header({ pageTitle }: { pageTitle: string }) {
  return (
    <header className="bg-gray-800 p-4 shadow-md flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      {/* Left: Logo or App Name */}
      <div className="flex items-center space-x-2">
        <img src="/path/to/logo.png" alt="App Logo" className="w-8 h-8" />
        <span className="text-white text-lg font-semibold">DigiVerifyMe</span>
      </div>

      {/* Center: Page Title */}
      <div className="text-white text-lg font-semibold">{pageTitle}</div>

      {/* Right: Quick Links */}
      <div className="flex space-x-4 items-center">
        {/* Notifications */}
        <Link to="/notifications" className="text-white hover:text-gray-300">
          <Bell size={24} />
        </Link>

        {/* Account Settings */}
        <Link to="/settings" className="text-white hover:text-gray-300">
          <Settings size={24} />
        </Link>

        {/* Logout */}
        <LogoutButton />

        {/* Login and Register Buttons */}
        <Link to="/login" className="text-white hover:text-gray-300">
          Login
        </Link>
        <Link to="/signup" className="text-white hover:text-gray-300">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
