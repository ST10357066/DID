// Frontend\DigiVerifyMe\src\components\LogoutButton.tsx
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button 
      onClick={handleLogout} 
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
      Logout
    </button>
  );
}

export default LogoutButton;
