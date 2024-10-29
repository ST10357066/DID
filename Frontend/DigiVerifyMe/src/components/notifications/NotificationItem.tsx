// Frontend/DigiVerifyMe/src/components/notifications/NotificationItem.tsx
import React from 'react';
import { Card, CardContent } from '../common/Card';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string; // Adjust this according to your data structure
}

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  return (
    <Card className="mb-4">
      <CardContent>
        <h3 className="font-bold">{notification.title}</h3>
        <p>{notification.message}</p>
        <p className="text-sm text-muted-foreground">
          {new Date(notification.timestamp).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default NotificationItem;
