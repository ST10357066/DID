// Frontend\DigiVerifyMe\src\pages\settings\NotificationsContent.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import Switch from "../../components/common/Switch";

// NotificationsContent component
const NotificationsContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Notification Preferences</CardTitle>
      <CardDescription>Manage how you receive notifications</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        {
          title: "Verification Requests",
          description: "Notify when new verification requests arrive",
        },
        {
          title: "Security Alerts",
          description: "Notify about important security events",
        },
        {
          title: "Credential Updates",
          description: "Notify when credentials are about to expire",
        },
      ].map(({ title, description }) => (
        <div key={title} className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="font-medium">{title}</div>
            <div className="text-sm text-muted-foreground">{description}</div>
          </div>
          <Switch />
        </div>
      ))}
    </CardContent>
  </Card>
);

export default NotificationsContent;
