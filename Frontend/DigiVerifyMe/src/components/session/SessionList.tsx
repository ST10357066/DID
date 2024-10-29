// Frontend\DigiVerifyMe\src\components\SessionList.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchSessions, terminateSession } from '../../store/sessionSlice';

function SessionList() {
  const dispatch = useDispatch();
  const { sessions, loading, error } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(fetchSessions() as any); // Use `as any` if TypeScript is not inferring correctly
  }, [dispatch]);

  const handleTerminate = (sessionId: string) => {
    dispatch(terminateSession(sessionId) as any); // Use `as any` to bypass type error temporarily
  };

  if (loading) return <div className="text-center">Loading sessions...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <ul className="space-y-2">
      {sessions.map((session) => (
        <li key={session.id} className="flex justify-between items-center p-4 border rounded-md shadow-sm">
          <div>
            <div>Device: {session.device}</div>
            <div className="text-gray-500">Last Active: {session.lastActive}</div>
          </div>
          <button 
            onClick={() => handleTerminate(session.id)} 
            disabled={loading} 
            className={`ml-4 px-3 py-1 rounded-md ${loading ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'} text-white transition`}
          >
            {loading ? 'Terminating...' : 'Terminate'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SessionList;
