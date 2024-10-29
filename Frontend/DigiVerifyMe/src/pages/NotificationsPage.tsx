// Frontend/DigiVerifyMe/src/pages/NotificationsPage.tsx
import { Card, CardContent } from '../components/common/Card';
import NotificationItem from '../components/notifications/NotificationItem';

const NotificationsPage = () => {
  // Sample notifications data; replace this with actual data as needed
  const notifications = [
    {
      id: 1,
      title: "Verification Request",
      message: "You have a new verification request.",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Security Alert",
      message: "A login attempt was made from a new device.",
      timestamp: new Date().toISOString(),
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      
      {notifications.length === 0 ? (
        <Card>
          <CardContent className="text-center">
            <p>No notifications available.</p>
          </CardContent>
        </Card>
      ) : (
        notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))
      )}
    </div>
  );
};

export default NotificationsPage;
